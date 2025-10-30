<template>
<div class="aside__wrapper">
    <div class="menu aside-menu flex flex-column">
        <div class="menu-item flex flex-column" v-for="item in menu" :key="item.path" @click="handleClick(item)">
            <div class="menu-item-title flex flex-row">
                <div class="menu-left flex flex-row">
                    <div class="menu-icon">
                        <i v-if="item.icon" :class="item.icon"></i>
                    </div>
                    <div class="menu-title">{{  item.name }}</div>
                </div>
                <div class="menu-quota">
                    <template v-if="item.children?.length > 0">
                        <i v-if="item.unfold" class="ri-add-line"></i>
                        <i v-else class="ri-subtract-line"></i>
                    </template>
                </div>
            </div>
            <div v-if="item.children" :class="['menu-item-child', item.unfold ? 'unfold' : 'fold']" v-for="child in item.children" @click.stop="handleChildMenu(child)">
                <div class="menu-item-title flex flex-row">
                    <div class="menu-icon">
                        <i v-if="child.icon" :class="child.icon"></i>
                    </div>
                    <div class="menu-title">{{  child.name }}</div>
                </div>
            </div>
        </div>

    </div>

    <div class="menu-tools">
        <div class="tool-menu">
            <FuTheme />
        </div>
        <div class="tool-menu">
            <i class="ri-menu-line hover"></i>
        </div>
        
    </div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useMenuStore } from '@/stores/useMenuStore'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'

const menuStore = useMenuStore()
const mobileMenuStore = useMobileMenuStore()

menuStore.init()

import FuTheme from '@/components/FuTheme/index.vue';
import type { Menu } from '@/types/menu'

const router = useRouter()

const menu = menuStore.getMenu()

const currentMenu = ref<Menu | null>(null)

function handleClick(item: Menu) {

    const flag = item.unfold

    currentMenu.value = item
    
    menu.forEach(e => {
        if(e.path === item.path) {
            e.unfold = !e.unfold
        } else {
            e.unfold = true
        }
    })

    if(!flag) {
        mobileMenuStore.toggle()

        router.push({
            path: item.path
        })
    }
}

function handleChildMenu(item: Menu) {
    console.log('child menu', item)

    if(item.path) {
        mobileMenuStore.toggle()
        router.push({
            path: item.path
        })
    }
}

</script>

<style scoped lang="scss">

.aside__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    transition: all .4s;

    .aside-menu {
        height: calc(100% - 10vh);

        .menu-item {
            margin-top: .1rem;
            font-size: .18rem;
            &-title {
                justify-content: space-between;
                .menu-icon {
                    width: .2rem;
                }
                .menu-title {
                    padding-left: .05rem;
                }
            }

            .unfold {
                display: none;
            }

            .fold {
                display: block;
            }

            &-child {
                margin-top: .1rem;
                font-size: .16rem;
                padding-left: .05rem;
                .menu-item-title {
                    justify-content: flex-start;
                }

                &:last-child {
                    padding-bottom: .2rem;
                }
            }
        }
    } 

    .menu-tools {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-color);
        font-size: .2rem;

        .tool-menu {
            margin-left: .1rem;
            &:first-child {
                margin-left: 0;
            }
        }
    }
}

</style>