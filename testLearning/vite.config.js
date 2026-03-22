import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    esbuild: {
        target: 'es2018' // same as tsconfig target

    }
})

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'wwwroot/Scripts/WebSharper/testLearning/root.js')
            }
        }
    }
})
module.exports = {
  root: "wwwroot",
  build: {
    rollupOptions: {
      input: [
        "./Scripts/WebSharper/testLearning/root.js"
      ]
    }
  }
}