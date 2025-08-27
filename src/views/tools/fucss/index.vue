<template>
<div class="fu-css flex flex-row w-full h-full">
    <div class="fu-css-menu p2">
        <div class="fu-menu-item" v-for="item in list" :key="item.id">
            <RouterLink v-if="item.url" class="block w-full text-left" :to="item.url">
                {{ item.title }}
            </RouterLink>
            <span v-else class="block w-full text-left">
                {{ item.title }}
            </span>
            <ul class="fu-menu-child-item">
                <li v-for="child in item.children" :key="child.id" class="pl-1">
                    <RouterLink v-if="child.url" class="block w-full text-left" :to="child.url">
                        {{ child.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="fu-css-main p2">
        <RouterView />
    </div>
</div>
</template>
<script setup lang="ts">
import { ref,  } from 'vue';

interface FuNav {
    id: string | number
    title: string
    url ?: string
    children ?: FuNav[]
}

const list = ref<FuNav[]>([
    {
        id: 10,
        title: 'Color',
        url: '/tools/fu/color'
    },
    {
        id: 20, 
        title: 'SVG',
        url: '/tools/fu/svg',
        children: [
            {
                id: 21,
                title: "fill",
                url: '#svg-fill'
            }
        ]
    }
])

</script>
<style scoped lang="scss">
.fu-css {
    overflow-y: auto;
    &-menu {
        width: 15rem;
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
        .fu-menu-item {
            padding: .2rem;

            a {
                &:hover {
                    color: #aaa;
                }
            }

            ul {
                list-style: none;
                li {
                    --li-color: #ddd;
                    border-left: .2rem solid var(--li-color);
                    a {
                        color: var(--li-color);
                        border-color: var(--li-color);
                    }

                    &:hover {
                        --li-color:#aaa;
                    }
                }
            }
        }
    }

    &-main {
        flex:1;
        height: 100%;
        max-height: 100%;
        overflow-y: auto;
    }
}
</style>