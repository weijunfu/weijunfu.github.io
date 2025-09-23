import{d as m,r as l,c as d,e as s,a as e,f as r,g as p,o as g}from"./index-DHo9W2vy.js";const y={class:"vue"},S=m({__name:"index",setup(f){const u=l(`
npm install pnpm -g # 全局安装pnpm
pnpm init # 初始化package.json配置、私有库
pnpm install vue typescript -D # 全局下添加依赖
`),a=l(`
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    // 打包模块类型
    "module": "esnext",
    "target": "es6",    // 遵循es6版本
    "types": [],
    // For nodejs:
    "lib": ["esnext", "DOM"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,      //
    "declaration": false,   // 默认不要声明文件
    "declarationMap": false,

    "esModuleInterop": true,    // 支持es6、commonjs
    "noLib": false,             // 不处理类库
    "allowSyntheticDefaultImports": true,   // 允许没有导出的模块中导入
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "resolveJsonModule": true,  // 解析JSON模块
    "removeComments": true, // 删除注释
    "noImplicitAny": false, // 支持类型不标注，可以默认为any
    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,     // 遵循严格模式
    "jsx": "preserve",  // jsx不转
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true, // 跳过类库检查

  },
  "exclude": [    // 排除类库
    "node_modules",
    "dist/**"
  ]
}
`),i=l(`
packages:
  - 'packages/**'   # 存放编写的组件
  - docs            # 存放文档
  - test            # 测试组件
`);return(v,t)=>{const o=r("FuQuote"),c=r("FuLineCode"),n=r("FuCode");return g(),d("div",y,[t[2]||(t[2]=s("h1",null,"Vue",-1)),e(o,{content:"Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。"}),t[3]||(t[3]=s("h2",null,"一、基础",-1)),t[4]||(t[4]=s("h2",null,"二、组件封装",-1)),s("h3",null,[t[0]||(t[0]=p("2.1 搭建 ",-1)),e(c,{code:"monorepo"}),t[1]||(t[1]=p(" 环境",-1))]),e(o,{content:"使用pnpm安装包速度快，磁盘利用率高效；使用pnpm可以快速建立monorepo。因此，这里我们可以使用pnpm来实现monorepo环境"}),e(n,{language:"shell",code:u.value},null,8,["code"]),e(o,{content:"使用pnpm必须要建立.npmrc文件，shamefully-hoist=true, 否则安装的模块无法放置到node_modules目录下"}),e(n,{language:"shell",code:"shamefully-hoist=true"}),e(o,{content:"初始化TypeScript配置"}),e(n,{language:"shell",code:"pnpm tsc --init"}),e(n,{language:"shell",code:a.value},null,8,["code"]),e(o,{content:"在项目根目录下创建pnpm-workspace.yaml文件"}),e(n,{language:"yaml",code:i.value},null,8,["code"]),t[5]||(t[5]=s("h3",null,"2.2 创建组件测试环境",-1)),e(n,{language:"shell",code:"pnpm create vite play --template vue-ts"}),e(o,{content:"提供TypeScript声明文件typings/vue-shim.d.ts"})])}}});export{S as default};
