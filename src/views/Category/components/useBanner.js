import {getBannerAPI} from "@/apis/home"
import { ref,onMounted } from "vue"
//获取banner轮播图
export function useBanner(){
  const bannerList = ref([])

const getBanner = async()=>{
  const res = await getBannerAPI({
    distributionSite:'2'
  })
  bannerList.value = res.result
}

onMounted(()=>{
  getBanner()
})
  return {
    bannerList
  }
}