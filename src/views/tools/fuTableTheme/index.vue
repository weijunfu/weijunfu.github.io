<template>
<div class="fu-table-theme">
  <h1 class="title-size">表格主题</h1>

  <h2 class="subtitle-size">安装 & 使用</h2>

  <dl>
    <dt>安装</dt>
    <dd>
      <FuCode language="shell" code="npm i @fu-css/fu-table-theme" />
    </dd>
    <dt>使用</dt>
    <dd>
      <FuCode language="shell" code="import '@fu-css/fu-table-theme/style.min.css';" />
    </dd>
  </dl>

  <h2 class="subtitle-size">示例</h2>
  <p>请选择您喜欢的主题：</p>
  <select name="theme" id="themeSelect" required @change="handleSelectChange">
    <option value="" disabled>-- 请选择一个主题 --</option> <!-- 默认提示选项，value 通常为空 -->
    <option value="light">亮</option>
    <option value="dark">暗</option>
    <option value="blue">蓝</option> <!-- 默认选中 -->
    <option value="purple">紫</option>
  </select>
  <table :data-theme="themeRef">
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>张三</td>
        <td>16</td>
      </tr>
      <tr>
        <td>2</td>
        <td>李四</td>
        <td>18</td>
      </tr>
      <tr>
        <td>3</td>
        <td>王五</td>
        <td>17</td>
      </tr>
      <tr>
        <td>4</td>
        <td>赵六</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const themeRef = ref('light')
function handleSelectChange(e: any) {
  themeRef.value = e.target.value
}
</script>
<style scoped lang="scss">

</style>