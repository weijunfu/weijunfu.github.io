import{d as p,r as s,c as v,e as o,a as n,f as u,o as m,_ as f}from"./index-BxWKbSig.js";const g={class:"javascrip"},F=p({__name:"index",setup(j){const d=s(`
eval('console.log("ijunfu")')
`),a=s(`
const code = 'console.log("ijunfu")'
setTimeout(code)
`),i=s(`
const code = 'console.log("ijunfu")'
const script = document.createElement('script')
script.innerHTML = code
document.body.appendChild(script)
`),r=s(`
const code = 'console.log("ijunfu")';
new Function(code)();
`);return(x,e)=>{const t=u("FuQuote"),l=u("FuCode"),c=u("FuNote");return m(),v("div",g,[e[4]||(e[4]=o("h1",null,"JavaScript",-1)),e[5]||(e[5]=o("h2",null,"动态执行JavaScript方案",-1)),o("dl",null,[e[0]||(e[0]=o("dt",null,"方案一：eval",-1)),o("dd",null,[n(t,{content:"eval() 是 JavaScript 内置的全局函数，它接受一个字符串参数，并将其作为 JavaScript 代码在当前执行上下文中执行。"}),n(l,{language:"js",code:d.value},null,8,["code"]),n(c,{content:"注意：如果 eval 是通过别名调用（如 let e = eval; e('...')），则它会在全局作用域中执行，而非当前作用域。"})]),e[1]||(e[1]=o("dt",null,"方案二：setTimeout",-1)),o("dd",null,[n(t,{content:"与eval 不同，setTimeout 字符串形式的代码总是在全局作用域中执行"}),n(l,{language:"js",code:a.value},null,8,["code"]),n(c,{content:"强烈不推荐使用，MDN 明确建议只传入函数"})]),e[2]||(e[2]=o("dt",null,"方案三：script",-1)),o("dd",null,[n(t,{content:"动态 <script> 标签中的代码在全局作用域中执行，等同于在 HTML 中直接写 <script>"}),n(l,{language:"js",code:i.value},null,8,["code"]),n(c,{content:"若插入用户提供的代码，必须严格过滤或使用 nonce/CSP"})]),e[3]||(e[3]=o("dt",null,"✨方案四：Function",-1)),o("dd",null,[n(t,{content:"Function 创建的函数始终在全局作用域中执行，无法访问外层函数的局部变量"}),n(l,{language:"js",code:r.value},null,8,["code"]),n(c,{content:"若必须动态执行，优先使用 Function 而非 eval"})])])])}}}),C=f(F,[["__scopeId","data-v-86103cee"]]);export{C as default};
