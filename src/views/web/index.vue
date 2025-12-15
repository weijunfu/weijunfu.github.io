<template>
<div class="container flex flex-column w-full h-full">
  <div class="card streamer flex flex-column justify-center align-center">
    <h2>春晓</h2>
    <p>春眠不觉晓，</p>
    <p>处处闻啼鸟。</p>
    <p>夜来风雨声，</p>
    <p>花落知多少。</p>
  </div>

  <div class="button">
    <span>倾斜按钮</span>
  </div>
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
  // background-color: #333;

  .card{
    margin: 2rem auto;
    width: 140px;
    height: 140px;
    background-color: blanchedalmond;
  }

  .button {
    margin: 2rem auto;
    // padding: 5px 10px;
    width: 1rem;
    height: 48px;
    line-height: 48px;
    background-color: blueviolet;
    color: white;
    text-align: center;

    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;

    position: relative;
    transform: skew(-18deg);
    span {
      display: block;
      transform: skew(18deg);
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: blueviolet;
    }

    &::before {
      bottom: 0;
      left: -20px;
      background: radial-gradient(
        circle at 0 0,
        transparent 20px,
        blueviolet 21px
      );
    }

    &::after {
      top: 0;
      right: -20px;
      background: radial-gradient(
        circle at 100% 100%,
        transparent 20px,
        blueviolet 21px
      );
    }
  }
}
</style>