import{d as u,c as l,h as m,o as n,_ as c,e as t,i as y,j as C,a as d,r as s,b as a}from"./index-ArTwdy8q.js";const k={class:"fu-card"},I=u({__name:"index",props:{icon:String},setup(r){return(o,i)=>(n(),l("div",k,[...i[0]||(i[0]=[m('<div class="icon" data-v-589eb48a><i class="ri-pencil-ruler-2-line" data-v-589eb48a></i></div><div class="content" data-v-589eb48a><div class="text" data-v-589eb48a><h2 data-v-589eb48a>Design</h2><p data-v-589eb48a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><a href="#" data-v-589eb48a>Read More</a></div></div>',2)])]))}}),N=c(I,[["__scopeId","data-v-589eb48a"]]),L={class:"css-card"},H={class:"card-box flex flex-row flex-center"},S=u({__name:"index",setup(r){return(o,i)=>(n(),l("div",L,[i[0]||(i[0]=t("h2",null,"圆角卡片",-1)),t("div",H,[(n(),l(y,null,C(3,f=>d(N,{key:f})),64))])]))}}),B=c(S,[["__scopeId","data-v-a843ffa7"]]),M={},V={class:"css-animation"};function D(r,o){return n(),l("div",V,[...o[0]||(o[0]=[t("div",{class:"box-wrapper"},[t("div",{class:"box"},[t("div",{class:"loader"})])],-1)])])}const F=c(M,[["render",D],["__scopeId","data-v-df561ad9"]]),R={},Y={class:"loading-wrapper"};function j(r,o){return n(),l("div",Y,[...o[0]||(o[0]=[t("div",{class:"loading"},null,-1)])])}const A=c(R,[["render",j],["__scopeId","data-v-855a1c14"]]),E={},T={class:"card"};function q(r,o){return n(),l("div",T,[...o[0]||(o[0]=[m('<div class="face" data-v-b639620c><div class="content" data-v-b639620c><i class="ri-tools-line" data-v-b639620c></i><h3 data-v-b639620c>Design</h3></div></div><div class="face" data-v-b639620c><div class="content" data-v-b639620c><p data-v-b639620c>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae? </p><a href="#" data-v-b639620c>Read More</a></div></div>',2)])])}const z=c(E,[["render",q],["__scopeId","data-v-b639620c"]]),G={class:"css-box"},J={class:"animation"},K={class:"reflection"},O={class:"reflection-code ml-1 w-full"},P={class:"reflection"},Q={class:"reflection-code ml-1 w-full"},U={class:"reflection"},W={class:"reflection-code ml-1 w-full"},X={class:"flex flex-row"},Z=u({__name:"index",setup(r){const o=s(`
<div id="reflection1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 1">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影1.复制元素 2">
</div>
`),i=s(`
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
`),f=s(`
<div id="reflection2">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影2.伪元素">
</div>
`),h=s(`
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
`),x=s(`
<div id="reflection3">
    <img src="https://picsum.photos/id/368/400/300" alt="倒影3.box-reflect">
</div>
`),_=s(`
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
`),w=s(`
<ul class="flex flex-row">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
`),g=s(0),$=s([{id:1,language:"css",code:`
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
`}]);function v(b){g.value=b}return(b,e)=>(n(),l("div",G,[e[7]||(e[7]=t("h2",null,"动画",-1)),t("div",J,[d(F),d(A),d(z)]),e[8]||(e[8]=t("h2",null,"卡片",-1)),d(B),e[9]||(e[9]=t("h2",{class:"flex flex-row"},"倒影实现方案",-1)),e[10]||(e[10]=t("h3",{class:"flex flex-row"},"1.复制元素",-1)),t("div",K,[e[4]||(e[4]=t("div",{id:"reflection1"},[t("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 1"}),t("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影1.复制元素 2"})],-1)),t("div",O,[d(a,{language:"html",code:o.value},null,8,["code"]),d(a,{language:"css",code:i.value},null,8,["code"])])]),e[11]||(e[11]=t("h3",{class:"flex flex-row"},"2.伪元素",-1)),t("div",P,[e[5]||(e[5]=t("div",{id:"reflection2"},[t("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影2.伪元素"})],-1)),t("div",Q,[d(a,{language:"html",code:f.value},null,8,["code"]),d(a,{language:"css",code:h.value},null,8,["code"])])]),e[12]||(e[12]=t("h3",{class:"flex flex-row"},"3. box-reflect",-1)),t("div",U,[e[6]||(e[6]=t("div",{id:"reflection3"},[t("img",{src:"https://picsum.photos/id/368/400/300",alt:"倒影3.box-reflect"})],-1)),t("div",W,[d(a,{language:"html",code:x.value},null,8,["code"]),d(a,{language:"css",code:_.value},null,8,["code"])])]),e[13]||(e[13]=m('<h2 class="flex flex-row" data-v-ce48d367>伪选择器</h2><table data-v-ce48d367><thead data-v-ce48d367><tr data-v-ce48d367><th data-v-ce48d367>伪元素</th><th data-v-ce48d367>说明</th></tr></thead><tbody data-v-ce48d367><tr data-v-ce48d367><td data-v-ce48d367><code data-v-ce48d367>:first-of-type</code></td><td data-v-ce48d367>选择第一个元素</td></tr><tr data-v-ce48d367><td data-v-ce48d367><code data-v-ce48d367>:last-of-type</code></td><td data-v-ce48d367>选择最后一个元素</td></tr><tr data-v-ce48d367><td data-v-ce48d367><code data-v-ce48d367>:nth-of-type</code></td><td data-v-ce48d367>从正序开始选择第N个元素</td></tr><tr data-v-ce48d367><td data-v-ce48d367><code data-v-ce48d367>:nth-last-of-type</code></td><td data-v-ce48d367>从倒序开始选择第N个元素</td></tr></tbody></table><h3 class="flex flex-row" data-v-ce48d367>示例</h3>',3)),t("ul",X,[t("li",{onClick:e[0]||(e[0]=p=>v(0))}),t("li",{onClick:e[1]||(e[1]=p=>v(1))}),t("li",{onClick:e[2]||(e[2]=p=>v(2))}),t("li",{onClick:e[3]||(e[3]=p=>v(3))})]),e[14]||(e[14]=t("h3",{class:"flex flex-row"},"HTML代码",-1)),d(a,{language:"html",code:w.value},null,8,["code"]),e[15]||(e[15]=t("h3",{class:"flex flex-row"},"CSS代码",-1)),d(a,{language:"css",code:$.value[g.value].code},null,8,["code"])]))}}),dt=c(Z,[["__scopeId","data-v-ce48d367"]]);export{dt as default};
