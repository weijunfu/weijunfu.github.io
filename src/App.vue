<template>
<div class="layout w-full h-full">
  <nav class="flex flex-row justify-between items-center medium">
    <i :class="[active ? 'ri-menu-3-fill' : 'ri-menu-2-fill']" @click="changeMenu"></i>

    <Logo />
  </nav>
  <aside :class="['line-color-2','h-full', active ? 'mobile' : '']">
    <Logo class="w-full" />
    <AsideMenu class="aside-menu"/>
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

import { storeToRefs } from 'pinia'; 

import { useMobileMenuStore } from '@/stores/useMobileMenuStore';

const mobileMenuStore = useMobileMenuStore()

const { active } = storeToRefs(mobileMenuStore)

function changeMenu() {
  mobileMenuStore.toggle()
}

</script>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-areas: "navigation main";
  grid-template-columns: 2rem 1fr;
  transition: 1s;
  overflow-x: hidden;

  @include media('phone') {
    display: flex;
    position: relative;
  }

  $navHeight: .6rem;
  $mainHeihgt: calc(100% - $navHeight);

  nav {
    height: $navHeight;
    padding-left: .2rem;
    padding-right: .2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    @include media(desktop) {
      display: none;
    }
  }

  aside {
    grid-area: navigation;
    transition: 1s;
    will-change: width, color, background;
    max-height: 100vh;
    $logoHeight: 10vh;
    @include media(phone) {
      display: none;
    }
    &.mobile {
      @include media(phone) {
        display: block;
        position: absolute;
        top: $navHeight;
        left: 0;
        width: 100%;
        height: $mainHeihgt;
        z-index: 99999;
        background-color: var(--background-color);
      }
    }

    .logo {
      height: 10vh;

      @include media(phone) {
        display: none;
      }
    }

    .aside-menu {
      height: calc(100% - 10vh);
    }
  }

  main {
    grid-area: main;
    height: 100%;
    min-height: 100vh;
    
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .2);

    @include media('phone') {
      position: absolute;
      top: $navHeight;
      left: 0;
      width: 100%;
      height: $mainHeihgt;
      overflow-y: auto;
    }

    $footerHeight: 1.6rem;
    $contentHeight: calc(100% - $footerHeight);
    .content {
      padding: .2rem .1rem;
      height: $contentHeight;
      max-height: $contentHeight;
      overflow-y: auto;
    }

    .footer {
      height: $footerHeight;
    }
  }
}
</style>
