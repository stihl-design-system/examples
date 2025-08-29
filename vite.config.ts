import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import {
  getMetaIconLinks,
  getResetStyles,
} from '@stihl-design-system/components/partials';

import { createHtmlPlugin } from 'vite-plugin-html';
import tanstackRouter from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Respect base from environment (used by GitHub Pages build); fallback to '/'
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
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
});
