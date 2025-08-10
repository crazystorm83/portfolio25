import fs from 'fs-extra';
import minimist from 'minimist';
import path from 'path';
import { rollup } from 'rollup';

import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { exec as cpExec } from 'child_process';
import { promisify } from 'util';
import { File } from './stream/File.js';
const exec = promisify(cpExec);

import { packageManager } from './packages/PackageManager.js';

const args = minimist(process.argv.slice(2));
const isProduction = args.production || false;

const thirdPartyExternals = ['react', 'react-dom', 'lodash', 'jquery', 'yjs', 'y-websocket'];
const thirdPartyExternalsRegExp = new RegExp(`^(${thirdPartyExternals.join('|')})(\\/|$)`);

/**
 *
 */
async function buildTSDeclarationFiles() {
    const publicPackages = packageManager.getPublicPackages();

    for (const pkg of publicPackages) {
        const pkgDir = path.dirname(pkg.packageJsonPath);
        const pkgTsconfigPath = path.resolve(pkgDir, 'tsconfig.json');
        const tmpTsconfigPath = path.resolve(pkgDir, '.tsbuild.temp.json');
        const relRoot = path.relative(pkgDir, process.cwd()) || '.';
        const outDir = path.resolve(process.cwd(), '.ts-temp', path.basename(pkgDir));

        const hasLocalTsconfig = fs.existsSync(pkgTsconfigPath);

        const possibleRootTsconfig = path.join(relRoot, 'tsconfig.json');
        const baseConfigPath = hasLocalTsconfig
            ? './tsconfig.json'
            : (fs.existsSync(possibleRootTsconfig) ? possibleRootTsconfig : null);

        const tempConfig = {
            ...(baseConfigPath ? { extends: baseConfigPath } : {}),
            compilerOptions: {
                noEmit: false,
                declaration: true,
                declarationMap: true,
                emitDeclarationOnly: true,
                declarationDir: outDir,
                outDir: outDir,
                jsx: 'react-jsx',
                moduleResolution: 'Bundler',
                skipLibCheck: true,
            },
            include: ['src/**/*'],
        };

        fs.writeJsonSync(tmpTsconfigPath, tempConfig, { spaces: 2 });

        try {
            await exec(`npx tsc -p ${tmpTsconfigPath}`);
        } finally {
            fs.removeSync(tmpTsconfigPath);
        }
    }
}

/**
 * Copy generated .d.ts files from temporary directory into the package's types directory
 * and then clean up the temp directory.
 * @param {string} packageName
 * @param {string} outputPathForDeclaration
 * @param {string} packageJsonPath
 */
function moveTSDeclarationFilesIntoDist(packageName, outputPathForDeclaration, packageJsonPath) {
    try {
        const pkgDir = path.dirname(packageJsonPath);
        const tempOutDir = path.resolve(process.cwd(), '.ts-temp', path.basename(pkgDir));

        if (!fs.existsSync(tempOutDir)) return;

        fs.ensureDirSync(outputPathForDeclaration);
        fs.copySync(tempOutDir, outputPathForDeclaration, { overwrite: true, errorOnExist: false });
    } catch (_) {
        // ignore
    } finally {
        const pkgDir = path.dirname(packageJsonPath);
        const tempOutDir = path.resolve(process.cwd(), '.ts-temp', path.basename(pkgDir));
        if (fs.existsSync(tempOutDir)) fs.removeSync(tempOutDir);
    }
}

/**
 *
 * @param {string} packageName
 * @param {string} outputPath
 * @param {string} outputFile
 * @param {string} packageName
 * @returns {Object}
 */
function rollupInputOptions(inputFile, extensions, pkg) {
    const pkgDir = path.dirname(pkg.packageJsonPath);
    const pkgTsconfigPath = path.resolve(pkgDir, 'tsconfig.json');
    const tsconfigPath = fs.existsSync(pkgTsconfigPath)
        ? pkgTsconfigPath
        : path.resolve('tsconfig.json');

    const plugins = [
        peerDepsExternal(),
        alias({
            entries: [
                {
                    find: '@black-box',
                    replacement: path.resolve('packages/00.black-box/src/index.ts'),
                },
                { find: '@nh-html', replacement: path.resolve('packages/10.nh-html/src/index.ts') },
                {
                    find: '@nh-react',
                    replacement: path.resolve('packages/10.nh-react/src/index.ts'),
                },
            ],
        }),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            extensions,
            exclude: 'node_modules/**',
        }),
        typescript({
            tsconfig: tsconfigPath,
            outDir: undefined,
            declaration: false,
            declarationMap: false,
        }),
        ...(isProduction ? [terser()] : []),
    ];

    return {
        input: inputFile,
        plugins,
        external: (moduleName, src) => thirdPartyExternalsRegExp.test(moduleName),
    };
}

/**
 *
 * @private
 * @param {'cjs' | 'esm' | 'umd' | 'iife'} format
 * @param {string} outputPath
 * @param {string} outputFile
 * @param {string} packageName
 * @returns {Object}
 */
function rollupOuterOptions(format, outputPath, outputFile, packageName) {
    let outputOptions = {};
    switch (format) {
        case 'cjs':
        case 'esm': {
            outputOptions = {
                file: path.resolve(outputPath, outputFile),
                format,
                sourcemap: !isProduction,
            };
            break;
        }
        case 'umd':
        case 'iife': {
            const external = [];
            outputOptions = {
                file: path.resolve(outputPath, outputFile),
                format,
                sourcemap: !isProduction,
                name: packageName,
            };
            break;
        }
        default: {
            throw new Error(`Invalid format: ${format}`);
        }
    }
    return outputOptions;
}

/**
 *
 * @param {import('./packages/PackageMatadata.js').PackageMatadata} pkg
 * @returns {Promise<void>}
 */
async function buildPackage(pkg) {
    const formats = ['cjs', 'esm', 'umd', 'iife'];
    const extensions = ['js', 'jsx', 'ts', 'tsx'];

    try {
        const npmName = pkg.getNpmName();
        const packageName = pkg.getPackageName();
        const fileName = File.getFileName(npmName);
        console.log(fileName);

        const buildDefinition = pkg.getBuildDefinition();
        console.log(buildDefinition);

        const inputFile = path.resolve(buildDefinition.sourcePath, buildDefinition.sourceFile);
        const outputPath = buildDefinition.outputPath;
        const outputPathForDeclaration = buildDefinition.outputPathForDeclaration;

        for (const format of formats) {
            const outputFile = `${packageName}.${format}.js`;

            const inputOptions = rollupInputOptions(inputFile, extensions, pkg);
            const outputOptions = rollupOuterOptions(format, outputPath, outputFile, packageName);

            await rollup(inputOptions).then(async (bundle) => {
                await bundle.write(outputOptions);
            });
        }

        // //copy declaration files
        // moveTSDeclarationFilesIntoDist(packageName, outputPathForDeclaration, pkg.packageJsonPath);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Build all packages
 */
async function buildAll() {
    const publicPackages = packageManager.getPublicPackages();
    
    // await buildTSDeclarationFiles();

    for (const pkg of publicPackages) {
        await buildPackage(pkg);
    }

    console.log('build success');
}

buildAll();