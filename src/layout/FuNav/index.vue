<template>
<nav class="nav h-full flex flex-row items-center">
    <dl class="nav-item h-full" v-for="item in list" :key="item.id">
        <dt class="item h-full">
            <RouterLink class="item-link h-full flex flex-row justify-center items-center" :to="item.url">
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

:deep(dt) {
    width: 12rem;
}

.nav {
    flex: 1;
    &-item {
        margin-right: 2rem;
        padding: .1rem .5rem;

        &:hover {
            .item {
                &::after {
                    content: '';
                    position: absolute;
                    left: 10%;
                    bottom: 10%;
                    width: 80%;
                    height: .2rem;
                    background-color: var(--fu-border-color);
                }

                &-link {
                    color: var(--color-primary);
                }

                dl {
                    display: block;
                }
            }
        }

        .item {
            position: relative;

            a {
                color: var(--fu-border-color);
            }
            dl {
                display: none;
                position: absolute;
                top: 100%;
                left: 50%;
                z-index: 9999;
                transform: translateX(-50%);
                background-color: var(--fu-tip-bg-color);
                box-shadow: .2rem .2rem .1rem rgba(0, 0, 0, .2);
                
                dt {
                    a {
                        padding: .1rem .5rem;
                        color: var(--color-primary);

                        &:hover {
                            color: var(--color-second);
                            background-color: var(--color-primary);
                        }
                    }
                }
            }
        }
        
    }
}
</style>