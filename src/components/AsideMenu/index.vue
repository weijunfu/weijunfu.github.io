<template>
<div class="aside-menu flex flex-column">
    <div class="menu-item flex flex-column justify-center" v-for="item in list" :key="item.id">
        <RouterLink :to="item.url" class="item-title flex items-center pl-1">
            {{ item.title }}
        </RouterLink>
        <div v-if="item.children" class="menu-children">
            <div class="menu-item flex flex-row items-center" v-for="child in item.children">
                <RouterLink :to="child.url"  class="item-title w-full flex items-center pl-2">
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
    }
])

</script>

<style scoped lang="scss">
.aside-menu {
    .menu-item {
        // padding-left: 1rem;
        &:nth-child(even) {
            background-color: rgba(240, 130, 160, .2);
        }
        &:nth-child(odd) {
            background-color: rgba(225, 108, 150, .2);
        }
        

        .item-title {
            min-height: 3.2rem;
            &:hover {
                cursor: pointer;
                color: #fff;
                background-color: rgba(183,208,122, .5);
            }
        }
    }
}
</style>