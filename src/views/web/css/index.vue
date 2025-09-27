<template>
<div class="css-box">

    <h2>卡片</h2>
    <Card1 />
    <h2 class="flex flex-row">倒影实现方案</h2>

    <h3 class="flex flex-row">1.复制元素</h3>
    <div class="reflection">
        <div id="reflection1">
            <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 1">
            <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 2">
        </div>
        <div class="reflection-code ml-1 w-full">
            <FuCode language="html" :code="reflectionHtml1" />
            <FuCode language="css" :code="reflectionCss1" />
        </div>
    </div>

    <h3 class="flex flex-row">2.伪元素</h3>
    <div class="reflection">
        <div id="reflection2">
            <img src="https://picsum.photos/id/368/400/300" alt="倒影2.伪元素">
        </div>

        <div class="reflection-code ml-1 w-full">
            <FuCode language="html" :code="reflectionHtml2" />
            <FuCode language="css" :code="reflectionCss2" />
        </div>
    </div>
    

    <h3 class="flex flex-row">3. box-reflect</h3>
    <div class="reflection">
        <div id="reflection3">
            <img src="https://picsum.photos/id/368/400/300" alt="倒影3.box-reflect">
        </div>
        <div class="reflection-code ml-1 w-full">
            <FuCode language="html" :code="reflectionHtml3" />
            <FuCode language="css" :code="reflectionCss3" />
        </div>
    </div>
    
    <h2 class="flex flex-row">伪选择器</h2>
    <table>
        <thead>
            <tr>
                <th>伪元素</th>
                <th>说明</th>
            </tr>
        </thead>
        <tbody>
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
        </tbody>
        
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
import Card1 from '@/module/web/css/Card1/index.vue';

interface CssCode {
    id: string | number
    language: string
    code: string
}

const reflectionHtml1 = ref(`
<div id="reflection1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 2">
</div>
`);

const reflectionCss1 = ref(`
#reflection1 {
    position: relative;
    height: 38rem;
    img {
        &:nth-child(2) {
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: bottom center;
            transform: scaleY(-1);  // 垂直翻转
            mask-image: linear-gradient(to top, rgba(0,0,0,.5), transparent 80%, transparent);
        }
    }
}
`);

const reflectionHtml2 = ref(`
<div id="reflection2">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影2.伪元素">
</div>
`)
const reflectionCss2 = ref(`
#reflection2 {
    position: relative;
    height: 38rem;
    width: 25rem;
    img {
        display: block;
    }

    &::after {
        content: '';
        position: absolute;
        top: 18.75rem;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(-1);  // 垂直翻转
        opacity: .3;
        background: linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,0)),
            url('https://picsum.photos/id/368/400/300') no-repeat center bottom;
    }
}
`)

const reflectionHtml3 = ref(`
<div id="reflection3">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影3.box-reflect">
</div>
`)
const reflectionCss3 = ref(`
#reflection3 {
    height: 38rem;
    width: 25rem;
    position: relative;

    img {
        width: 100%;
        display: block;
        -webkit-box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
        box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
    }
}
`)

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

    .reflection {
        display: grid;
        grid-template-columns: auto 1fr;
    }

    #reflection1 {
        position: relative;
        height: 38rem;
        img {
            &:nth-child(2) {
                position: absolute;
                left: 0;
                top: 0;
                transform-origin: bottom center;
                transform: scaleY(-1);  // 垂直翻转
                mask-image: linear-gradient(to top, rgba(0,0,0,.5), transparent 80%, transparent);
            }
        }
    }

    #reflection2 {
        position: relative;
        height: 38rem;
        width: 25rem;
        img {
            display: block;
        }

        &::after {
            content: '';
            position: absolute;
            top: 18.75rem;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleY(-1);  // 垂直翻转
            opacity: .3;
            background: linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,0)),
                url('https://picsum.photos/id/368/400/300') no-repeat center bottom;
        }
    }

    #reflection3 {
        height: 38rem;
        width: 25rem;
        position: relative;

        img {
            width: 100%;
            display: block;
            -webkit-box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
            box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
        }
    }
}
</style>