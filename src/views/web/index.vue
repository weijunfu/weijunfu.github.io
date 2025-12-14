<template>
<div class="container flex flex-column w-full h-full">
  <!-- <Html5 /> -->
  <CssAni1 />
  <!-- <CssAni2 /> -->
  <Input />
</div>
</template>
<script setup lang="ts">
// import Html5 from '@/module/web/html/Readme.md';

// 双螺旋动画
import CssAni1 from '@/module/web/css/CssAni1.vue'
// 双环loading
// import CssAni2 from '@/module/web/css/CssAni2.vue'

import Input from '@/module/web/css/Input.vue';

</script>
<style scoped lang="scss">
.container {
  min-width: 1600px;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>