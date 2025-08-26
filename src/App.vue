<template>
  <div class="layout flex flex-column w-full h-full">
    <header class="layout-header flex flex-row items-center w-full">
      <div class="logo flex justify-center items-center">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="81.000000pt" height="83.000000pt" viewBox="0 0 81.000000 83.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M380 693 c-67 -10 -72 -13 -59 -29 10 -13 27 -14 93 -9 45 4 83 8 85
10 2 2 1 11 -2 20 -6 15 -54 18 -117 8z"/>
<path d="M313 585 c-56 -24 -41 -39 32 -32 80 8 83 -1 22 -81 -44 -58 -72
-112 -59 -112 4 0 30 27 57 59 28 33 53 60 58 60 14 2 7 -75 -13 -126 -27 -72
-41 -172 -34 -238 4 -30 9 -53 12 -51 2 3 11 56 18 119 10 84 20 127 40 166
27 55 27 53 8 174 -7 41 -8 40 64 37 38 -1 43 1 40 17 -3 16 -15 18 -108 20
-74 2 -115 -2 -137 -12z"/>
</g>
</svg>
      </div>
      <FuNav />
    </header>
    <main class="layout-main flex flex-row w-full">
      <aside class="layout-aside h-full">
        <AsideMenu />
      </aside>
      <div class="layout-content flex flex-column h-full">
        <div class="content w-full">
          <router-view />
        </div>
        <footer class="layout-footer w-full">
          <FuFooter />
        </footer>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

import FuNav from '@/layout/FuNav/index.vue';
import AsideMenu from '@/components/AsideMenu/index.vue';
import FuFooter from '@/layout/FuFooter/index.vue'

</script>

<style scoped lang="scss">
.layout {
  font-size: 1.2rem;
  background: linear-gradient(to bottom, #E0F7FA, #B2EBF2, #80DEEA, #4DD0E1, #00BCD4, #0D47A1);

  &-header {
    height: 7.2rem;
    min-height: 72px;
    // background: linear-gradient(30deg, var(--color-primary), var(--color-second), var(--color-primary));
    .logo {
      margin-left: 2rem;
      width: calc(10vw - 2rem);
      min-width: 120px;
      svg {
        width: 3vw;
        height: 3vw;
        object-fit: contain;
        padding: .2rem;
        border-radius: 50%;
        min-height: 32px;
        min-width: 32px;
        color: var(--color-white);
      }
    }
  }

  &-main {
    height: calc(100% - 7.2rem);
    min-height: calc(100% - 72px);

    .layout-aside {
      width: 10vw;
      min-width: 200px;
    }

    .layout-content {
      width: calc(100% - 10vw);
      min-width: calc(100% - 10vw);
      min-height: 100%;
      max-height: 100%;

      $footerHeight: 2rem;
      .content {
        padding: 1rem;
        height: calc(100% - $footerHeight);
        max-height: calc(100% - $footerHeight);
        overflow-y: auto;
      }

      .layout-footer {
        height: $footerHeight;
        min-height: 20px;
      }
    }
  }
}
</style>
