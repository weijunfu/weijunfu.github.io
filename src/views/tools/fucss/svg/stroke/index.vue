<template>
<div class="svg-stroke">
    <h3 id="svg-stroke">stroke</h3>
    <fu-quote content="设置SVG元素笔划样式" />

    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Styles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in strokeList" :key="item.key">
                <td>{{ item.key }}</td>
                <td>
                    <dl class="flex flex-row items-center">
                        <dt>{{ item.value }}</dt>
                        <dd v-if="item.remark" class="text-yellow-400">{{ '/* ' + item.remark + ' */' }}</dd>
                    </dl>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { otherColorValue, blackAndWhite, colorList } from '@/module/fu-css/index'

interface SvgClass {
    key: string
    value: string,
    remark?: string
}

const strokeList = ref<SvgClass[]>([])

// stroke 特殊值
for(let val in otherColorValue) {
    strokeList.value.push({
        key: `stroke-${val}`,
        value: `stroke: ${otherColorValue[val]};`
    })
}

// stroke 黑白
for(let key in blackAndWhite) {
    console.log(key, blackAndWhite[key])

    strokeList.value.push({
        key: `stroke-${key}`,
        value: `stroke: var(--color-${key});`,
        remark: `${blackAndWhite[key]}`
    })
}

// stroke 其他颜色
for(let color of colorList) {
    for(let key in color) {
        strokeList.value.push({
            key: `stroke-${key}`,
            value: `stroke: var(--color-${key});`,
            remark: color[key]
        })
    }
}

</script>
<style scoped lang="scss">
:deep(dl) {
    dt + dd {
        margin-top: 0 !important;
    }
    
    dd {
        margin-left: 1rem;
    }
}
</style>