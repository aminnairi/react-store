import { defineConfig } from "vite"
import definitionTypes from "vite-plugin-dts"

export default defineConfig({
    root: "sources",
    plugins: [
        definitionTypes({
            tsConfigFilePath: "../tsconfig.json",
            outputDir: "../build"
        })
    ],
    build: {
        minify: true,
        lib: {
            entry: "index.tsx",
            name: "@aminnairi/react-store",
            fileName: "index"
        },
        rollupOptions: {
            external: "react",
            output: {
                dir: "build",
                format: "umd",
                globals: {
                    react: "React"
                }
            }
        }
    }
})