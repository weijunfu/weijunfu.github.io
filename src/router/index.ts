import { createWebHashHistory, createRouter } from 'vue-router'

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
                path: 'fu', name: 'Fu CSS', component: () => import('@/views/tools/fucss/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to) => {
    if (window._hmt) {
        // 向百度统计手动发送页面浏览事件
        window._hmt.push(['_trackPageview', to.fullPath]);
    }
})

export default router