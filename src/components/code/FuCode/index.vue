<template>
<pre v-if="!inline">
<code :class="[`language-${lang}`]">
{{ code }}
</code>
</pre>
<code v-else :class="[`language-${lang}`]">{{ code }}</code>
</template>
<script setup lang="ts">

defineProps({
  lang: String,
  code: String,
  inline: {
    type: Boolean, required: false, default: false
  }
})

</script>
<style scoped lang="scss">

</style>