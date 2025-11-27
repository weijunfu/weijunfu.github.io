<template>
<div class="layout w-full h-full">
  <nav class="w-full">
    <div class="nav-wrapper w-full flex flex-row">
      <Logo />
      <AsideMenu class="aside-menu"/>
    </div>
  </nav>
  <main class="flex flex-column w-full">
    <div class="content-wrapper">
      <router-view />
    </div>
  </main>
</div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo/index.vue';
import AsideMenu from '@/layout/AsideMenu/index.vue';
</script>

<style scoped lang="scss">
.layout {  
  overflow: hidden;
  nav {
    height: .72rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    .nav-wrapper {
      margin: 0 auto;
      max-width: 16rem;
    }
  }

  main {
    .content-wrapper {
      margin: 0 auto;
      max-width: 16rem;
    }
  }
}
</style>
