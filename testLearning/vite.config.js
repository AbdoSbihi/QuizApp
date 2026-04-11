import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    esbuild: {
        target: 'es2018'
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'wwwroot/Scripts/WebSharper/testLearning/root.js')
            }
        }
    },
    root: "wwwroot"
})