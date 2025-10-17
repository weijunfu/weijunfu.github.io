<template>
<div class="loading-wrapper">
  <div class="loading"></div>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
@keyframes changeBg {
  to { filter: hue-rotate(360deg); }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.loading-wrapper {
  --theme: #001d30;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme);
  animation: changeBg 5s linear infinite;

  .loading {
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, var(--theme) 40%, #51eeee);
    border-radius: 50%;
    position: relative;
    animation: rotate 5s linear infinite;

    &::before {
      content: '';
      position: absolute;
      background-color: var(--theme);
      border-radius: 50%;
      inset: 20px 20px 0 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50px;
      right: -8px;
      width: 40px;
      height: 40px;
      background: #51eeee;
      border-radius: 50%;
      box-shadow: 0 0 5px #51eeee,
                  0 0 25px #51eeee,
                  0 0 50px #51eeee,
                  0 0 75px #51eeee;
    }
  }
}
</style>