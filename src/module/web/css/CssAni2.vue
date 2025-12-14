<template>
<div class="loader box">
  <span class="conter">
    Loading
    <i>50%</i>
  </span>
  <div class="spinner"></div>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.loader
.conter
.spinner {
  width: 200px;
  height: 200px;
}

.loader {
  background-color: #000;
}

.conter {
  line-height: 200px;
  padding-left: 40px;
  font-size: 20px;
  letter-spacing: 1px;
  color: #ffffff00;
  text-shadow: 
    0 0 0 #ffffffbf,
    0 0 2px #1e90ff,
    0 0 4px #1e90ff,
    0 0 6px #1e90ff,
    0 08x #1e90ff,
    0 0 10px #1e90ff;
  ;
}

.spinner {
  border-radius: 50%;
  box-shadow: 
    3px 1px -1px #fff,
    5px 0 5px #1e90ff80,
    inset -10px 0 10px -5px #1e90ff80;
  animation: loading 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    width: 160px;
    height: 160px;
  }
}
</style>