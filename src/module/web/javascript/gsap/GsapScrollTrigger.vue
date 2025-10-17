<template>
<div class="scroll-trigger box">
  <div :class="['card', `card${index+1}` ]" v-for="(item, index) in list">
      <img :src="item" alt="">
      <span>{{ index + 1 }}</span>
    </div>
</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const list = ref<string[]>([
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
  'https://picsum.photos/400/300?random=9',
  'https://picsum.photos/400/300?random=10',
])

onMounted(() => {
  gsap.to('.card', {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: '.card',
      start: 'top 15%',
      end: 'bottom 15%',
      scrub: true,
      // markers: true,
    }
  })
})

</script>
<style scoped lang="scss">
.box {
  width: 100%;
  padding: 15vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .card {
    position: sticky;
    top: 15vh;
    width: 26rem;
    padding: 7rem 1rem;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 2rem;
    }

    span {
      display: inline-flex;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: #eee;
      background-color: rgba(0, 0, 0, .2);
      width: 5rem;
      height: 5rem;
      font-size: 2rem;
      z-index: 2;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all .4s;
      &:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, .5);
      }
    }
  }
}
</style>