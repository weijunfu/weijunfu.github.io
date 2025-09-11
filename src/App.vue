<template>
<div class="layout w-full h-full">
  <aside>
    <Logo />
    <AsideMenu />
  </aside>
  <main class="flex flex-column h-full">
    <div class="content w-full">
      <router-view />
    </div>
    <footer class="footer w-full">
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
  aside {
    grid-area: navigation;
  }

  main {
    padding: 1rem .5rem;
    grid-area: main;
    max-height: 100vh;
    
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .2);

    $footerHeight: 10rem;
    $contentHeight: calc(100vw - $footerHeight);
    .content {
      height: $contentHeight;
      max-height: $contentHeight;
      overflow-y: auto;
    }

    .footer {
      height: $footerHeight;
      background-color: #18191b;
      color: #fff;
    }
  }
}
</style>
