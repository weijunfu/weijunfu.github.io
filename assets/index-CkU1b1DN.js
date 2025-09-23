import{d as h,r as o,c as b,e,h as x,a as l,b as a,o as w,_ as y}from"./index-DyJv5417.js";const k={class:"css-box"},C={class:"reflection"},N={class:"reflection-code ml-1 w-full"},$={class:"reflection"},H={class:"reflection-code ml-1 w-full"},B={class:"reflection"},S={class:"reflection-code ml-1 w-full"},V={class:"flex flex-row"},_=h({__name:"index",setup(I){const n=o(`
<div id="reflection1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 2">
</div>
`),c=o(`
#reflection1 {
    position: relative;
    height: 38rem;
    img {
        &:nth-child(2) {
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: bottom center;
            transform: scaleY(-1);  // 垂直翻转
            mask-image: linear-gradient(to top, rgba(0,0,0,.5), transparent 80%, transparent);
        }
    }
}
`),f=o(`
<div id="reflection2">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影2.伪元素">
</div>
`),p=o(`
#reflection2 {
    position: relative;
    height: 38rem;
    width: 25rem;
    img {
        display: block;
    }

    &::after {
        content: '';
        position: absolute;
        top: 18.75rem;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(-1);  // 垂直翻转
        opacity: .3;
        background: linear-gradient(to bottom, rgba(255,255,255,.5), rgba(255,255,255,0)),
            url('https://picsum.photos/id/368/400/300') no-repeat center bottom;
    }
}
`),v=o(`
<div id="reflection3">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影3.box-reflect">
</div>
`),m=o(`
#reflection3 {
    height: 38rem;
    width: 25rem;
    position: relative;

    img {
        width: 100%;
        display: block;
        -webkit-box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
        box-reflect: below 0 linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255, .5));
    }
}
`),u=o(`
<ul class="flex flex-row">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
`),d=o(0),g=o([{id:1,language:"css",code:`
// 第一个li
li:first-of-type {
    border-color: orange;
}
`},{id:3,language:"css",code:`
// 第二个li
li:nth-of-type(2) {
    border-color: blue;
}
`},{id:4,language:"css",code:`
// 第三个li
li:nth-last-of-type(2) {
    border-color: red;
}
`},{id:2,language:"css",code:`
// 最后一个li
li:last-of-type {
    border-color: blanchedalmond;
}
`}]);function s(r){d.value=r}return(r,t)=>(w(),b("div",k,[t[7]||(t[7]=e("h2",{class:"flex flex-row"},"倒影实现方案",-1)),t[8]||(t[8]=e("h3",{class:"flex flex-row"},"1.复制元素",-1)),e("div",C,[t[4]||(t[4]=e("div",{id:"reflection1"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 1"}),e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 2"})],-1)),e("div",N,[l(a,{language:"html",code:n.value},null,8,["code"]),l(a,{language:"css",code:c.value},null,8,["code"])])]),t[9]||(t[9]=e("h3",{class:"flex flex-row"},"2.伪元素",-1)),e("div",$,[t[5]||(t[5]=e("div",{id:"reflection2"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影2.伪元素"})],-1)),e("div",H,[l(a,{language:"html",code:f.value},null,8,["code"]),l(a,{language:"css",code:p.value},null,8,["code"])])]),t[10]||(t[10]=e("h3",{class:"flex flex-row"},"3. box-reflect",-1)),e("div",B,[t[6]||(t[6]=e("div",{id:"reflection3"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影3.box-reflect"})],-1)),e("div",S,[l(a,{language:"html",code:v.value},null,8,["code"]),l(a,{language:"css",code:m.value},null,8,["code"])])]),t[11]||(t[11]=x('<h2 class="flex flex-row" data-v-40efa338>伪选择器</h2><table data-v-40efa338><thead data-v-40efa338><tr data-v-40efa338><th data-v-40efa338>伪元素</th><th data-v-40efa338>说明</th></tr></thead><tbody data-v-40efa338><tr data-v-40efa338><td data-v-40efa338><code data-v-40efa338>:first-of-type</code></td><td data-v-40efa338>选择第一个元素</td></tr><tr data-v-40efa338><td data-v-40efa338><code data-v-40efa338>:last-of-type</code></td><td data-v-40efa338>选择最后一个元素</td></tr><tr data-v-40efa338><td data-v-40efa338><code data-v-40efa338>:nth-of-type</code></td><td data-v-40efa338>从正序开始选择第N个元素</td></tr><tr data-v-40efa338><td data-v-40efa338><code data-v-40efa338>:nth-last-of-type</code></td><td data-v-40efa338>从倒序开始选择第N个元素</td></tr></tbody></table><h3 class="flex flex-row" data-v-40efa338>示例</h3>',3)),e("ul",V,[e("li",{onClick:t[0]||(t[0]=i=>s(0))}),e("li",{onClick:t[1]||(t[1]=i=>s(1))}),e("li",{onClick:t[2]||(t[2]=i=>s(2))}),e("li",{onClick:t[3]||(t[3]=i=>s(3))})]),t[12]||(t[12]=e("h3",{class:"flex flex-row"},"HTML代码",-1)),l(a,{language:"html",code:u.value},null,8,["code"]),t[13]||(t[13]=e("h3",{class:"flex flex-row"},"CSS代码",-1)),l(a,{language:"css",code:g.value[d.value].code},null,8,["code"])]))}}),L=y(_,[["__scopeId","data-v-40efa338"]]);export{L as default};
