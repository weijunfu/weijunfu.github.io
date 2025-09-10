import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/index.vue') },
    { path: '/java', name: 'Java', component: () => import('@/views/Java/index.vue') },
    { 
        path: '/web', 
        name: 'Web', 
        redirect: '/web/html',
        children: [
            {
                path: 'html', name: 'HTML', component: () => import('@/views/web/html/index.vue')
            },{
                path: 'css', name: 'CSS', component: () => import('@/views/web/css/index.vue')
            },{
                path: 'js', name: 'JavaScript', component: () => import('@/views/web/javascript/index.vue')
            }, {
                path: 'ts', name: 'TypeScript', component: () => import('@/views/web/typescript/index.vue')
            }
    ] },
    {
        path: '/db',
        name: 'Database',
        redirect: '/db/mysql',
        children: [
            {
                path: 'mysql', name: 'MySQL', component: () => import('@/views/database/mysql/index.vue')
            }, {
                path: 'redis', name: 'Redis', component: () => import('@/views/database/redis/index.vue')
            }
        ]
    },{
        path: '/tools',
        name: 'Tools',
        redirect: '/tools/docker',
        children: [
            {
                path: 'docker', name: 'Docker', component: () => import('@/views/tools/docker/index.vue')
            },
            {
                path: 'fu', 
                name: 'FuCSS', 
                redirect: '/tools/fu/color',
                component: () => import('@/views/tools/fucss/index.vue'),
                children: [
                    {
                        path: 'color',
                        name: 'FuCssColor',
                        component: () => import('@/views/tools/fucss/color/index.vue')
                    },
                    {
                        path: 'svg',
                        name: 'FuCssSvg',
                        redirect: '/tools/fu/svg/fill',
                        component: () => import('@/views/tools/fucss/svg/index.vue'),
                        children: [
                            {
                                path: 'fill',
                                name: 'SVGFill',
                                component: () => import('@/views/tools/fucss/svg/fill/index.vue')
                            },
                            {
                                path: 'stroke',
                                name: 'SVGStroke',
                                component: () => import('@/views/tools/fucss/svg/stroke/index.vue')
                            },
                            {
                                path: 'width',
                                name: 'SVGStrokeWidth',
                                component: () => import('@/views/tools/fucss/svg/stroke-width/index.vue')
                            }
                        ]
                    },
                ]
            }, 
            {
                path: 'fu-size',
                name: 'FuSize',
                component: () => import('@/views/tools/fusize/index.vue')
            }
        ]
    }
]

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