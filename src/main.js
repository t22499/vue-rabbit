import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入懒加载指令并注册
import {lazyPlugin} from "@/directives/index"

//引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
//注册懒加载
app.use(lazyPlugin)

