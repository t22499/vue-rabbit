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
  return{
    cartList,
    addCart
  }
},{
  persist: true
})