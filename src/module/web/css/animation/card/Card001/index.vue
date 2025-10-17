<template>
<div class="card">
  <div class="face">
    <div class="content">
      <i class="ri-tools-line"></i>
      <h3>Design</h3>
    </div>
  </div>
  <div class="face">
    <div class="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae? </p>
      <a href="#">Read More</a>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.card {
  position: relative;
  height: 400px;
  .face {
    width: 300px;
    height: 200px;
    transition: .5s;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      
      background-color: #333;
      transform: translateY(100px);
      z-index: 1;

      .content {
        opacity: .2s;
        transition: .5s;

        i {
          font-size: 6rem;
        }

      }
    }

    &:nth-child(2) {
      background-color: #fff;
      transform: translateY(-100px);
      padding: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, .8);
      top: 50%;
      .content {
        p {
          margin: 0;
          padding: 0;
        }

        a {
          margin: 15px 0 0;
          display: inline-flex;
          text-decoration: none;
          font-weight: 900;
          color: #333;
          padding: .5rem 1rem;
          border: 1px solid #333;
          border-radius: .5rem;
          transition: .4s;

          &:hover {
            background-color: #333;
            color: #fff;
          }
        }
      }
    }
  }

  &:hover {
    .face {
      &:nth-child(1) {
        background-color: #ff0057;
        transform: translateY(0);
      }

      &:nth-child(2) {
        transform: translateY(0);
      }
      .content {
        opacity: 1;
      }
    }
  }
}
</style>