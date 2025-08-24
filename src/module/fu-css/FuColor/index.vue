<template>
<div class="fu-color">
    <table>
        <thead>
            <tr>
                <th>Color</th>
                <th v-for="item in colorNum" :key="item">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in colorVars" :key="index">
                <td>{{ colorList[index] }}</td>
                <td v-for="(row, rowIndex) in item" 
                    :style="{backgroundColor: 'var('+row+')', color: rowIndex > 4 ? 'var(--color-white)' : 'var(--color-black)', fontSize: '.6rem'}">{{ row }}</td>
            </tr>
        </tbody>
    </table>

    <h3>分类</h3>
    <table>
        <thead>
            <tr>
                <th>Property</th>
                <th>Class</th>
                <th>Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>color</td>
                <td>text-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.text-red-500</code></dd>
                        <dd><code class="line-code">.text-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>border-color</td>
                <td>border-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.border-red-500</code></dd>
                        <dd><code class="line-code">.border-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>background-color</td>
                <td>bg-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.bg-red-500</code></dd>
                        <dd><code class="line-code">.bg-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>outline-color</td>
                <td>outline-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.outline-red-500</code></dd>
                        <dd><code class="line-code">.outline-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>text-decoration-color</td>
                <td>decoration-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.decoration-red-500</code></dd>
                        <dd><code class="line-code">.decoration-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>accent-color</td>
                <td>accent-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.accent-red-500</code></dd>
                        <dd><code class="line-code">.accent-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td>caret-color</td>
                <td>caret-&lt;color&gt;-&lt;number&gt;[-alpha-&lt;alpha&gt;]</td>
                <td>
                    <dl>
                        <dd>number: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950</dd>
                        <dd>alpha: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</dd>
                        <dd><code class="line-code">.caret-red-500</code></dd>
                        <dd><code class="line-code">.caret-red-500-alpha-50</code></dd>
                    </dl>
                </td>
            </tr>
        </tbody>
    </table>
    <h3>透明度</h3>
    <table>
        <thead>
            <tr>
                <th></th>
                <th v-for="item in colorAlpha" :key="item">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Red 500</td>
                <td v-for="(item, index) in colorOpacityVars" :key="item" :class="item" :style="{color: index > 4 ? 'var(--color-white)' : 'var(--color-black)'}">{{ item }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

// import FuCode from '@/components/FuCode/index.vue';

const colorNum = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const colorList = [
    'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'
]

const colorAlpha = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const colorVars = computed(() => {
    return colorList.map(item => {
        return colorNum.map(citem => {
            return `--color-${item}-${citem}`
        })
    })
})

const colorOpacityVars = computed(() => {
    return colorAlpha.map(oItem => {
        return `bg-red-500-alpha-${oItem}`
    })
})


</script>
<style scoped lang="scss">

</style>