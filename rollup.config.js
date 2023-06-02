import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es", // the preferred format
    },
    {
      file: pkg.browser,
      format: "iife",
      name: "MyPackage", // the global which can be used in a browser
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [typescript(), terser()],
};
