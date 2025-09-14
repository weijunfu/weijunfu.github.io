<!-- 行代码 -->
<template>
<code class="line-code">
  {{ code }}
</code>
</template>
<script setup lang="ts">

defineProps({
  code: String
})

</script>
<style scoped lang="scss">
.line-code {
  background-color: var(--line-code-bg-color, rgba(175,184,193,.2));
  border-radius: .2rem;
  font-size: 85%;
}
</style>