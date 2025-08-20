import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import {
  getMetaIconLinks,
  getResetStyles,
} from '@stihl-design-system/components/partials'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'index',
          injectPartials: getMetaIconLinks({ format: 'html' }),
          injectStyles: getResetStyles({ format: 'html' }),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
