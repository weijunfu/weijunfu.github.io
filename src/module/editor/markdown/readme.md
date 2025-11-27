# Markdown

## 欢迎使用Markdown编辑器

你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。

### 合理的创建标题，有助于目录的生成

直接输入1次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成1级标题。

输入2次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成2级标题。

以此类推，我们支持6级标题.

### 如何改变文本的样式

#### 强调

`*强调文本*` 或 ` _强调文本_`

*强调文本* _强调文本_

#### 加粗
`**加粗文本**` 或 `__加粗文本__`

**加粗文本** __加粗文本__

#### 标记

`==标记文本==`

==标记文本==

#### 删除
`~~删除文本~~`

~~删除文本~~

#### 引用
```
> 引用文本
```

> 引用文本


### 插入链接和图片

#### 链接

`链接: [Github](https://weijunfu.github.io/).`

链接: [Github](https://weijunfu.github.io/).

#### 图片

`![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw)`

![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw)


### 如何插入一段漂亮的代码片

#### 行级代码

`const author = 'ijunfu';`

#### 代码块

```javascript
const author = 'ijunfu';
```

### 生成一个适合你的列表


- 项目
  - 项目
    - 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

### 创建一个表格


一个简单的表格是这么创建的：
项目     | Value
-------- | -----
电脑  | $1600
手机  | $12
导管  | $1

#### 设定内容居中、居左、居右

使用`:---------:`居中

使用`:----------`居左

使用`----------:`居右

| 第一列       | 第二列         | 第三列        |
|:-----------:| -------------:|:-------------|
| 第一列文本居中 | 第二列文本居右  | 第三列文本居左 |

### 如何创建一个注脚

一个具有注脚[$^2$]的文本。

[$^2$]: 注脚的解释

### 数学公式示例

行内公式：$E = mc^2$

块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$