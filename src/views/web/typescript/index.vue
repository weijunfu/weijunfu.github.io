<template>
<div class="typescript">
    <h2 class="flex">TypeScript</h2>

    <h3 class="flex">不可变类型</h3>

    <FuCode language="ts" :code="code" />
</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

import FuCode from '@/components/FuCode/index.vue';

const code = ref(
`
interface Person {
    name: string;
    age: number;
    ext: {
        job: string;
    }
}

const user: Readonly<Person> = {
    name: '张三',
    age: 18,
    ext: {
        job: '程序员'
    }
}

user.age = 19;      // err

user.ext.job = '教师';  // ok

// 自定义只读
type DeepReadonly<T> = {
    readonly [P in keyof T] : T[P] extends object ? DeepReadonly<T[P]> : T[P]
}


const user2: DeepReadonly<Person> = {
    name: '李四',
    age: 20,
    ext: {
        job: '演员'
    }
}

user2.age = 28;          // err

user2.ext.job = '导演';  // err
`
)

</script>
<style scoped lang="scss">

</style>