import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                contentScript: 'contentScript.js',
            },
            output: {
                entryFileNames: '[name].js',
            }
        }
    }
})
