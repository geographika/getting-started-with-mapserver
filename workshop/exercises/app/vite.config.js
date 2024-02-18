import { resolve } from 'path'

export default {
    server: {
        host: true,
        port: 5001,
        watch: {
            // fix for Windows on WSL - https://github.com/vitejs/vite/issues/1153
            usePolling: true
        }
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                first: resolve(__dirname, 'first.html'),
            }
        }
    }
}
