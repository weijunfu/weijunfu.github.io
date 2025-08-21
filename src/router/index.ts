import { createMemoryHistory, createRouter } from 'vue-router'

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
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router