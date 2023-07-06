//axios封装
import axios from "axios";
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import {useUserStore} from '@/stores/user'
import router from '@/router/index';

 
const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})
 



// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  //获取token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  
  //错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401token失效处理
  //清除本地数据
  //跳转登录页面
  if(e.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default httpInstance

