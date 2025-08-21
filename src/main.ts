import { createApp } from 'vue'

import './assets/style/fu.scss'

// main.js 或 main.ts
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css' // 你可以选择其他主题，如 prism-tomorrow.css
// 如果需要支持更多语言，可以按需引入
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/line-numbers/prism-line-numbers' // 如果需要行号插件

import App from './App.vue'
import Router from './router/index'

import ToggleSubmenu from './directives/toggleSubmenu'

const app = createApp(App)

app.use(Router)

app.directive('toggle-submenu', ToggleSubmenu)

app.mount('#app')
