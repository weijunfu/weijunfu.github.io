<template>
<blockquote class="fu-quote">
    {{ content }}
</blockquote>
</template>
<script setup lang="ts">

defineProps({
    content: {
        type: String, required: true
    }
})

</script>
<style scoped lang="scss">
.fu-quote {
    font-style: italic;
    color: #555;
    font-family: "Georgia", serif;
    font-size: 1.1em;
    line-height: 1.6;
    /* 左右缩进，创建独立区域 */
    margin: 1.5em 2em;
    /* 内部留白 */
    padding: 1em 1.5em;
    /* 添加左边框，增加视觉分隔 */
    border-left: 4px solid var(--theme);
    /* 背景色（可选，增加层次感） */
    background-color: #f9f9f9;
    position: relative; 
    padding-left: 3em; /* 为引号留出空间 */
    width: 80%;
    
    &::before {
        content: "\"";
        font-size: 4em;
        color: var(--theme);
        position: absolute;
        left: 10px;
        top: 10px;
        line-height: 1;
        /* 需要设置 position: relative; 给 blockquote 才能定位 */
    }
}
</style>