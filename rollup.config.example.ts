import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import remove from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  input: "example/index.tsx",
  plugins: [
    remove({
      targets: [
        "example/build"
      ]
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    esbuild(),
    commonjs(),
    nodeResolve(),
    serve({
      contentBase: "example",
      host: "0.0.0.0",
      port: 8000
    })
  ],
  output: {
    dir: "example/build",
    format: "iife"
  },
});
