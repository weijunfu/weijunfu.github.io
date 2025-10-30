<template>
<div class="font-size-card flex flex-column justify-between">
  <div class="top flex flex-row justify-between">
    <div class="title">{{ data.type }}</div>
    <div class="flag"></div>
  </div>
  <div :class="['center', 'text-center', data.fontSize]">
    {{ data.size }}
  </div>
  <div class="bottom text-center">
    {{ data.scene }}
  </div>
</div>
</template>
<script setup lang="ts">

import { type PropType } from 'vue'
import { type IFontSizeCard, defaultFontSizeCard } from '@/types/web/fontSize'

defineProps({
  data: {
    type: Object as PropType<IFontSizeCard>,
    default: {...defaultFontSizeCard}
  }
})

</script>
<style scoped lang="scss">
.font-size-card {
  min-width: 1.2rem;
  min-height: 1.8rem;

  border-radius: .05rem;
  border: 1px solid var(--border-color);
  padding: .1rem;
  transition: all .4s;

  .top {
    .flag {
      width: .1rem;
      height: .1rem;
      border: 1px solid var(--border-color);
      border-radius: 50%;
    }
  }

  &:hover {
    cursor: pointer;
    border-color: var(--theme);

    .top {
      .flag {
        border-color: var(--theme);
        background-color: var(--theme);
      }
    }

    .center {
      color: var(--theme);
    }
  }
}
</style>