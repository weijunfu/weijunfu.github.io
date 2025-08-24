<template>
<div class="fu-css flex flex-row w-full">
    <div class="fu-menu">
        <div class="fu-menu-item" v-for="item in list" :key="item.id">
            <span class="block w-full text-left">
                {{ item.title }}
            </span>
            <ul class="fu-menu-child-item">
                <li v-for="child in item.children" :key="child.id" class="pl-2">
                    <RouterLink v-if="child.url" class="block w-full text-left" :to="child.url">
                        {{ child.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="fu-main">
        <h2 id="sizing">Sizing</h2>
        <div class="fu-card">
            <h3 id="width">width</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>w-auto</code></td>
                    <td><code>width: auto;</code></td>
                </tr>
                <tr>
                    <td><code>w-full</code></td>
                    <td><code>width: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>w-screen</code></td>
                    <td><code>width: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>w-min</code></td>
                    <td><code>width: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-max</code></td>
                    <td><code>width: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-fit</code></td>
                    <td><code>width: fit-content;</code></td>
                </tr>
            </table>
        </div>
        <div class="fu-card">
            <h3 id="min-width">min-width</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>w-min-auto</code></td>
                    <td><code>min-width: auto;</code></td>
                </tr>
                <tr>
                    <td><code>w-min-full</code></td>
                    <td><code>min-width: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>w-min-screen</code></td>
                    <td><code>min-width: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>w-min-content</code></td>
                    <td><code>min-width: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-min-content-max</code></td>
                    <td><code>min-width: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-min-content-fit</code></td>
                    <td><code>min-width: fit-content;</code></td>
                </tr>
            </table>
        </div>
        <div class="fu-card">
            <h3 id="max-width">max-width</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>w-max-auto</code></td>
                    <td><code>max-width: auto;</code></td>
                </tr>
                <tr>
                    <td><code>w-max-full</code></td>
                    <td><code>max-width: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>w-max-screen</code></td>
                    <td><code>max-width: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>w-max-content</code></td>
                    <td><code>max-width: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-max-content-max</code></td>
                    <td><code>max-width: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>w-max-content-fit</code></td>
                    <td><code>max-width: fit-content;</code></td>
                </tr>
            </table>
        </div>
        <div class="fu-card">
            <h3 id="height">height</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>h-auto</code></td>
                    <td><code>height: auto;</code></td>
                </tr>
                <tr>
                    <td><code>h-full</code></td>
                    <td><code>height: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>h-screen</code></td>
                    <td><code>height: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>h-min</code></td>
                    <td><code>height: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-max</code></td>
                    <td><code>height: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-fit</code></td>
                    <td><code>height: fit-content;</code></td>
                </tr>
            </table>
        </div>
        <div class="fu-card">
            <h3 id="min-heigt">min-heigt</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>h-min-auto</code></td>
                    <td><code>min-height: auto;</code></td>
                </tr>
                <tr>
                    <td><code>h-min-full</code></td>
                    <td><code>min-height: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>h-min-screen</code></td>
                    <td><code>min-height: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>h-min-content</code></td>
                    <td><code>min-height: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-min-content-max</code></td>
                    <td><code>min-height: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-min-content-fit</code></td>
                    <td><code>min-height: fit-content;</code></td>
                </tr>
            </table>
        </div>
        <div class="fu-card">
            <h3 id="max-width">max-width</h3>
            <table>
                <tr>
                    <th><code>Class</code></th>
                    <th><code>Styles</code></th>
                </tr>
                <tr>
                    <td><code>h-max-auto</code></td>
                    <td><code>max-height: auto;</code></td>
                </tr>
                <tr>
                    <td><code>h-max-full</code></td>
                    <td><code>max-height: 100%;</code></td>
                </tr>
                <tr>
                    <td><code>h-max-screen</code></td>
                    <td><code>max-height: 100vw;</code></td>
                </tr>
                <tr>
                    <td><code>h-max-content</code></td>
                    <td><code>max-height: min-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-max-content-max</code></td>
                    <td><code>max-height: max-content;</code></td>
                </tr>
                <tr>
                    <td><code>h-max-content-fit</code></td>
                    <td><code>max-height: fit-content;</code></td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
interface FuNav {
    id: string | number
    title: string
    url ?: string
    children ?: FuNav[]
}

const list = ref<FuNav[]>([
    {
        id: 100,
        title: 'Layout',
    },
    {
        id: 200,
        title: 'FlexBox & Grid'
    },
    {
        id: 300,
        title: 'Spacing'
    },
    {
        id: 400,
        title: 'Sizing',
        url: '#sizing',
        children: [
            {
                id: 410,
                title: 'width',
                url: '#width',
            },
            {
                id: 420,
                title: 'min-width',
                url: '#min-width',
            },
            {
                id: 430,
                title: 'max-width',
                url: '#max-width',
            },
            {
                id: 440,
                title: 'height',
                url: '#height',
            },
            {
                id: 450,
                title: 'min-height',
                url: '#min-height',
            },
            {
                id: 460,
                title: 'max-height',
                url: '#max-height',
            }

        ]
    },
    {
        id: 500,
        title: 'Typography'
    },
    {
        id: 600,
        title: 'Background'
    },
    {
        id: 700,
        title: 'Border'
    },
    {
        id: 800,
        title: 'Effect'
    },
    {
        id: 900,
        title: 'Filter'
    },
    {
        id: 1000,
        title: 'Table'
    },
    {
        id: 1100,
        title: '动画'
    },
    {
        id: 1200,
        title: 'Transform'
    },
    {
        id: 1300,
        title: 'Interactivity'
    },
    {
        id: 1400,
        title: 'SVG'
    },
    {
        id: 1500,
        title: 'Accessibility'
    }
])

</script>
<style scoped lang="scss">
.fu-css {
    .fu-menu {
        width: 12rem;
        min-height: 120px;

        &-item {
            padding: .2rem .4rem;

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

    .fu-main {
        flex:1;
    }
}
</style>