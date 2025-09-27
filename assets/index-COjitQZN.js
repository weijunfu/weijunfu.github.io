import{d as v,c as d,h as b,o as r,_ as p,e,i as k,j as C,a as o,r as a,b as l}from"./index-BxWKbSig.js";const $={class:"fu-card"},N=v({__name:"index",props:{icon:String},setup(u){return(n,s)=>(r(),d("div",$,[...s[0]||(s[0]=[b('<div class="icon" data-v-589eb48a><i class="ri-pencil-ruler-2-line" data-v-589eb48a></i></div><div class="content" data-v-589eb48a><div class="text" data-v-589eb48a><h2 data-v-589eb48a>Design</h2><p data-v-589eb48a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><a href="#" data-v-589eb48a>Read More</a></div></div>',2)])]))}}),H=p(N,[["__scopeId","data-v-589eb48a"]]),I={class:"css-card"},S={class:"card-box flex flex-row flex-center"},B=v({__name:"index",setup(u){return(n,s)=>(r(),d("div",I,[s[0]||(s[0]=e("h2",null,"圆角卡片",-1)),e("div",S,[(r(),d(k,null,C(3,f=>o(H,{key:f})),64))])]))}}),L=p(B,[["__scopeId","data-v-a843ffa7"]]),V={class:"css-box"},F={class:"reflection"},M={class:"reflection-code ml-1 w-full"},Y={class:"reflection"},j={class:"reflection-code ml-1 w-full"},D={class:"reflection"},E={class:"reflection-code ml-1 w-full"},R={class:"flex flex-row"},T=v({__name:"index",setup(u){const n=a(`
<div id="reflection1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 2">
</div>
`),s=a(`
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
`),f=a(`
<div id="reflection2">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影2.伪元素">
</div>
`),h=a(`
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
`),x=a(`
<div id="reflection3">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影3.box-reflect">
</div>
`),_=a(`
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
`),w=a(`
<ul class="flex flex-row">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
`),m=a(0),y=a([{id:1,language:"css",code:`
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
`}]);function i(g){m.value=g}return(g,t)=>(r(),d("div",V,[t[7]||(t[7]=e("h2",null,"卡片",-1)),o(L),t[8]||(t[8]=e("h2",{class:"flex flex-row"},"倒影实现方案",-1)),t[9]||(t[9]=e("h3",{class:"flex flex-row"},"1.复制元素",-1)),e("div",F,[t[4]||(t[4]=e("div",{id:"reflection1"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 1"}),e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 2"})],-1)),e("div",M,[o(l,{language:"html",code:n.value},null,8,["code"]),o(l,{language:"css",code:s.value},null,8,["code"])])]),t[10]||(t[10]=e("h3",{class:"flex flex-row"},"2.伪元素",-1)),e("div",Y,[t[5]||(t[5]=e("div",{id:"reflection2"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影2.伪元素"})],-1)),e("div",j,[o(l,{language:"html",code:f.value},null,8,["code"]),o(l,{language:"css",code:h.value},null,8,["code"])])]),t[11]||(t[11]=e("h3",{class:"flex flex-row"},"3. box-reflect",-1)),e("div",D,[t[6]||(t[6]=e("div",{id:"reflection3"},[e("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影3.box-reflect"})],-1)),e("div",E,[o(l,{language:"html",code:x.value},null,8,["code"]),o(l,{language:"css",code:_.value},null,8,["code"])])]),t[12]||(t[12]=b('<h2 class="flex flex-row" data-v-52ff0ea3>伪选择器</h2><table data-v-52ff0ea3><thead data-v-52ff0ea3><tr data-v-52ff0ea3><th data-v-52ff0ea3>伪元素</th><th data-v-52ff0ea3>说明</th></tr></thead><tbody data-v-52ff0ea3><tr data-v-52ff0ea3><td data-v-52ff0ea3><code data-v-52ff0ea3>:first-of-type</code></td><td data-v-52ff0ea3>选择第一个元素</td></tr><tr data-v-52ff0ea3><td data-v-52ff0ea3><code data-v-52ff0ea3>:last-of-type</code></td><td data-v-52ff0ea3>选择最后一个元素</td></tr><tr data-v-52ff0ea3><td data-v-52ff0ea3><code data-v-52ff0ea3>:nth-of-type</code></td><td data-v-52ff0ea3>从正序开始选择第N个元素</td></tr><tr data-v-52ff0ea3><td data-v-52ff0ea3><code data-v-52ff0ea3>:nth-last-of-type</code></td><td data-v-52ff0ea3>从倒序开始选择第N个元素</td></tr></tbody></table><h3 class="flex flex-row" data-v-52ff0ea3>示例</h3>',3)),e("ul",R,[e("li",{onClick:t[0]||(t[0]=c=>i(0))}),e("li",{onClick:t[1]||(t[1]=c=>i(1))}),e("li",{onClick:t[2]||(t[2]=c=>i(2))}),e("li",{onClick:t[3]||(t[3]=c=>i(3))})]),t[13]||(t[13]=e("h3",{class:"flex flex-row"},"HTML代码",-1)),o(l,{language:"html",code:w.value},null,8,["code"]),t[14]||(t[14]=e("h3",{class:"flex flex-row"},"CSS代码",-1)),o(l,{language:"css",code:y.value[m.value].code},null,8,["code"])]))}}),A=p(T,[["__scopeId","data-v-52ff0ea3"]]);export{A as default};
