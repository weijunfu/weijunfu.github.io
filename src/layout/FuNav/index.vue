<template>
<nav class="h-full flex flex-row items-center">
    <dl class="h-full" v-for="item in list" :key="item.id">
        <dt class="h-full">
            <RouterLink class="h-full flex flex-row justify-center items-center" :to="item.url">
                {{ item.title }}
            </RouterLink>
            <dl v-if="item.children">
                <dt v-for="child in item.children" :key="child.id">
                    <RouterLink class="h-full flex flex-row justify-center items-center" :to="child.url">
                        {{ child.title }}
                    </RouterLink>
                </dt>
            </dl>
        </dt>
    </dl>
    
</nav>
</template>
<script setup lang="ts">

import { ref } from 'vue'

interface Menu {
    id: string | number
    title: string
    url: string
    children?: Menu[]
}

const list = ref<Menu[]>([
    {
        id: 1, title: 'HOME', url: '/'
    },
    {
        id: 2, title: 'Java', url: '/java'
    },
    {
        id: 3, 
        title: 'Web', 
        url: '/web/html',
        children: [
            {
                id: 31, title: 'HTML', url: '/web/html'
            },
            {
                id: 32, title: 'CSS', url: '/web/css'
            },
            {
                id: 33, title: 'JavaScript', url: '/web/js'
            }
        ]
    },
    {
        id: 4,
        title: 'Database',
        url: '/db/mysql',
        children: [
            {
                id: 41, title: 'MySQL', url: '/db/mysql'
            },
            {
                id: 42, title: 'Redis', url: '/db/redis'
            }
        ]
    }
])

</script>
<style scoped lang="scss">
nav {
    flex: 1;
    dl {
        margin-right: 2rem;
        padding: .1rem .5rem;

        &:hover {
            dt {
                dl {
                    display: block;
                }
            }
        }

        dt {
            position: relative;

            dl {
                display: none;
                position: absolute;
                top: 100%;
                left: 50%;
                z-index: 9999;
                transform: translateX(-50%);
                background-color: rgba(249, 215, 112, 1);
                
                dt {
                    padding: .1rem .5rem;
                    a {
                        color: #f0f0f0;

                        &:hover {
                            color: rgb(224, 38, 35);
                        }
                    }
                }
            }
        }
        
    }
}
</style>