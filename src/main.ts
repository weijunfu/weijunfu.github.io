import { createApp } from 'vue'

import './assets/style/fu.scss';
import './assets/style/glob.scss';
import '@fu-css/fu-css/dist/index.min.css';

import '@fu-css/fu-size/style.min.css';
import '@fu-css/fu-scrollbar/style.min.css';
import '@fu-css/fu-table-theme/style.min.css';

import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // 你可以选择其他主题，如 prism-tomorrow.css
// 如果需要支持更多语言，可以按需引入
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css' // 如果需要行号插件

import 'prismjs/plugins/toolbar/prism-toolbar'          // 工具栏
import 'prismjs/plugins/toolbar/prism-toolbar.css'      // 工具栏样式
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard' // 复制功能

import App from './App.vue'
import Router from './router/index'

// 组件
import FuCode from './components/FuCode/index.vue';
import FuQuote from './components/FuQuote/index.vue';
import FuNote from './components/FuNote/index.vue';

// 指令
import ToggleSubmenu from './directives/toggleSubmenu'

const app = createApp(App)

app.use(Router)

app.component('FuCode', FuCode)
    .component('FuNote', FuNote)
    .component('FuQuote', FuQuote)

app.directive('toggle-submenu', ToggleSubmenu)

app.mount('#app')
