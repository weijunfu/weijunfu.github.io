<template>
<div class="fu-card">
  <div class="icon">
    <i class="ri-pencil-ruler-2-line"></i>
  </div>
  <div class="content">
    <div class="text">
      <h2>Design</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <a href="#">Read More</a>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
defineProps({
  icon: String
})
</script>
<style scoped lang="scss">
.fu-card {
  width: 350px;
  height: 520px;
  background-color: var(--fu-card-color1, #ccc);
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(255,255,255, .1);
  }

  .icon {
    position: relative;
    width: 100%;
    height: 50%;
    background-color: var(--fu-card-color2, #333);
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      filter: invert(1);
      font-size: 10rem;
      z-index: 10;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 80px;
      background-color: var(--fu-card-color1, #ccc);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 80px;
      background-color: var(--fu-card-color2, #333);
      border-bottom-left-radius: 80px;
    }
  }

  .content {
    position: relative;
    width: 100%;
    height: 50%;
    background-color: var(--fu-card-color1, #ccc);
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background-color: var(--fu-card-color2, #333);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: var(--fu-card-color1, #ccc);
      border-top-right-radius: 80px;
    }

    .text {
      z-index: 1;
      text-align: center;
      padding: 20px 30px;

      h2 {
        text-align: center;
        font-weight: 500;
        font-size: 1.7em;
        color: var(--fu-card-color2, #333);
      }

      p {
        font-weight: 400;
        color: var(--fu-card-color2, #333);
        margin: 10px auto;
      }

      a {
        display: inline-block;
        padding: 12px 25px;
        background-color: var(--fu-card-color2, #333);
        color: #fff;
        margin-top: 10px;
        border-radius: 30px;
        text-decoration: none;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>