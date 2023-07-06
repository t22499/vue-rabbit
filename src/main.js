import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入懒加载指令并注册
import {lazyPlugin} from "@/directives/index"
//引入全局组件
import {componentsPlugin} from '@/components/index'
//引入初始化样式文件
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(app)
app.use(router)
app.mount('#app')
//注册懒加载
app.use(lazyPlugin)
app.use(componentsPlugin)
