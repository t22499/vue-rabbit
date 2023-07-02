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
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<style>

</style>