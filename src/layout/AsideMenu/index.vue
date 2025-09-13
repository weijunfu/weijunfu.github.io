<template>
<div class="aside-menu flex flex-column">
    <div class="menu-item flex flex-column justify-center" v-for="item in list" :key="item.id">
        <RouterLink :to="item.url" class="item-title flex items-center pl-1 link-size">
            {{ item.title }}
        </RouterLink>
        <div v-if="item.children" class="menu-children">
            <div class="menu-item flex flex-row items-center" v-for="child in item.children">
                <RouterLink :to="child.url"  class="item-title w-full flex items-center pl-2 link-size">
                    {{ child.title }}
                </RouterLink>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Menu {
    id: string | number
    title: string
    children?: Menu[]
    url: string
}

const list = ref<Menu[]>([
    {
        id: 1, title: 'Java', url: '/java'
    }, 
    {
        id: 2, 
        title: 'Web',
        url: '/web',
        children: [
            {
                id: 21, title: 'HTML', url: '/web/html'
            },
            {
                id: 22, title: 'CSS', url: '/web/css',
            }, 
            {
                id: 23, title: 'JavaScript', url: '/web/js'
            },
            {
                id: 24, title: 'TypeScript', url: '/web/ts'
            }
        ]
    }, {
        id: 3,
        title: 'Database',
        url: '/db',
        children: [
            {
                id: '31', title: 'MySQL', url: '/db/mysql'
            }, {
                id: '32', title: 'Redis', url: '/db/redis'
            }
        ]
    }, {
        id: 4,
        title: 'Tools',
        url: '/tools',
        children: [
            {
                id: '41', title: 'Docker', url: '/tools/docker'
            }, 
            {
                id: '42', title: 'Fu CSS', url: '/tools/fu'
            }, {
                id: '43', title: 'Fu Size', url: '/tools/fu-size'
            }, {
                id: '44', title: 'Fu Table Theme', url: '/tools/fu-table-theme'
            }
        ]
    }
])

</script>

<style scoped lang="scss">
.aside-menu {
    margin-top: .2rem;
    .menu-item {
        transition: .5s; 
        .item-title {
            padding: .5rem 1rem;
            color: var(--fu-text-color);
            &:hover {
                cursor: pointer;
                color: #fff;
                background-color: var(--theme);
            }
        }

        .menu-children {
            .menu-item {
                .item-title {
                    padding: .5rem 1rem .5rem 2rem;
                }
            }
        }
    }
}
</style>