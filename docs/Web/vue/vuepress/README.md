---
title: 使用 Vue Press 搭建个人网站
---

## 指导

使用 Vue Press 搭建个人网站需要使用以下软件，请自行下载安装，此处不再细说。

- [node.js](https://nodejs.org/zh-cn/)
- [VS code](https://code.visualstudio.com/)
- [Cmder](https://cmder.net/)

## VuePress 介绍

### VuePress 是什么？

- VuePress 是一个`极简静态网站生成器`，包含了 Vue 驱动的`主题系统`和`插件API`；
- VuePress 是为书写技术文档而优化的`默认主题`。

### 为什么使用 VuePress？

- VuePress 专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性；
- VuePress 对 Markdown 支持友好，配置灵活方便

### 怎么使用 VuePress？

1. 创建并进入一个新目录

```
  mkdir vuepress-starter && cd vuepress-starter
```

2. 初始化项目环境

```
  npm init --y
```

3. 安装 VuePress

```
  npm i -D vuepress
```

4. 创建一篇文章

```
  mkdir docs && echo "# Hello VuePress" > docs/README.md
```

5. 在`package.json`中修改`scripts`

```
  "scripts":{
      "dev":"vuepress dev docs --no-cache --temp .temp",
  }
```

6. 运行项目

```
  yarn dev
```

VuePress 会在`http://localhost:8080`启动一个热重载的开发服务器。

## 默认配置

### 首页

### 导航栏

待更新……

敬请期待！

## VuePress 插件

### back-to-top

> 可快速返回页面顶部

#### 安装

```
yarn add -D @vuepress/plugin-back-to-top
```

#### 使用

在`.vuepress/config.js`中添加`plugins`:

```
module.exports = {
  plugin: ['@vuepress/back-to-top']
}
```

### last-updated

如果你对时间格式没有特殊需求，按照默认即可，不需安装该插件。
