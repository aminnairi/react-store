import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import remove from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  input: "sources/index.tsx",
  external: [
    "react"
  ],
  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    remove({
      targets: [
        "build"
      ]
    }),
    esbuild(),
    terser()
  ],
  output: {
    dir: "build",
    format: "umd",
    extend: true,
    name: "@aminnairi/react-store",
    globals: {
      react: "React"
    },
  },
});
