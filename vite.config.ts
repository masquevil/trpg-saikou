import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function getBase() {
  /**
   * about VITE_TARGET_ENV
   *  - pages: for GitHub Pages - hash mode, root path is `/trpg-saikou/`
   *  - hash: for servers do not support SPA - hash mode, root path is `/`
   *  - default: for any others (like sox-mini) - history mode, root path is `/`
   */

  const { VITE_TARGET_ENV } = process.env;
  switch (VITE_TARGET_ENV) {
    case 'pages':
      return '/trpg-saikou/';
    default:
      return '/';
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: getBase(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.example.ts'],
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    assetsInlineLimit: 8192,
  },
});
