import{d as y,r as a,c as T,h as f,e as t,a as l,f as s,g as r,o as j,_ as x}from"./index-DyJv5417.js";const b={class:"typescript"},J=y({__name:"index",setup(E){const u=a(`
interface Person {
    name: string;
    age: number;
    ext: {
        job: string;
    }
}

const user: Readonly<Person> = {
    name: '张三',
    age: 18,
    ext: {
        job: '程序员'
    }
}

user.age = 19;      // err

user.ext.job = '教师';  // ok

// 自定义只读
type DeepReadonly<T> = {
    readonly [P in keyof T] : T[P] extends object ? DeepReadonly<T[P]> : T[P]
}


const user2: DeepReadonly<Person> = {
    name: '李四',
    age: 20,
    ext: {
        job: '演员'
    }
}

user2.age = 28;          // err

user2.ext.job = '导演';  // err
`),i=a(`
let msg = 'Hello World'
msg()   // Uncaught TypeError: msg is not a function
`),p=a(`
const str = Date.now() % 2 ? '奇数' : '偶数'
if(str !== '奇数') {
    console.log('Hello')
} else if(str === '偶数') {
    console.log('World')
}
`),c=a(`
const obj = { width: 10, height: 15 }
const area = obj.width * obj.hegiht     // hegiht 拼写错误，js并不直接报错，且值为NaN
`),g=a(`
// demo.ts
const msg = 'Hello World!'
msg.toUperCase()        // // Uncaught TypeError: msg.toUperCase is not a function
`),v=a(`
const person = {
    name: 'ijunfu',
    age: 18
};
console.log('name=' + person.name);
`),m=a(`
let name: string = 'ijunfu';
let age: number = 18;
let flag: boolean = false;

function add(x: number, y: number): number {
    return x + y;
}
`),S=a(`
let male: 'Male';       // male的值只能是Male
let female: 'Female';   // female的值只能是Female
`);return(F,e)=>{const n=s("FuCode"),o=s("FuQuote"),d=s("FuNote");return j(),T("div",b,[e[11]||(e[11]=f('<h2 class="flex" data-v-27c56a91>TypeScript</h2><h3 data-v-27c56a91>一、简介</h3><ul data-v-27c56a91><li data-v-27c56a91>TypeScript由微软开发，是基于JavaScript的一个扩展语言。</li><li data-v-27c56a91>TypeScript包含了JavaScript的所有内容，即TypeScript是JavaScript的超集。</li><li data-v-27c56a91>TypeScript增加了：静态类型检查、接口、泛型等很多现代开发特性，因此更适合大型项目的开发。</li><li data-v-27c56a91>TypeScript需要编译为JavaScript，然后交给浏览器或其他JavaScript运行环境执行。</li></ul><h3 data-v-27c56a91>二、为何需要TypeScript</h3><h4 data-v-27c56a91>2.1 今非昔比的 JavaScript</h4><ul data-v-27c56a91><li data-v-27c56a91>JavaScript诞生时的定位是浏览器脚本语言，用于在网页中嵌入一些简单的逻辑，而且代码量很少。</li><li data-v-27c56a91>随着时间的推移，JavaScript越来越流行，到如今JavaScript已经可以全栈编程了。</li><li data-v-27c56a91>现如今的JavaScript应用场景比当年丰富的多，代码量也比当年大很多，随便一个JavaScript项目的代码量，可以轻松的达到几万行，甚至十几万行！</li><li data-v-27c56a91>然而JavaScript当前“出生简陋”，没考虑到如今的应用场景和代码量，逐渐的就出现了很多困扰。</li></ul><h4 data-v-27c56a91>2.2 JavaScript中的困扰</h4>',7)),t("dl",null,[e[0]||(e[0]=t("dt",null,"1. 不清不楚的数据类型",-1)),t("dd",null,[l(n,{language:"js",code:i.value},null,8,["code"])]),e[1]||(e[1]=t("dt",null,"2. 有漏洞的逻辑",-1)),t("dd",null,[l(n,{language:"js",code:p.value},null,8,["code"])]),e[2]||(e[2]=t("dt",null,"3. 访问不存在的属性",-1)),t("dd",null,[l(n,{language:"js",code:c.value},null,8,["code"])]),e[3]||(e[3]=t("dt",null,"4. 低级的拼写错误",-1)),t("dd",null,[l(n,{language:"js",code:g.value},null,8,["code"])])]),e[12]||(e[12]=t("h4",null,"2.3 静态类型检查",-1)),e[13]||(e[13]=t("ul",null,[t("li",null,[r("在代码运行前进行检查，发现代码的错误或不合理之处，减小运行时异常的出现几率，此种检查叫做"),t("b",null,"静态类型检查"),r("，TypeScript核心就是静态类型检查，简而言之，就是"),t("b",null,"把运行时的错误前置")]),t("li",null,"同样的功能，TypeScript的代码量要大于JavaScript，但由于TypeScript的代码结构更加清晰，在后期代码的维护中TypeScript却远胜于JavaScript。")],-1)),e[14]||(e[14]=t("h3",null,"三、编译TypeScript",-1)),l(o,{content:"浏览器不能直接运行TypeScript代码，需要编译为JavaScript，再交由浏览器解析并运行"}),e[15]||(e[15]=t("h4",null,"3.1 命令行编译",-1)),l(o,{content:"要把ts文件编译为js文件，需要配置TypeScript的编码环境，步骤如下："}),t("dl",null,[e[4]||(e[4]=t("dt",null,"第一步：创建一个demo.ts文件，例如：",-1)),t("dd",null,[l(n,{language:"ts",code:v.value},null,8,["code"])]),e[5]||(e[5]=t("dt",null,"第二步：全局安装TypeScript",-1)),t("dd",null,[l(n,{language:"sheel",code:"npm i typescript -g"})]),e[6]||(e[6]=t("dt",null,"第三步：使用命令编译ts",-1)),t("dd",null,[l(n,{language:"ts",code:"tsc demo.ts"})])]),e[16]||(e[16]=t("h4",null,"3.2 自动化编译",-1)),t("dl",null,[e[8]||(e[8]=t("dt",null,"第一步：创建TypeScript编译控制文件",-1)),t("dd",null,[l(n,{language:"ts",code:"tsc --init"}),e[7]||(e[7]=t("ul",null,[t("li",{class:"text-gray-400"},"工程中会生成一个tsconfig.json配置文件，其中包含着很多编译时的配置。"),t("li",{class:"text-gray-400"},"观察发现，默认编译的JS版本是ES7，我们可以手动调整为其他版本。")],-1))]),e[9]||(e[9]=t("dt",null,"第二步：监视目录中的ts文件变化",-1)),t("dd",null,[l(n,{language:"ts",code:"tsc --watch"})]),e[10]||(e[10]=t("dt",null,"第三步：当编译出错时不生成js文件（优化）",-1)),t("dd",null,[l(n,{language:"ts",code:"tsc --noEmitOnError --watch"}),l(d,{content:"当然也可以修改tsconfig.json中的noEmitOnError配置"})])]),e[17]||(e[17]=t("h3",null,"四、类型声明",-1)),l(o,{content:"TypeScript使用冒号对变量或函数进行类型声明。"}),l(n,{language:"ts",code:m.value},null,8,["code"]),l(d,{content:"在冒号之后可以写字面量类型，不过在实际开发中用的并不多"}),l(n,{language:"ts",code:S.value},null,8,["code"]),e[18]||(e[18]=t("h3",{class:"flex"},"不可变类型",-1)),l(n,{language:"ts",code:u.value},null,8,["code"])])}}}),P=x(J,[["__scopeId","data-v-27c56a91"]]);export{P as default};
