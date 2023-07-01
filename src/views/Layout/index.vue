<script setup>
  import LayoutHerder from "./components/LayoutHerder.vue";
  import LayoutNav from "./components/LayoutNav.vue";
  import LayoutFooter from "./components/LayoutFooter.vue";
  import LayoutFixed from './components/LayoutFixed.vue'
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