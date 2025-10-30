import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/style/themes.scss" as *;
          @use "@/assets/style/mixins.scss" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 将 @ 指向 src 目录
    }
  },
})
