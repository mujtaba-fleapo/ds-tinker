import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import typescript2 from "rollup-plugin-typescript2";
import postcssImport from "postcss-import";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { readdirSync } from "fs";
const packageJson = {
  name: "@mujtaba-fleapo/design-system",
  module: "./dist/index.js",
  dir: "dist",
};

const getFolders = (entry) => {
  const dirs = readdirSync(entry);
  const dirsWithoutIndex = dirs
    .filter((name) => name !== "index.ts")
    .filter((name) => name !== "utils");
  return dirsWithoutIndex;
};

const plugins = [
  resolve(),
  typescript({
    exclude: ["**/*.stories.ts*"],
    tsconfig: "./tsconfig.json",
    // useTsconfigDeclarationDir: true,
  }),
  peerDepsExternal(),
  json(),
  commonjs(),
  postcss({
    extensions: [".scss", ".css"],
    plugins: [postcssImport()],
    extract: false,
    minimize: true,
  }),
  terser(),
];

const subfolderPlugins = (folderName) => [
  resolve(),
  typescript2({
    exclude: ["**/*.stories.ts*"],
    tsconfig: "./tsconfig.json",
    useTsconfigDeclarationDir: true,
  }),
  peerDepsExternal(),
  json(),
  commonjs(),
  postcss({
    extensions: [".scss", ".css"],
    plugins: [postcssImport()],
    extract: false,
    minimize: true,
  }),
  terser(),
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: "../index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];
// const folderBuilds = getFolders("./src").map((folder) => {
const folderBuilds = ["Input", "Typography", "Checkbox", "CheckboxList"].map(
  (folder) => {
    return {
      input: `src/${folder}/index.ts`,
      output: {
        file: `dist/${folder}/index.js`,
        sourcemap: true,
        exports: "named",
        format: "esm",
      },
      plugins: subfolderPlugins(folder),
      external: ["react", "react-dom"],
    };
  }
);

const rootConfig = {
  input: ["src/index.ts"],
  output: [
    {
      file: packageJson.module,
      // dir: packageJson.dir,
      format: "esm",
      sourcemap: true,
      exports: "named",
      // preserveModules: true,
      // preserveModulesRoot: "src",
    },
  ],
  plugins,
  external: ["react", "react-dom", "fs", "@storybook/*"],
};

const rollupConfig = [
  //
  ...folderBuilds,
  rootConfig,
];

export default rollupConfig.reverse();
