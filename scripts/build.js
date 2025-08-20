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

import { exec } from 'child-process-promise';
import { File } from './stream/File.js';

import { packageManager } from './packages/PackageManager.js';

const args = minimist(process.argv.slice(2));
const isProduction = args.production || false;

const thirdPartyExternals = ['react', 'react-dom', 'lodash', 'jquery', 'yjs', 'y-websocket'];
const thirdPartyExternalsRegExp = new RegExp(`^(${thirdPartyExternals.join('|')})(\\/|$)`);

/**
 * @param {import('./packages/PackageMatadata.js').PackageMatadata} pkg
 */
async function buildTSDeclarationFiles(pkg) {
    const pkgDir = path.dirname(pkg.packageJsonPath);
    const pkgTsconfigPath = path.resolve(pkgDir, 'tsconfig.json');
    const tmpTsconfigPath = path.resolve(pkgDir, '.tsbuild.temp.json');
    const relRoot = path.relative(pkgDir, process.cwd()) || '.';
    const outDir = path.resolve(process.cwd(), '.ts-temp', pkgDir);

    const hasLocalTsconfig = fs.existsSync(pkgTsconfigPath);

    const tempConfig = {
        extends: hasLocalTsconfig ? './tsconfig.json' : path.join(relRoot, 'tsconfig.json'),
        compilerOptions: {
            noEmit: false,
            declaration: true,
            emitDeclarationOnly: true,
            declarationDir: outDir,
            outDir: outDir,
            jsx: 'react-jsx',
            moduleResolution: 'Bundler',
            skipLibCheck: true,
            typeRoots: [path.join(relRoot, 'node_modules/@types'), path.join(relRoot, '@types')],
            types: ['lodash'],
        },
        include: ['src/**/*'],
    };

    fs.writeJsonSync(tmpTsconfigPath, tempConfig, { spaces: 2 });

    try {
        await exec(`npx tsc -p ${tmpTsconfigPath}`);
    } catch(e) {
        console.log(e);  
    } finally {
        fs.removeSync(tmpTsconfigPath);
    }
}

/**
 *
 * @param {string} packageName
 * @param {string} outputPath
 */
function moveTSDeclarationFilesIntoDist(packageDirectory, outputPath) {
    fs.copySync(`./.ts-temp/${packageDirectory}`, outputPath);
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
            compilerOptions: {
                typeRoots: [path.resolve('node_modules/@types'), path.resolve('@types')],
                types: ['lodash'],
            },
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

                globals: {
                    'lodash': '_' // lodash 를 전역 _ 변수로 매핑
                }
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
        await buildTSDeclarationFiles(pkg);

        const npmName = pkg.getNpmName();
        const packageName = pkg.getPackageName();
        const pkgDir = path.dirname(pkg.packageJsonPath);
        const fileName = File.getFileName(npmName);
        console.log(fileName);

        const buildDefinition = pkg.getBuildDefinition();

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

        //copy declaration files
        moveTSDeclarationFilesIntoDist(pkgDir, outputPathForDeclaration, pkg.packageJsonPath);
    } catch (error) {
        console.log(error);
    }
}

async function buildAll() {
    const publicPackages = packageManager.getPublicPackages();

    for (const pkg of publicPackages) {
        await buildPackage(pkg);
    }

    console.log('build success');
}

buildAll();
