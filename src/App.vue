<template>
  <div class="layout flex flex-column w-full h-full">
    <header class="layout-header flex flex-row align-items-center">
      <div class="logo">
        <img :src="Logo" alt="weijunfu,java,logo" />
      </div>
    </header>
    <main class="layout-main flex flex-row">
      <aside class="layout-aside">
        <AsideMenu />
      </aside>
      <main class="layout-main flex flex-column">
        <main class="layout-main">
          <router-view />
        </main>
        <footer class="layout-footer">
          <FuFooter />
        </footer>
      </main>
    </main>
  </div>
</template>

<script setup lang="ts">

import Logo from '@/assets/logo.svg';
import AsideMenu from '@/components/AsideMenu/index.vue';
import FuFooter from '@/layout/FuFooter/index.vue'

</script>

<style scoped lang="scss">
.layout {
  font-size: 1.2rem;
  &-header {
    height: 7.2rem;
    min-height: 72px;
    border-bottom: .1rem solid rgba(249, 215, 112, .5);
    .logo {
      margin-left: 2rem;
      img {
        width: 5vw;
        height: 5vw;
        object-fit: contain;
        padding: .2rem;
        border-radius: 50%;
        min-height: 64px;
        min-width: 64px;
      }
    }
  }

  &-main {
    flex: 1;

    .layout-aside {
      width: 10vw;
      min-width: 120px;
      border-right: .1rem solid rgba(249, 215, 112, .5);
    }

    .layout-main {
      flex: 1;
      overflow: auto;
      
      .layout-main {
        flex: 1;
        padding: .5rem 1rem;
      }

      .layout-footer {
        height: 6rem;
        min-height: 60px;
      }
    }
  }
}
</style>
