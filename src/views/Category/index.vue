<script setup>
import {getCategoryAPI} from '@/apis/category'
import { ref ,onMounted} from 'vue';
import { useRoute } from 'vue-router';
//数据请求
const categoryData = ref({})
//获取路由id
const route = useRoute()
const getCategory = async ()=>{
  const res = await getCategoryAPI(route.params.id)
  console.log(res)
  categoryData.value = res.result
}
onMounted(()=>getCategory())
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
// 部分代码省略
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>