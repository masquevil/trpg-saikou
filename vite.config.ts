import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function getBase() {
  const { TARGET_ENV } = process.env;
  switch (TARGET_ENV) {
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
