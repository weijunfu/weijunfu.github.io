<template>
<div class="card" v-if="data?.id" :style="{'--category-color': data.theme}">
  <div class="card-icon">
    <i v-if="data.icon" :class="data?.icon"></i>
    <i v-else v-html="data.svg"></i>
  </div>
  <div class="card-content">
    <div class="text">
      <h2 class="rbt-b flex flex-center">{{ data?.title }}</h2>
      <p class="rbt-r">{{ data?.content }}</p>
      <a class="rbt-m flex flex-center" :href="data?.url">Read Me</a>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'
import type { Category } from '@/types/category'

defineProps({
  data: Object as PropType<Category>
})

</script>
<style scoped lang="scss">

.card {
  border-color: var(--category-color, #F38020);
  &-icon {
    &::before {
      background-color: var(--category-color, #F38020);
    }
  }
  &-content {
    background-color: var(--category-color, #F38020);
    &::before {
      background-color: #fff;
    }

    .text {
      a {
        border-color: var(--category-color, #F38020);
        color: var(--category-color, #F38020);

        &::after {
          background-color: var(--category-color, #F38020);
        }
      }
    }
  }
}

.card {
  width: 3.5rem;
  height: 6.2rem;
  border-radius: .4rem;
  position: relative;
  border-width: 0.02rem;
  border-style: solid;
  box-shadow: 
  0 0 .02rem rgba(255,255,255,.4),
  0 0 .05rem rgba(255,255,255,.3),
  0 0 .1rem rgba(255,255,255,.2),
  0 0 .15rem rgba(255,255,255,.1),
  0 0 .2rem rgba(255,255,255,.1);
  overflow: hidden;

  &-icon {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 50%;
    font-size: 1.8rem;
    background-color: #fff;
    
    i {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 1.8rem;
      display: inline-block;
      z-index: 2;
      filter: invert(1);

      svg {
        font-size: 1.8rem;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-bottom-left-radius: .8rem;
    }
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-top-right-radius: .8rem;
      z-index: 1;
    }

    .text {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      padding: .2rem .3rem;
      display: grid;
      grid-template-rows: 20% 60% 20%;

      h2, p {
        color: #333;
      }

      h2 {
        text-align: center;
        line-height: 1.5em;
      }

      p {
        margin-top: .2rem;
      }

      a {
        padding: .1rem .2rem;
        display: inline-flex;
        border-width: 0.02rem;
        border-style: solid;
        border-radius: .2rem;
        font-size: .16rem;
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: all .4s;

        &::after {
          content: '';
          position: absolute;
          left: -50%;
          bottom: -50%;
          width: 1rem;
          height: 1rem;
          transition: all .4s;
          z-index: -1;
        }

        &:hover {
          color: #fff;
          &::after {
transform: scale(10);
          }
          
        }
      } 
    }
  }
}
</style>