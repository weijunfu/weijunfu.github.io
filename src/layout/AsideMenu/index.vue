<template>
<div class="aside-menu flex flex-column">
    <div class="menu-item flex flex-column justify-center" v-for="item in list" :key="item.id">
        <RouterLink :to="item.url" 
            :class="['item-title flex items-center justify-between pl-1 link-size', currentRootMenu?.id === item.id ? 'active-root':'']" 
            @click="handleRootMenu(item)"
        >
            <span>{{ item.title }}</span>
            <span>{{ (item.children && item.id === currentRootMenu?.id) ? '-' : (item.children ? '+':'') }}</span>
        </RouterLink>
        <div v-show="item.children && item.id === currentRootMenu?.id" :class="['menu-children']">
            <div class="menu-item flex flex-column items-center" v-for="(child) in item.children" :key="child.id">
                <RouterLink :to="child.url"   
                    :class="['item-title w-full flex items-center pl-2 link-size', currentSecondMenu?.id === child.id ? 'active-seconde': '']"
                    @click="handleSecondMenu(child)"
                >
                    <span>{{ child.title }}</span>
                    <span>{{ (child.children && child.id === currentSecondMenu?.id) ? '-' : (child.children ? '+':'') }}</span>
                </RouterLink>
                <div v-show="child.children && child.id === currentSecondMenu?.id" :class="['menu-children', 'sub-menu-child', 'w-full']">
                    <div class="menu-item flex flex-row items-center w-full" v-for="childItem in child.children" :key="childItem.id">
                        <RouterLink :to="childItem.url" 
                            :class="['item-title w-full flex items-center pl-2 link-size', currentThirdMenu?.id === childItem.id ? 'active' : '']"
                            @click="handleThirdMenu(childItem)"
                        >
                            {{ childItem.title }}
                        </RouterLink>
                    </div>
                </div>
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
    url: string,
    expand?: boolean
}

const list = ref<Menu[]>([
    {
        id: 0,
        title: 'Home',
        url: '/'
    },
    {
        id: 1, 
        title: 'Java', 
        url: '/java/index',
        children: [
            {
                id: 11,
                title: 'Linux部署',
                url: '/java/linux'
            }
        ]
    }, 
    {
        id: 2, 
        title: 'Web',
        url: '/web',
        expand: false,
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
            }, {
                id: 25, title: 'Vue', url: '/web/vue'
            }, {
                id: 26, 
                title: 'Tools', 
                url: '/web/tools/pnpm', 
                children: [
                    {
                        id: 261, title: 'PNPM', url: '/web/tools/pnpm',
                    }
                ]
            }
        ]
    }, {
        id: 3,
        title: 'Database',
        url: '/db',
        expand: false,
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
        expand: false,
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

const currentRootMenu = ref<Menu>(list.value[0])
function handleRootMenu(menu: Menu) {
    currentRootMenu.value = menu
}

const currentSecondMenu = ref<Menu>()
function handleSecondMenu(menu: Menu) {
    currentSecondMenu.value = menu
}

const currentThirdMenu = ref<Menu>()
function handleThirdMenu(menu: Menu) {
    currentThirdMenu.value = menu
}

</script>

<style scoped lang="scss">
@use "sass:color";
$color: #00dc82;
.active-root {
    background-color: color.adjust($color, $alpha: -0.2);
    
    span {
        color: #fff;
    }
}

.active-seconde {
    background-color: color.adjust($color, $alpha: -0.3);

    span {
        color: #fff;
    }
}

.active {
    background-color: color.adjust($color, $alpha: -0.5);

    span {
        color: #fff;
    }
}

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

                span {
                    &:nth-child(2) {
                        color: #fff;
                    }
                }
            }

            span {
                &:nth-child(2) {
                    color: var(--theme);
                }
            }

            span + span {
                margin-left: 1rem;
            }
        }

        .menu-children {
            transition: 1s;
            .menu-item {
                .item-title {
                    padding: .5rem 1rem .5rem 2rem;
                }

                .sub-menu-child {
                    .menu-item {
                        .item-title {
                            padding: .5rem 1rem .5rem 3rem;
                        }
                    }
                }
            }
        }
    }
}
</style>