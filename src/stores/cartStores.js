import { defineStore } from "pinia";
import {computed, ref} from 'vue'
import {useUserStore} from './user'
import {insertCartAPI,findNewCartListAPI,delCartAPI} from '@/apis/cart'

export const useCartStore = defineStore('cart',()=>{
  //获取用户的token
  const userStore = useUserStore()
  const isLogin = computed(()=>userStore.userInfo.token)

  //获取最新购物车列表
  const updateNewList = async ()=>{
    const res = await findNewCartListAPI()
    cartList.value  = res.result
  }
  
  //定义store
  const cartList = ref([])
  const addCart = async (goods)=>{
    const {skuId,count} = goods
    //根据token判断是否登录
    if(isLogin.value){
      //登录时调用接口
      //加入购物车
      await insertCartAPI({skuId,count})
      //获取最新列表数据
      updateNewList()
    }else{
      //本地购物车
      // 添加购物车操作
      const item = cartList.value.find((item)=>item.skuId === goods.skuId)
      if (item){
        //找到了就按照count数量添加
        item.count += goods.count
      }else{
        //没找到就直接添加
        cartList.value.push(goods)
      }
    }
  }

  //删除购物车
  const delCart = async (skuId)=>{
    if(isLogin.value){
      await delCartAPI([skuId])
      updateNewList()
    }else{
      const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
    
  }

  //清除购物车
  const clearCart = () => {
    cartList.value = []
  }

  //单选功能
  const singleCheck = (skuId,selected)=>{
  const item = cartList.value.find((item) => skuId === item.skuId)
    item.selected = selected
  }
  //全选功能
  const allCheck = (selected)=>{
    cartList.value.forEach(item =>item.selected = selected)
  }

  //计算属性
  //总数 count之和
  const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  //总价 count * price之和
  const allPrice = computed(()=>cartList.value.reduce((a,c)=>a+c.count * c.price,0))

  //已选总数
  const selectedCount = computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count,0))
  const selectedPrice = computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count * c.price,0))
  //已选总价

   //全选功能
   const isAll = computed(()=>cartList.value.every(item=>item.selected))
  return{
    isLogin,
    singleCheck,
    allCheck,
    clearCart,
    updateNewList,
    isAll,
    allCount,
    allPrice,
    selectedCount,
    selectedPrice,
    cartList,
    addCart,
    delCart
  }
},{
  persist: true
})