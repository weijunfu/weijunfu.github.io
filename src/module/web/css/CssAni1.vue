<template>
<div class="box">
  <div v-for="item in totalNum" :key="item" class="ele" :style="{'--i': item}"></div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const totalNum = ref(20)

</script>
<style scoped lang="scss">
@keyframes run {
  to {
    transform: none;
  }
}
.box {
  width: 360px;
  height: 70px;
  perspective: 400px;           // 设置3d
  transform-style: preserve-3d; // 开启3d

  .ele {
    position: relative;
    width: 1px;
    height: 70px;
    border-left: 1px #E0FFFF dashed;
    float: left;
    margin: 0 8px;
    transform: rotateX(-360deg);
    animation: run 2s linear infinite;
    animation-delay: calc(0.15s * var(--i));

    &::before,
    &::after { 
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #87CEEB;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      top: -2px;
      background-color: #FFD8A0;
    }

    &::after {
      bottom: -2px;
    }
  
  }
}
</style>