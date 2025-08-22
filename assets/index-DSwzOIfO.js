import{_ as r}from"./index.vue_vue_type_style_index_0_lang-Y4iiqUvx.js";import{d as n,r as a,c as t,e as o,a as c,o as l}from"./index-BYuAvofs.js";const d={class:"typescript"},f=n({__name:"index",setup(p){const s=a(`
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
`);return(i,e)=>(l(),t("div",d,[e[0]||(e[0]=o("h2",{class:"flex"},"TypeScript",-1)),e[1]||(e[1]=o("h3",{class:"flex"},"不可变类型",-1)),c(r,{language:"ts",code:s.value},null,8,["code"])]))}});export{f as default};
