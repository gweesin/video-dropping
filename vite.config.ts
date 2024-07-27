import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    build: {
        outDir: 'extensions/dist',
        minify: false,
        rollupOptions: {
            input: {
                index: 'index.html',
                contentScript: 'extensions/contentScript.js',
            },
            output: {
                entryFileNames: '[name].js',
            }
        }
    }
})
