<template>
<div class="layout w-full h-full">
  <aside class="line-color-2">
    <Logo />
    <AsideMenu />
  </aside>
  <main class="flex flex-column h-full">
    <div class="content w-full">
      <router-view />
    </div>
    <footer class="footer w-full line-color-3">
      <FuFooter />
    </footer>
  </main>
</div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo/index.vue';
import AsideMenu from '@/layout/AsideMenu/index.vue';
import FuFooter from '@/layout/FuFooter/index.vue'

</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-areas: "navigation main";
  grid-template-columns: auto 1fr;
  transition: 1s;
  aside {
    grid-area: navigation;
    transition: 1s;
    will-change: width, color, background;
  }

  main {
    grid-area: main;
    max-height: 100vh;
    
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .2);

    $footerHeight: 10rem;
    $contentHeight: calc(100vw - $footerHeight);
    .content {
      padding: 1rem .5rem;
      height: $contentHeight;
      max-height: $contentHeight;
      min-height: 40rem;
      overflow-y: auto;
    }

    .footer {
      height: $footerHeight;
      background-color: var(--theme);
      color: #fff;
    }
  }
}
</style>
