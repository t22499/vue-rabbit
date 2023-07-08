//管理用户数据
import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from '@/apis/user'
import {useCartStore} from './cartStores'
import {mergeCartAPI} from '@/apis/cart'

export  const useUserStore = defineStore('user',()=>{
  const cartStore = useCartStore()

  //定义管理数据的state
  const userInfo = ref({})
  //定义获取接口数据的action函数
  const getUserInfo = async ({account,password}) =>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result

    //合并购物车数据
    mergeCartAPI(cartStore.cartList.map(item=>{
      return{
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateNewList()
  }

  //清除用户信息数据
  const clearUserInfo = ()=>{
    userInfo.value = {}
    //清除购物车中的action
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true,
})