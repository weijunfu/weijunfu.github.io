<template>
  <div class="box">
    <h2>输入边框动画</h2>
    <div class="form-item">
      <input type="email" id="email" class="form__input" placeholder="">
      <label for="email" class="form__label">Email</label>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
h2 {
  color: #222;
}

.form,
.form-item {
  position: relative;
  width: 100%;
  max-width: 20rem;
  
  &__input {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    padding: 0.8em;
    background: none;
    border: 2px solid #ccc;
    border-radius: 0.05rem;
    outline: none;

    &:hover {
      border-color: #aaa;
    }

    &:focus {
      border-color: #bbb;
      & ~ .form__label { 
        top: -0.5em;
        font-size: 0.8em;
      }
    }

    &:not(:placeholder-shown) ~ .form__label { 
      transform: translateY(-100%) scale(0.8);
    }

  }

  &__label { 
    position: absolute;
    top: 1em;
    left: 1em;
    cursor: text;
    user-select: none;
    background-color: #fff;
    padding: 0 0.5em;
    transition: transform 200ms ease-in;
    transform-origin: top left;
  }

}
</style>