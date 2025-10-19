<template>
<div class="fu-theme hover">
  <i v-if="themeStore.isLight()" class="ri-sun-line" @click="handleClick"></i>
  <i v-else class="ri-moon-fill" @click="handleClick"></i>
</div>


</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/useThemeStore'

const themeStore = useThemeStore()

function handleClick() {
  themeStore.toggleTheme()
}

onMounted(() => {
  const saved = localStorage.getItem('theme')

  // 类型守卫：确保 saved 是合法主题
  if (saved === 'light' || saved === 'dark') {
    themeStore.setTheme(saved)
  }

})
</script>
<style scoped lang="scss">

</style>