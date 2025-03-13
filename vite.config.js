import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Ensure this alias is defined
    },
  },
  build: {
    rollupOptions: {
      external: ['ws'] // ✅ Exclude WebSocket from client build to fix Vercel deployment issue
    }
  }
});