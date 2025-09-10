import{d as i,r as l,c as b,f as v,e as t,a as s,b as f,o as u,_ as x}from"./index-uU1kbKRw.js";const p={class:"css-box"},g={class:"flex flex-row"},m=i({__name:"index",setup(y){const n=l(`
<ul class="flex flex-row">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
`),o=l(0),r=l([{id:1,language:"css",code:`
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
`}]);function e(c){o.value=c}return(c,a)=>(u(),b("div",p,[a[4]||(a[4]=v('<h2 class="flex flex-row" data-v-0b20faac>伪选择器</h2><table data-v-0b20faac><thead data-v-0b20faac><tr data-v-0b20faac><th data-v-0b20faac>伪元素</th><th data-v-0b20faac>说明</th></tr></thead><tbody data-v-0b20faac><tr data-v-0b20faac><td data-v-0b20faac><code data-v-0b20faac>:first-of-type</code></td><td data-v-0b20faac>选择第一个元素</td></tr><tr data-v-0b20faac><td data-v-0b20faac><code data-v-0b20faac>:last-of-type</code></td><td data-v-0b20faac>选择最后一个元素</td></tr><tr data-v-0b20faac><td data-v-0b20faac><code data-v-0b20faac>:nth-of-type</code></td><td data-v-0b20faac>从正序开始选择第N个元素</td></tr><tr data-v-0b20faac><td data-v-0b20faac><code data-v-0b20faac>:nth-last-of-type</code></td><td data-v-0b20faac>从倒序开始选择第N个元素</td></tr></tbody></table><h3 class="flex flex-row" data-v-0b20faac>示例</h3>',3)),t("ul",g,[t("li",{onClick:a[0]||(a[0]=d=>e(0))}),t("li",{onClick:a[1]||(a[1]=d=>e(1))}),t("li",{onClick:a[2]||(a[2]=d=>e(2))}),t("li",{onClick:a[3]||(a[3]=d=>e(3))})]),a[5]||(a[5]=t("h3",{class:"flex flex-row"},"HTML代码",-1)),s(f,{language:"html",code:n.value},null,8,["code"]),a[6]||(a[6]=t("h3",{class:"flex flex-row"},"CSS代码",-1)),s(f,{language:"css",code:r.value[o.value].code},null,8,["code"])]))}}),k=x(m,[["__scopeId","data-v-0b20faac"]]);export{k as default};
