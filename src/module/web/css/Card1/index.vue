<template>
<div class="css-card">
  <h2>圆角卡片</h2>
  <div class="card-box flex flex-row flex-center">
    <FuCard v-for="item in 3" :key="item"/>
  </div>
</div>
</template>
<script setup lang="ts">
import FuCard from '@/module/web/css/FuCard/index.vue';

</script>
<style scoped lang="scss">
.css-card {
  .card-box {
    gap: 1rem;
    flex-wrap: wrap;
    .fu-card {
      &:nth-child(1) {
        --fu-card-color1: #effaf0;
        --fu-card-color2: #0cc58e;
      }
      &:nth-child(2) {
        --fu-card-color1: #feebf1;
        --fu-card-color2: #f25894;
      }
      &:nth-child(3) {
        --fu-card-color1: #eff0ff;
        --fu-card-color2: #4d5bf9;
      }
    }
  }
}
</style>