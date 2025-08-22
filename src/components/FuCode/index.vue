<template>
<pre class="line-numbers">
    <code ref="codeRef" :class="`language-${language}`">{{ code }}</code>
</pre>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'

const props = defineProps({
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        default: 'javascript'
    }
})

const codeRef = ref(null)

const highlightCode = () => {
    if (codeRef.value) {
        Prism.highlightElement(codeRef.value)
    }
}

onMounted(() => {
    highlightCode()
})

watch(() => props.code, () => {
    highlightCode()
})
</script>
<style>
/* 全局修复 */
pre.line-numbers {
    padding-left: 3.8em !important;
    position: relative !important;
    white-space: pre !important;
}
</style>
<style scoped lang="scss">
pre {
    width: 80%;
}
</style>