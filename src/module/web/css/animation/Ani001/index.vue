<template>
<div class="css-animation">
  <div class="box-wrapper">
    <div class="box">
      <div class="loader"></div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
@keyframes animateBox {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25px); }
}

@keyframes loop {
  0% { transform: rotate(0deg); }
  // 60% { transform: rotate(90deg); }
  65% { transform: rotate(85deg); }
  // 70% { transform: rotate(90deg); }
  // 75% { transform: rotate(87.5deg); }
  100% {
    transform: rotate(90deg);
  }
}
.css-animation {
  background-color: #000;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-wrapper {
    position: relative;
    width: 100%;
    transform: rotate(-35deg);
  }
  .box {
    position: absolute;
    left: -50px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% + 50px);
    height: 100px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    animation: animateBox 1.5s ease-in-out infinite;

    .loader {
      width: 100px;
      height: 100px;
      background-color: #03e9f4;
      box-shadow: 0 0 5px rgba(3, 233, 244, 1),
                  0 0 25px rgba(3, 233, 244, 1),
                  0 0 50px rgba(3, 233, 244, 1),
                  0 0 100px rgba(3, 233, 244, 1),
                  0 0 200px rgba(3, 233, 244, .5),
                  0 0 300px rgba(3, 233, 244, .5);
      transform-origin: bottom right;
      animation: loop 1.5s ease-in-out infinite;
    }
  }
}
</style>