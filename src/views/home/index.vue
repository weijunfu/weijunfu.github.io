<template>
<div class="home w-full h-full flex flex-row flex-wrap">
    <CategoryCard :data="item" v-for="item in categoryList" :key="item.id"/>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CategoryCard from '@/components/card/CategoryCard/index.vue';
import type { Category } from '@/types/category'

const categoryList = ref<Category[]>([
    {
        id: '1', theme: '#FC6A31', title: 'Java', icon: 'ri-java-fill', url: '/java', content: 'Java 是一种由 Oracle 公司维护的高级编程语言，以“一次编写，到处运行”著称。它通过 Java 虚拟机（JVM）实现跨平台运行，具有面向对象、自动内存管理和丰富的标准库等特点，广泛应用于企业级开发、Android 应用、Web 后端等领域。'
    },{
        id: '2', theme: '#00A4FF', title: 'Web', icon: 'ri-global-line', url: '/web', content: 'Web（万维网，World Wide Web）是一个基于互联网的信息系统，通过超文本链接将全球的文档、图片、视频等资源连接在一起'
    },{
        id: '3', theme: '#E40046', title: 'Database', icon: 'ri-database-2-line', url: '/database', content: '数据库是用于结构化存储、管理和高效访问数据的系统，支持增删改查操作，广泛应用于网站、企业软件和移动应用等场景，是现代信息系统的核心组件。'
    },{
        id: '4', theme: '#517A9E', title: 'Vue', icon: 'ri-vuejs-fill', url: '/vue', content: 'Vue 是一款轻量、易用的前端框架，支持组件化开发和响应式数据绑定，适合构建用户界面和单页应用。'
    },{
        id: '5', theme: '#3399CC', title: 'Docker', icon: 'ri-box-3-line', url: '/docker', content: 'Docker 是一个开源平台，用于打包、分发和运行应用及其依赖在轻量级容器中，实现环境一致与快速部署。'
    },{
        id: '6', theme: '#F43E37', title: 'Node', icon: 'ri-nodejs-fill', url: '/nodejs', content: 'Node.js 是基于 Chrome V8 引擎的 JavaScript 运行环境，支持高性能、事件驱动的非阻塞 I/O，适用于构建快速、可扩展的网络应用和服务器端服务。'
    },
])

</script>
<style scoped lang="scss">
.home {
 gap: .2rem .1rem;
}
</style>