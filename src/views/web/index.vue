<template>
  <section>
    <h2>Font Size</h2>
    <div class="font-size flex flex-row flex-wrap">
      <FontSizeCard v-for="item in fontSizeCardList" :key="item.id" :data="item" />
    </div>
  </section>
</template>
<script setup lang="ts">
import FontSizeCard from '@/module/web/FontSizeCard/index.vue';
import { ref } from 'vue';
import { type IFontSizeCard } from '@/types/web/fontSize';


const fontSizeCardList = ref<IFontSizeCard[]>([
  { id: '1', type: 'Small', size: '16px', fontSize: 'small', scene: 'Smartphones'},
  { id: '2', type: 'Medium', size: '18px', fontSize: 'medium', scene: 'Laptops'},
  { id: '3', type: 'Large', size: '20px', fontSize: 'large', scene: 'Desktops'},
  { id: '4', type: 'Extreme', size: '24px', fontSize: 'extreme', scene: '4K Screen'},
])

</script>

<style scoped lang="scss">
.font-size {
  margin-top: .2rem;
  &-card {
    margin-top: .2rem;
    margin-right: .2rem;
  }
}
</style>