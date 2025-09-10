<template>
<div class="fu-size">
  <h1 class="title-size">Fu Size</h1>

  <FuQuote content="一个纯CSS实现的常用文本大小的工具库" />

  <h2 class="subtitle-size">安装 & 使用</h2>

  <dl>
    <dt>安装</dt>
    <dd>
      <FuCode language="shell" code="npm i @fu-css/fu-size" />
    </dd>
    <dt>使用</dt>
    <dd>
      <FuCode language="shell" code="import '@fu-css/fu-size/style.min.css';" />
    </dd>
  </dl>

  <h2 class="subtitle-size">介绍</h2>

  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th>Styles</th>
        <th>Scene</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in sizeList" :key="item.id">
        <td>{{ item.classes }}</td>
        <td>{{ item.styles }}</td>
        <td>{{ item.scene }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script setup lang="ts">

import { ref } from 'vue';

interface Size {
  id: string
  classes: string
  styles: string
  scene: string
}

const sizeList = ref<Size[]>([
  {
    id: '1', classes: 'basic-size', styles: 'font-size: var(--basic-size);/* --basic-size: 16px; */', scene: '基准文字'
  },{
    id: '2', classes: 'text-size', styles: 'font-size: var(--text-size); /* --text-size: clamp(0.875rem, 3.5vw, 1rem); */', scene: '正文'
  },{
    id: '3', classes: 'title-size', styles: 'font-size: var(--title-size); /* --title-size: clamp(1.25rem, 6vw, 2.5rem); */', scene: '标题'
  },{
    id: '4', classes: 'subtitle-size', styles: 'font-size: var(--subtitle-size); /* --subtitle-size: clamp(1rem, 5vw, 2rem); */', scene: '副标题'
  },{
    id: '5', classes: 'link-size', styles: 'font-size: var(--link-size); /* --link-size: clamp(0.875rem, 3.5vw, 1rem); */', scene: '链接文本'
  },{
    id: '6', classes: 'button-size', styles: 'font-size: var(--button-size); /* --button-size: clamp(0.875rem, 4vw, 1rem); */', scene: '按钮文本'
  },{
    id: '7', classes: 'card-title-size', styles: 'font-size: var(--card-title-size); /* --card-title-size: clamp(0.875rem, 4vw, 1.25rem); */', scene: '卡片标题'
  },{
    id: '8', classes: 'auxiliary-text-size', styles: 'font-size: var(--auxiliary-text-size); /* --auxiliary-text-size: clamp(0.75rem, 2.5vw, 0.875rem); */', scene: '辅助文本、页脚文本'
  }
])

</script>
<style scoped lang="scss">

</style>