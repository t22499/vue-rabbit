import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';
import {getCategoryAPI} from '@/apis/category'
import { onBeforeRouteUpdate } from 'vue-router';
//分类数据
export function useCategory(){
  const categoryData = ref([])
//获取路由id
const route = useRoute()
//getCategory设置默认参数
const getCategory = async (id = route.params.id)=>{
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}
onMounted(()=>getCategory())

//路由参数发生变化时 可以把分类数据接口重新发送
onBeforeRouteUpdate((to)=>{
  getCategory(to.params.id)
})
  return {
    categoryData
  }
}
