<template>
<div class="logo flex flex-center">
  <svg class="logo-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="81.000000pt" height="83.000000pt" viewBox="0 0 81.000000 83.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
      <path fill="currentColor" d="M380 693 c-67 -10 -72 -13 -59 -29 10 -13 27 -14 93 -9 45 4 83 8 85 10 2 2 1 11 -2 20 -6 15 -54 18 -117 8z"/>
      <path fill="currentColor" d="M313 585 c-56 -24 -41 -39 32 -32 80 8 83 -1 22 -81 -44 -58 -72 -112 -59 -112 4 0 30 27 57 59 28 33 53 60 58 60 14 2 7 -75 -13 -126 -27 -72 -41 -172 -34 -238 4 -30 9 -53 12 -51 2 3 11 56 18 119 10 84 20 127 40 166 27 55 27 53 8 174 -7 41 -8 40 64 37 38 -1 43 1 40 17 -3 16 -15 18 -108 20 -74 2 -115 -2 -137 -12z" />
    </g>
  </svg>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.logo {
  &:hover {
    cursor: pointer;
    .logo-icon {
      color: var(--hover-text-theme);
    }
  }
  &-icon {
    width: 3vw;
    height: 3vw;
    object-fit: contain;
    padding: .05rem;
    border-radius: 50%;
    min-height: 32px;
    min-width: 32px;
    color: var(--text-color);
    transition: 1s;
  }
}
</style>