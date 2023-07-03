<script setup>
  import LayoutHerder from "./components/LayoutHerder.vue";
  import LayoutNav from "./components/LayoutNav.vue";
  import LayoutFooter from "./components/LayoutFooter.vue";
  import LayoutFixed from './components/LayoutFixed.vue'

  //触发获取导航列表的action
  import {useCategoryStore } from '@/stores/category'
  import { onMounted } from "vue";
  const categoryStore = useCategoryStore()
  onMounted(()=>{
    categoryStore.getCategory()
  })
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHerder></LayoutHerder>
  <!-- 二级路由出口 -->
  <!-- 添加key值，破坏复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath"></RouterView> -->
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<style>

</style>