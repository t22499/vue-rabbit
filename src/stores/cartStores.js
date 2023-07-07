import { defineStore } from "pinia";
import {ref} from 'vue'


export const useCartStore = defineStore('cart',()=>{
  //定义store
  const cartList = ref([])
  const addCart = (goods)=>{
    // console.log(goods)
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

  //删除购物车
  const delCart = (skuId)=>{
    const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
    console.log(idx)
    cartList.value.splice(idx, 1)
    console.log(cartList.value)
  }
  return{
    cartList,
    addCart,
    delCart
  }
},{
  persist: true
})