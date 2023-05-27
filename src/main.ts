import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import 'vant/lib/index.css' // 引入Vant样式库样式。

const app = createApp(App)

app.use(createPinia())
// app.use(router)

// 4-2
app.mount('#app')
