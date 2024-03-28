import { resolve } from 'path'
import { readdirSync } from 'fs';
import copy from 'rollup-plugin-copy'

const inputFiles = readdirSync(__dirname)
    .filter(filename => filename.endsWith('.html'))
    .reduce((acc, filename) => {
        acc[filename.replace('.html', '')] = resolve(__dirname, filename);
        return acc;
    }, {});

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
            input: inputFiles,
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
