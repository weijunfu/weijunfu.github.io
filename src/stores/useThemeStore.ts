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
      
      // 自定义主题切换动画
      const transition = document.startViewTransition(() => {
        document.documentElement.setAttribute('data-theme', this.currentTheme)
      })

      transition.ready.then(() => {
        document.documentElement.animate({
          clipPath: [`circle(0px at 0% 100%)`, `circle(100vmax at 0% 100%)`]
        }, {
          duration: 1000,
          // fill: 'forwards',
          pseudoElement: '::view-transition-new(root)'
        })
      }) 

      // 可选：保存到 localStorage
      localStorage.setItem('theme', this.currentTheme)

    }
  }
})