<template>
<div class="menu h-full flex flex-row ">
    <div class="menu-item flex flex-row space-between items-center h-full" v-for="item in menu" :key="item.path" @click="handleClick(item)">
        {{  item.name }}
        <!-- <div v-if="item.children" :class="['menu-item-child', item.unfold ? 'unfold' : 'fold']" v-for="child in item.children">
            <div class="menu-item-title flex flex-row" @click.stop="handleChildMenu(child)">
                <div class="menu-icon">
                    <i v-if="child.icon" :class="child.icon"></i>
                </div>
                <div class="menu-title">{{  child.name }}</div>
            </div>
        </div> -->
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

import type { Menu } from '@/types/menu'

const router = useRouter()

const menu = menuStore.getMenu()

const currentMenu = ref<Menu | null>(null)

function handleClick(item: Menu) {

    currentMenu.value = item
    
    menu.forEach(e => {
        if(e.path === item.path) {
            e.unfold = !e.unfold
        } else {
            e.unfold = true
        }
    })

    mobileMenuStore.toggle()

    router.push({
        path: item.path,
        query: {
            _t: Date.now()
        }
    })
}
</script>

<style scoped lang="scss">
.menu {
    flex: 1;
    height: .72rem;
    transition: all .4s;
    padding-left: 1rem;
    
    .menu-item {
        font-size: .18rem;
        justify-content: center;
        width: 1rem;

        &:hover {
            cursor: pointer;
            color: var(--theme);
            
            border-bottom: 0.02rem solid var(--theme);
        }
    }
}

</style>