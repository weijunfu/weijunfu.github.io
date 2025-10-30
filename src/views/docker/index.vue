<template>
<h2>docker</h2>

<section>
  <h3>镜像</h3>
  <dl>
    <dt>查看所有镜像命令说明</dt>
    <dd>
      <fu-code lang="shell" code="docker image --help" :inline="true" />
    </dd>
    <dt>查看指定镜像命令说明</dt>
    <dd>
      <fu-code lang="shell" code="docker image pull --help" :inline="true" />
    </dd>
    <dt>拉取nginx镜像</dt>
    <dd>
      <fu-code lang="shell" code="docker pull nginx:alpine" :inline="true" />
    </dd>
  </dl>
  
</section>



</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">

</style>