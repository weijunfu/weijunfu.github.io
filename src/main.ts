import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style/fu.scss';
import './assets/style/glob.scss';
import './assets/style/md.scss';
import './assets/style/ani.scss';

// icon
import 'remixicon/fonts/remixicon.css';

import App from './App.vue'
import Router from './router/index'

const app = createApp(App)

const pinia = createPinia();

app.use(Router).use(pinia)

app.mount('#app')
