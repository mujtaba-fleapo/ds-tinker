/* eslint-disable no-console */
import { resolve, join, basename } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
const packagePath = process.cwd();
const distPath = join(packagePath, "./dist");

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

async function createPackageFile() {
  const packageData = await readFile(
    resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { scripts, devDependencies, exports, ...packageOthers } =
    JSON.parse(packageData);
  const newPackageData = {
    ...packageOthers,
    private: false,
    types: "./index.d.ts",
    main: "./index.js",
    module: "./index.js",
  };

  const targetPath = resolve(distPath, "./package.json");

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

async function run() {
  try {
    await createPackageFile();
    // await includeFileInBuild('../../LICENSE');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
