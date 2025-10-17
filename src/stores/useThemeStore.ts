import { defineStore } from 'pinia'

import { type FuTheme } from '@/types/theme'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'light' // 默认主题
  }),

  actions: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
      this.applyTheme()
    },

    isLight() {
      return this.currentTheme === 'light'
    },

    setTheme(theme: FuTheme) {
      this.currentTheme = theme
      this.applyTheme()
    },

    applyTheme() {
      // document.documentElement.setAttribute('data-theme', this.currentTheme)
      
      // 可选：保存到 localStorage
      localStorage.setItem('theme', this.currentTheme)

    }
  }
})