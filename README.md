# [weijunfu.github.io](https://weijunfu.github.io)

## 目录
[1. 安装](##安装)
[    1.1 环境](###环境)
[2. 适配](##适配)
[    2.1 rem适配](###rem适配)
[    2.2 使用](###使用)
## 安装

### 环境

```shell
pnpm create vite

pnpm add vue-router

pnpm add -D sass-embedded

pnpm add -D @types/node

pnpm add prismjs
pnpm install -D @types/prismjs
```

## 适配

### rem适配

```shell
pnpm install amfe-flexible
pnpm install postcss-pxtorem -D
```

### 使用
```
// main.ts
import 'amfe-flexible';
```

### postcss.config.ts 配置
```ts
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
        "rootValue": 75,    // 设计稿宽度的 1/10，设计稿：750px -> 75
        "propList": ["*"]   // 需要转化处理的属性：width、height、margin...; "*"表示全部
    }
  }
}
```
注意：
+ `rootValue`根据设计稿宽度除以`10`进行设置，这边假设设计稿为`375`，即`rootValue`设为`37.5`。
+ `propList`是设置需要转换的属性；"*"表示全部。
