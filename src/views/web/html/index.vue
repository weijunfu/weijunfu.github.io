<template>
<div class="html">
    <h2>HTML</h2>

    <h3>什么是HTML？</h3>
    <dl>
        <dt>HTML是用来描述网页的一种语言</dt>
        <dd>HTML指的是超文本标记语言（Hyper Text Markup Language）</dd>
        <dd>HTML不是编程语言，而是一种标记语言（Markup Language）</dd>
        <dd>标记语言是一套标记标签</dd>
        <dd>HTML使用标记标签来描述网页</dd>
    </dl>
    <dl>
        <dt>示例</dt>
        <dd>
            <FuCode language="html" :code="htmlCode" />
        </dd>
    </dl>

    <h3>HTML常用文本格式标签</h3>
    <dl>
        <dt>标题</dt>
        <dd>
            <FuQuote :content="titleQuote" />
        </dd>
        <dd class="grid grid-row-2 grid-col-3">
            <dl class="bg-red-500-alpha-10">
                <dt>一级标题</dt>
                <dd>&lt;h1&gt;</dd>
            </dl>
            <dl class="bg-blue-500-alpha-10">
                <dt>二级标题</dt>
                <dd>&lt;h2&gt;</dd>
            </dl>
            <dl class="bg-red-500-alpha-10">
                <dt>三级标题</dt>
                <dd>&lt;h3&gt;</dd>
            </dl>
            <dl class="bg-blue-500-alpha-10">
                <dt>四级标题</dt>
                <dd>&lt;h4&gt;</dd>
            </dl>
            <dl class="bg-red-500-alpha-10">
                <dt>五级标题</dt>
                <dd>&lt;h5&gt;</dd>
            </dl>
            <dl class="bg-blue-500-alpha-10">
                <dt>六级标题</dt>
                <dd>&lt;h6&gt;</dd>
            </dl>
        </dd>

        <dt>段落</dt>
        <dd>
            <FuQuote :content="paragraphQuote" />
        </dd>
        <dd>
            <FuCode language="html" code="<p>这是一个段落。</p>" />
        </dd>

        <dt>分割线</dt>
        <dd>
            <FuQuote :content="dividerQuota" />
        </dd>
        <dd>
            <FuCode language="html" code="<hr />" />
        </dd>

        <dt>格式化标签</dt>
        <dd>
            <table>
                <thead>
                    <tr>
                        <th>标签名</th>
                        <th>描述</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&lt;b&gt;</td>
                        <td>加粗文本</td>
                    </tr>
                    <tr>
                        <td>&lt;i&gt;</td>
                        <td>倾斜文本</td>
                    </tr>
                    <tr>
                        <td>&lt;del&gt;</td>
                        <td>删除文本</td>
                    </tr>
                    <tr>
                        <td>&lt;ins&gt;</td>
                        <td>插入文本</td>
                    </tr>
                    <tr>
                        <td>&lt;sup&gt;</td>
                        <td>添加上标文本</td>
                    </tr>
                    <tr>
                        <td>&lt;sub&gt;</td>
                        <td>添加下标文本</td>
                    </tr>
                    <tr>
                        <td>&lt;abbr&gt;</td>
                        <td>添加缩写文本</td>
                    </tr>
                </tbody>
            </table>
        </dd>

        <dt>转义符号</dt>
        <dd>
            <table>
                <thead>
                    <tr>
                        <th>转义符</th>
                        <th>符号</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>&nbsp;</code></td>
                        <td>空格（半角空格）</td>
                    </tr>
                    <tr>
                        <td><code>&amp;</code></td>
                        <td>&amp;</td>
                    </tr>
                    <tr>
                        <td><code>&lt;</code></td>
                        <td>&lt;</td>
                    </tr>
                    <tr>
                        <td><code>&gt;</code></td>
                        <td>&gt;</td>
                    </tr>
                    <tr>
                        <td><code>&quot;</code></td>
                        <td>&quot;</td>
                    </tr>
                    <tr>
                        <td><code>&copy;</code></td>
                        <td>&copy;</td>
                    </tr>
                </tbody>
            </table>
        </dd>
    </dl>

    
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import FuCode from '@/components/FuCode/index.vue'
import FuQuote from '@/components/FuQuote/index.vue'

const htmlCode = ref(
`<!DOCTYPE HTML>
    <html lang="zh_CN">
    <head>
    <meta charset="UTF-8" />
    <title>Demo 1 | ijunfu</title>
    <head>
    <body>
        <h2>Welcome to you!</h2>
    </body>
    </html>`);

const titleQuote = ref('标题的作用是让用户快速了解文档的结构和大致信息。它通过<h1>~<h6>等标签对进行定义的。<h1>标签对定义最大的一号标题；<h6>标签对定义最小的六号标题。当为文字添加标题标签之后，它会独立称为一行显示。')

const paragraphQuote = ref('段落通过<p>标签对进行定义。')

const dividerQuota = ref('分割线主要用来分隔网页中的内容。分割线通过<hr />标签进行定义。')
</script>
<style scoped lang="scss">

</style>