import { ref} from 'vue'
import {getCategoryApi} from '@/apis/layout'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  //导航list列表
  const categoryList = ref([])
  //获取导航数据
  const getCategory = async()=>{
  const res = await getCategoryApi()
  categoryList.value = res.result
}

  return {
     getCategory,
     categoryList 
  }
})
