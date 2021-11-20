// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

import fs from "fs";

const packageJson = JSON.parse(
  fs.readFileSync(new URL("package.json", import.meta.url))
);

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  packageOptions: {
    knownEntrypoints: ["@spearwolf/eventize"],
  },
  alias: {
    ...packageJson.aliasDependencies,
  },
  plugins: ["snowpack-plugin-glslify"],
  exclude: [
    "**/.git/**/*",
    "**/libs/**/*",
    "**/package-lock.json",
    "**/package.json",
    "**/scripts/**/*",
    "**/snowpack.config.mjs",
  ],
  buildOptions: {
    clean: true,
  },
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
    target: "es2017",
  },
};
