import { createApp } from 'vue'

import './assets/style/fu.scss'

import App from './App.vue'
import Router from './router/index'

import ToggleSubmenu from './directives/toggleSubmenu'

const app = createApp(App)

app.use(Router)

app.directive('toggle-submenu', ToggleSubmenu)

app.mount('#app')
