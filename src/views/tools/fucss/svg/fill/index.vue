<template>
<div class="svg-fill">
    <h3>fill</h3>
    <fu-quote content="用于设置SVG元素填充样式" />

    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Styles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in fillList" :key="item.key">
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

const fillList = ref<SvgClass[]>([])

// fill 特殊值
for(let val in otherColorValue) {
    fillList.value.push({
        key: `fill-${val}`,
        value: `fill: ${otherColorValue[val]};`
    })
}

// fill 黑白
for(let key in blackAndWhite) {
    fillList.value.push({
        key: `fill-${key}`,
        value: `fill: var(--color-${key});`,
        remark: `${blackAndWhite[key]}`
    })
}

// fill 其他颜色
for(let color of colorList) {
    for(let key in color) {
        fillList.value.push({
            key: `fill-${key}`,
            value: `fill: var(--color-${key});`,
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