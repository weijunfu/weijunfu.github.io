<template>
<div class="svg-stroke-width">
    <h3>stroke-width</h3>
    <fu-quote content="用于设置SVG元素笔划宽度样式" />
    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Styles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface StrokeWidth {
    key: string
    value: string
}

const widthList = ref<number[]>([0, 1, 1.5, 2, 3, 4, 6, 8])

const list = ref<StrokeWidth[]>([])

for(let w of widthList.value) {

    const widthStr = String(w); // 统一转为字符串处理

    list.value.push({
        key: `stroke-width-${widthStr}`.replace('.', '_'),
        value: `stroke-width: ${widthStr};`
    })
}

</script>
<style scoped lang="scss">

</style>