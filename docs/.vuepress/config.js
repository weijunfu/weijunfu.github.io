

const  WebItems = [
  {text:'基础', link:'/Web', items:[
    {text:'HTML', link: '/Web/html/'},
    {text:'CSS', link: '/Web/css/'},
    {text:'JavaScript', link: '/Web/js/'}
  ]},
  {
    text:'UI',
    items:[
      {text:'Bootstrap', link:'/Web/bootstrap/'},
      {text:'layui', link:'/Web/layui/'},
      {text:'Element UI', link:'/Web/elementui/'},
      {text:'Ant Design Vue', link:'/Web/adv/'}
    ]
  },
  {text:'Vue', items:[
    {text:'Vue 2.x', link: '/Web/vue2'},
    {text:'Vue 3.x', link: '/Web/vue3'}
  ]},
  {text:'小程序', link:'/Web/mini/',items:[
    {text:'微信小程序', link:'/Web/mini/wechat/'}
  ]}
]

const JavaItems = [
  {
    text:'基础', 
    link: '/Java/'
  },
  {
    text:'数据库',
    link:'/Java/db/',
    items: [
      {text:'MySQL', link:'/Java/db/mysql/'},
      {text:'Redis', link: '/Java/db/redis/'}
    ]
  },
  {
    text:'框架',
    items: [
      {text:'Struts', link:'/Java/struts/'},
      {text:'Spring', link:'/Java/spring/'},
      {text:'Hibernate', link:'/Java/hibernate/'},
      {text:'MyBatis', link:'/Java/mybatis/'}
    ]
  },
  {
    text:'提升',items:[
      {text: 'SpringBoot', link:'/Java/springboot/'},
      {text: 'Docker', link:'/Java/docker/'},
    ]
  }
  
]

module.exports = {
  title: "X Home",
    description: "X Home",
    lastUpdated: '更新时间',
    head:[
      ['link', {rel:'icon', href: '/favicon.ico'}],
      ['link', {name: 'author', content:'ijunfu'}],
      ['link', {name:'keywords', content:'X,Home,Java,Web'}]
    ],
  themeConfig: {
    base: '/',
    // logo: '/assets/img/logo.png',
    // plugins: [
    //   [
    //     '@vuepress/last-updated',
    //     {
    //       transformer: (timestamp, lang) => {
    //         const dayjs = require('dayjs')
           
    //         return dayjs(new Date(), 'YYYY-MM-DD HH:mm')
    //       }
    //     }
    //   ]
    // ],
    nav: [
      { text: '首页', link: '/' },
      { text: 'Web', link: '/Web/', items: WebItems },
      { text: 'Java', link: '/Java/' , items: JavaItems }
    ],

    sidebar:  [
      '/'
    ]
  },
  plugins: ['@vuepress/back-to-top']
}