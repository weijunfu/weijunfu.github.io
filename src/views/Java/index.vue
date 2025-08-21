<template>
<div class="java">
    <FuCode language="css" :code="code" />
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import FuCode from '@/components/FuCode/index.vue';

const code = ref('.flex: { display: flex; }')


</script>
<style scoped lang="scss">

</style>