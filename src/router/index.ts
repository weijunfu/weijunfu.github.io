import type { Component } from 'vue';
import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import type { MenuMeta } from '@/types/menu';

// 读取所有vue文件
const modules = import.meta.glob<{ default: Component }>('@/views/**/*.vue');

const menuMetas = import.meta.glob<{ default: MenuMeta }>('@/views/**/index.meta.ts', { eager: true });

function toMetaPath(viewPath: string) {
    return viewPath.replace(/\.vue$/, '.meta.ts');
}

// 生成路由
// modules 是一个对象，key 是文件路径，value 是模块内容
function generateRoutes() {
    const routes: RouteRecordRaw[] = [];
    // const menu: Menu[] = [];

    routes.push({
        path: '/', name: '_', redirect: '/home', meta: { title: 'Home', seq: 0, icon: 'ri-home-4-line', }
    })

    for(const path in modules) {
        const routePath = path.replace('/src/views', '').replace('/index.vue', '').replace(/\/{2,}/g, '/').toLowerCase()

        // meta
        const metaPath =  toMetaPath(path);
        const menuMeta = menuMetas[metaPath].default
/* 
        menu.push({
            path: routePath,
            title: menuMeta.title,
            icon: menuMeta.icon,
            seq: menuMeta.order,
            children: []
        }) */

        routes.push({
            path: routePath,
            name: menuMeta.title,
            component: modules[path],
            meta: {
                title: menuMeta.title,
                icon: menuMeta.icon as string,
                seq: menuMeta.order
            }
        })
    }

    /* const childrenList = menu.filter(e => e.path.split('/').filter(Boolean).length > 1).sort((a, b) => a.seq - b.seq)
    const menuTree = menu.filter(e => e.path.split('/').filter(Boolean).length === 1).sort((a, b) => a.seq - b.seq).map(e => {
        const children = childrenList.filter(m => m.path.startsWith(e.path))
        e.children = children || []
        e.unfold = true
        return e
    }) */
    
    return {
        routes
    }
}

const { routes } = generateRoutes();

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(from.fullPath)
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return savedPosition || { top: 0 }
    }
})

router.afterEach((to) => {
    if (window._hmt) {
        // 向百度统计手动发送页面浏览事件
        window._hmt.push(['_trackPageview', to.fullPath]);
    }
})

export default router