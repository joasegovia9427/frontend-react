import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

import postcssImportantTailwind from './postcss-important-tailwind.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), checker({ typescript: true })],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [postcssImportantTailwind()],
        },
    },
});
