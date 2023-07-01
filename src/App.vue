<script setup>
</script>

<template>
   <div class="app">
      <!-- 一级组件出口 -->
      <RouterView></RouterView>
      <div class="text">aaaaaa</div>
   </div>
</template>

<style scoped lang="scss">
.app{
   .text{
      color: $priceColor;
   }
}
</style>
