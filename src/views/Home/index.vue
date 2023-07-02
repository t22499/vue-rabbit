<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'

import HomePanel from '@/views/Home/components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- //测试 -->
  <HomePanel title="新鲜好物" subTitle="新鲜好玩">
    <div>我是新鲜好物的插槽</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="好的商品">
    <div>我是新鲜好物的插槽</div>
  </HomePanel>
</template>