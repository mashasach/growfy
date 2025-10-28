import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/growfy/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/mixins" as *;
          @use "@/styles/variables" as *;
        `
      }
    }
  },


})
