import { glob } from "glob";
import { PackageMatadata } from "./PackageMatadata.js";

const env = process.env.NODE_ENV || "development";
const isProduction = env === "production" || env === "stage";
const isDevelopment = !isProduction;

class PackageManager {
  /** @type {PackageMatadata[]} */
  packages;

  /** @param {string[]} packagePaths */
  constructor(packagePaths) {
    this.packages = packagePaths
      .map((path) => new PackageMatadata(path, isProduction))
      .sort((a, b) => a.getDirectoryName().localeCompare(b.getDirectoryName()));
  }

  getPublicPackages() {
    return this.packages.filter((pkg) => !pkg.isPrivate());
  }
}

const directories = glob.sync("packages/*/package.json");
const packageManager = new PackageManager(directories);

export { packageManager };
