import { defineStore } from "pinia";
import {computed, ref} from 'vue'


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
    cartList.value.splice(idx, 1)
  }

  //计算属性
  //总数 count之和
  const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
  //总价 count * price之和
  const allPrice = computed(()=>cartList.value.reduce((a,c)=>a+c.count * c.price,0))
  return{
    allCount,
    allPrice,
    cartList,
    addCart,
    delCart
  }
},{
  persist: true
})