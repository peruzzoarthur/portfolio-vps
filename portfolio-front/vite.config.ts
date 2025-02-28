import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
        sentryVitePlugin({
            org: 'sp3rzo',
            project: 'arthur-portfolio',
            authToken: process.env.ENTRY_AUTH_TOKEN
        }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    build: {
        sourcemap: true,
    },
})
