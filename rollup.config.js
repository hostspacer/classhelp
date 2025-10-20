import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

export default [
  // UMD build
  {
    input: "src/index.js",
    output: {
      file: "dist/classhelp.umd.js",
      format: "umd",
      name: "classhelp",
      sourcemap: true
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/classhelp.umd.min.js",
      format: "umd",
      name: "classhelp",
      sourcemap: true
    },
    plugins: [terser()]
  },
  // ES module build
  {
    input: "src/index.js",
    output: {
      file: "dist/classhelp.esm.js",
      format: "esm",
      sourcemap: true
    }
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/classhelp.esm.min.js",
      format: "esm",
      sourcemap: true
    },
    plugins: [terser()]
  }
];
