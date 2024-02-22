import { resolve } from 'path'
import copy from 'rollup-plugin-copy'

export default {
    base: '', // otherwise assets are located at /assets
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
                sld: resolve(__dirname, 'sld.html'),
            },
            plugins: [
                copy({
                    targets: [
                        { src: 'data/*.*', dest: 'dist/data' }
                    ],
                    verbose: true,
                    hook: 'writeBundle'
                })
            ]
        }
    }
}
