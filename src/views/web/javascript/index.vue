<template>
<div class="javascrip">
  <h1>JavaScript</h1>

  <h2>动态执行JavaScript方案</h2>

  <dl>
    <dt>方案一：eval</dt>
    <dd>
      <FuQuote content="eval() 是 JavaScript 内置的全局函数，它接受一个字符串参数，并将其作为 JavaScript 代码在当前执行上下文中执行。" />
      <FuCode language="js" :code="execRef1" />
      <FuNote content="注意：如果 eval 是通过别名调用（如 let e = eval; e('...')），则它会在全局作用域中执行，而非当前作用域。" />
    </dd>
    <dt>方案二：setTimeout</dt>
    <dd>
      <FuQuote content="与eval 不同，setTimeout 字符串形式的代码总是在全局作用域中执行" />
      <FuCode language="js" :code="execRef2" />
      <FuNote content="强烈不推荐使用，MDN 明确建议只传入函数" />
    </dd>
    <dt>方案三：script</dt>
    <dd>
      <FuQuote content="动态 <script> 标签中的代码在全局作用域中执行，等同于在 HTML 中直接写 <script>" />
      <FuCode language="js" :code="execRef3" />
      <FuNote content="若插入用户提供的代码，必须严格过滤或使用 nonce/CSP" />
    </dd>
    <dt>&#x2728;方案四：Function</dt>
    <dd>
      <FuQuote content="Function 创建的函数始终在全局作用域中执行，无法访问外层函数的局部变量" />
      <FuCode language="js" :code="execRef4" />
      <FuNote content="若必须动态执行，优先使用 Function 而非 eval" />
    </dd>
    </dl>
</div>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const execRef1 = ref(`
eval('console.log("ijunfu")')
`)

const execRef2 = ref(`
const code = 'console.log("ijunfu")'
setTimeout(code)
`)


const execRef3 = ref(`
const code = 'console.log("ijunfu")'
const script = document.createElement('script')
script.innerHTML = code
document.body.appendChild(script)
`)

const execRef4 = ref(`
const code = 'console.log("ijunfu")';
new Function(code)();
`)

</script>
<style scoped lang="scss">
dl {
  dt {
    margin-top: 1rem;
  }
}
</style>