import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/pages/coc-card/AppView.vue'),
      name: 'COCCardView',
      fileName: 'coc-card-view',
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        dir: resolve(__dirname, 'dist/libs'),
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
});
