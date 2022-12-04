import { defineConfig } from "vite"

export default defineConfig({
    root: "example",
    server: {
        port: Number(process.env.PORT) || 8000,
        host: String(process.env.HOST)
    }
})