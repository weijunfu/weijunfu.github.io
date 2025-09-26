import{d as p,r as s,c as u,e,a as d,h as r,f as a,o as m}from"./index-1BSDNuUt.js";const i={class:"box pnpm"},g=p({__name:"index",setup(P){const c=s(`
# pnpm-workspace.yaml
packages:
  - 'packages/**'   # 存放编写的组件
  - docs            # 存放文档
  - test            # 测试组件
`),l=s(`

`);return(M,o)=>{const t=a("FuQuote"),n=a("FuCode");return m(),u("div",i,[o[0]||(o[0]=e("h1",{class:"title-size"},"PNPM",-1)),d(t,{content:"PNPM是一个快速的、节省磁盘空间的包管理工具"}),o[1]||(o[1]=r('<dl><dt>优势</dt><dd>快速：PNPM会将包缓存到本地，减少二次安装需要的时间</dd><dd>节省空间：PNPM会将包软链到项目本地，不需要反复安装</dd></dl><h2 class="subtitle-size">多环境管控 --- Monorepo</h2><dl><dt>Monorepo优势</dt><dd>便于管理多个互相依赖的项目</dd><dd>便于团队共享知识库</dd><dd>减少项目管理的成本</dd><dt>Monorepo劣势</dt><dd>版本管理混乱</dd><dd>代码质量参差不齐，且互相影响</dd><dd>技术栈升级困难</dd><dd>难以进行权限管理</dd></dl><dl><dt>Monorepo使用场景</dt><dd><dl><dt>充分条件</dt><dd>多个项目互相依赖</dd><dd>功能、版本之间存在强关联</dd><dd>项目中存在多个编译入口，且构建条件存在差异</dd><dt>次要条件</dt><dd>希望在团队中共享知识</dd><dd>降低项目管理的成本</dd></dl></dd></dl>',4)),d(t,{content:"PNPM是目前管理Monorepo的最佳选择"}),o[2]||(o[2]=e("dl",null,[e("dt",null,"推荐PNPM的因素："),e("dd",null,"速度快"),e("dd",null,"磁盘占用低"),e("dd",null,"项目依赖彼此独立"),e("dd",null,"有各种命令方便操作")],-1)),d(t,{content:"1. 创建pnpm-workspace.yaml"}),d(n,{language:"yaml",code:c.value},null,8,["code"]),d(t,{content:"2. 项目目录"}),d(n,{language:"text",code:l.value},null,8,["code"]),d(t,{content:"3. 项目之间引用"}),d(n,{language:"text",code:l.value},null,8,["code"])])}}});export{g as default};
