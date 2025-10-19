import { defineStore } from 'pinia'

import type { Menu } from '@/types/menu';

import Router from '@/router/index'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: [] as Menu[]
  }),

  actions: {
    init() {
      const routes = Router.options.routes

      const childrenList = routes.filter(e => e.path.split('/').filter(Boolean).length > 1).sort((a, b) => (a.meta?.seq ?? 0) - (b.meta?.seq ?? 0))
      const menuTree = routes.filter(e => e.path.split('/').filter(Boolean).length === 1).sort((a, b) => (a.meta?.seq ?? 0) - (b.meta?.seq ?? 0)).map(e => {
          const children = childrenList.filter(m => m.path.startsWith(e.path))

          return {
            name: e.meta?.title,
            path: e.path,
            icon: e.meta?.icon,
            seq: e.meta?.seq,
            children: children || [],
            unfold: true
          }
      }) as Menu[]

      this.menu = menuTree
    },
    addMenu(arr: Menu[]) {
      this.menu = arr
    },

    getMenu() {
      return this.menu
    }
  }

})