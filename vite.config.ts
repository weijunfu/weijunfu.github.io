import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'
import Code from '@yankeeinlondon/code-builder'
import Link from '@yankeeinlondon/link-builder'
import Meta from '@yankeeinlondon/meta-builder'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      builders: [Code(), Link(), Meta()]
    })
  ],
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
