'use strict';

import fs from 'fs-extra';
import path from 'node:path';
import { distDir, typesDir } from './env/constant.js';
import { packageManager } from './packages/PackageManager.js';

fs.removeSync(path.resolve(`./npm`));
fs.removeSync(path.resolve(`./.ts-temp`));
packageManager
    .getPublicPackages()
    .forEach((pkg) => [distDir, typesDir].forEach((subdir) => fs.removeSync(pkg.resolve(subdir))));
