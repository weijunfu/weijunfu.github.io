<template>
<div class="css-box">

    <h2 class="flex flex-row">伪选择器</h2>
    <table>
        <tr>
            <th>伪元素</th>
            <th>说明</th>
        </tr>
        <tr>
            <td><code>:first-of-type</code></td>
            <td>选择第一个元素</td>
        </tr>
        <tr>
            <td><code>:last-of-type</code></td>
            <td>选择最后一个元素</td>
        </tr>
        <tr>
            <td><code>:nth-of-type</code></td>
            <td>从正序开始选择第N个元素</td>
        </tr>
        <tr>
            <td><code>:nth-last-of-type</code></td>
            <td>从倒序开始选择第N个元素</td>
        </tr>
    </table>

    <h3 class="flex flex-row">示例</h3>
    <ul class="flex flex-row">
        <li @click="handleIndex(0)"></li>
        <li @click="handleIndex(1)"></li>
        <li @click="handleIndex(2)"></li>
        <li @click="handleIndex(3)"></li>
    </ul>

    <h3 class="flex flex-row">HTML代码</h3>
    <FuCode language="html" :code="htmlCode" />

    <h3 class="flex flex-row">CSS代码</h3>
    <FuCode language="css" :code="list[index].code" />
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import FuCode from '@/components/FuCode/index.vue';

interface CssCode {
    id: string | number
    language: string
    code: string
}

let code = 
`
<ul class="flex flex-row">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
`
const htmlCode = ref(code)
const index = ref(0)

const list = ref<CssCode[]>([
    {
        id: 1,
        language: 'css',
        code: 
`
// 第一个li
li:first-of-type {
    border-color: orange;
}
`
    }, {
        id: 3,
        language: 'css',
        code:
`
// 第二个li
li:nth-of-type(2) {
    border-color: blue;
}
`
    }, {
        id: 4,
        language: 'css',
        code:
`
// 第三个li
li:nth-last-of-type(2) {
    border-color: red;
}
`
    }, {
        id: 2,
        language: 'css',
        code:
`
// 最后一个li
li:last-of-type {
    border-color: blanchedalmond;
}
`
    },
])


function handleIndex(idx: number) {
    index.value = idx
}

</script>
<style scoped lang="scss">
.css-box {
    h2, h3 {
        margin-top: 1rem;
        color: var(--fu-border-color);
    }

    table {
        width: 60rem;
    }

    ul {
        list-style: none;
        li {
            margin-right: 2rem;
            width: 4vw;
            height: 5vw;
            background-color: var(--fu-bg-color);
            border: .2rem solid var(--fu-border-color);
            &:hover {
                cursor: pointer;
            }

            &:nth-last-child(1) {
                margin-right: 0;
            }

            &:first-of-type {
                border-color: orange;
            }

            &:nth-of-type(2) {
                border-color: blue;
            }

            &:nth-last-child(2) {
                border-color: red;
            }

            &:last-of-type {
                border-color: blanchedalmond;
            }
        }
    }
}
</style>