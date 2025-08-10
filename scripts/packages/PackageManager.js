import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

import { PackageMetadata } from './PackageMetadata.js';

/**
 * @typedef {Object} PackageManager
 * @property {PackageMetadata[]} packages
 * @property {() => PackageMetadata[]} getPublicPackages
 */
class PackageManager {
    /** @type {PackageMetadata[]} */
    packages;

    /** @param {string | string[]} packagePaths */
    constructor(packagePaths) {
        const inputs = Array.isArray(packagePaths) ? packagePaths : [packagePaths];
        const packageJsonPaths = inputs.flatMap((p) => resolvePackageJsonPaths(p));
        this.packages = packageJsonPaths.map((p) => new PackageMetadata(p));
    }

    getPublicPackages() {
        return this.packages.filter((pkg) => !pkg.isPrivate());
    }
}

/**
 * Resolve a path argument to one or more concrete package.json file paths.
 * - If input is a file and is package.json, use it
 * - If input is a directory and contains package.json, use it
 * - Otherwise, fall back to the repo root package.json (if present)
 * @param {string} inputPath
 * @returns {string[]}
 */
function resolvePackageJsonPaths(inputPath) {
    const absolute = path.resolve(process.cwd(), inputPath);
    if (!fs.existsSync(absolute)) {
        const rootPj = path.resolve(process.cwd(), 'package.json');
        return fs.existsSync(rootPj) ? [rootPj] : [];
    }

    const stats = fs.statSync(absolute);
    if (stats.isFile()) {
        return path.basename(absolute) === 'package.json' ? [absolute] : [];
    }

    const pj = path.join(absolute, 'package.json');
    if (fs.existsSync(pj)) return [pj];

    const rootPj = path.resolve(process.cwd(), 'package.json');
    return fs.existsSync(rootPj) ? [rootPj] : [];
}

const directories = glob.sync('packages/*/package.json');
console.log(directories);
const packageManager = new PackageManager(directories);
export { packageManager };

