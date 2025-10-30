import { defineStore } from 'pinia'

export const useMobileMenuStore = defineStore('useMobileMenuStore', {
  state: () => ({
    active: false
  }),

  actions: {
    toggle() {
      this.active = !this.active
    },

    isActive() {
      return this.active
    }
  }
})