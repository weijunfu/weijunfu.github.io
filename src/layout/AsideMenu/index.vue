<template>
<div class="aside__wrapper">
    <div class="menu aside-menu flex flex-column">
        <div class="menu-item flex flex-column justify-center" v-for="item in list" :key="item.id">
            <div :to="item.url" 
                :class="['item-title flex items-center justify-between pl-1 link-size', currentRootMenu?.id === item.id ? 'active':'']" 
                @click="handleRootMenu(item, item.url)"
            >
                <span> <i v-if="item.icon" :class="[item.icon]"></i>  {{ item.title }}</span>
                <span>{{ (item.children && item.id === currentRootMenu?.id) ? '-' : (item.children ? '+':'') }}</span>
            </div>
            <div v-show="item.children && item.id === currentRootMenu?.id" :class="['menu-children']">
                <div class="menu-item flex flex-column items-center" v-for="(child) in item.children" :key="child.id">
                    <div :to="child.url"   
                        :class="['item-title w-full flex items-center pl-2 link-size', currentSecondMenu?.id === child.id ? 'active': '']"
                        @click="handleSecondMenu(child, child.url)"
                    >
                        <span>{{ child.title }}</span>
                        <span>{{ (child.children && child.id === currentSecondMenu?.id) ? '-' : (child.children ? '+':'') }}</span>
                    </div>
                    <div v-show="child.children && child.id === currentSecondMenu?.id" :class="['menu-children', 'sub-menu-child', 'w-full']">
                        <div class="menu-item flex flex-row items-center w-full" v-for="childItem in child.children" :key="childItem.id">
                            <div :to="childItem.url" 
                                :class="['item-title w-full flex items-center pl-2 link-size', currentThirdMenu?.id === childItem.id ? 'active' : '']"
                                @click="handleThirdMenu(childItem, childItem.url)"
                            >
                                {{ childItem.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="menu-tools">
        <i class="ri-menu-line"></i>
    </div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

interface Menu {
    id: string | number
    icon?: string
    title: string
    children?: Menu[]
    url: string,
    expand?: boolean
}

const list = ref<Menu[]>([
    {
        id: 0,
        icon: 'ri-home-4-line',
        title: 'Home',
        url: '/'
    },
    {
        id: 1, 
        icon: 'ri-java-line',
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
        icon: 'ri-global-line',
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
                id: 23, title: 'JavaScript', url: '/web/js',
                children: [
                    {
                        id: 231, title: 'GSAP', url: '/web/js/gsap'
                    },{
                        id: 232, title: 'GSAP-ScrollTrigger', url: '/web/js/ScrollTrigger'
                    }
                ]
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
        icon: 'ri-database-2-line',
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
        icon: 'ri-tools-line',
        title: 'Tools',
        url: '/tools',
        expand: false,
        children: [
            {
                id: '40', title: 'Editor', url: '/tools/editor/markdown', children: [
                    {
                        id: '401', title: 'Markdown', url: '/tools/editor/markdown'
                    }
                ]
            },
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

function open(url: string) {
    if(url) {
        router.push({
            path: url,
            query: {
                _t: Date.now()
            }
        })
    }
}

const currentRootMenu = ref<Menu>(list.value[0])
function handleRootMenu(menu: Menu, url: string) {
    currentRootMenu.value = menu

    open(url)
}

const currentSecondMenu = ref<Menu>()
function handleSecondMenu(menu: Menu, url: string) {
    currentSecondMenu.value = menu

    open(url)
}

const currentThirdMenu = ref<Menu>()
function handleThirdMenu(menu: Menu, url: string) {
    currentThirdMenu.value = menu

    open(url)
}

</script>

<style scoped lang="scss">
@use "sass:color";
.aside__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .menu-tools {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
.aside-menu {
    height: calc(100% - 10vh);
    .menu-item {
        transition: .5s; 
        .item-title {
            padding: .5rem 1rem;
            &:hover {
                cursor: pointer;
            }

            span {
                &:nth-child(2) {
                    color: #fff;
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