<template>
  <div>
    <SearchBar></SearchBar>
    <div class="header-list">
      <van-tabs v-model="active">
        <van-tab class="item" v-for="(item,index) in headerData" :title="item" :key="index">
         {{ item }}
        </van-tab>
      </van-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import SearchBar from '@/component/SearchBar'
  import Footer from '@/component/Footer'
  export default {
    components:{SearchBar,Footer},
    data() {
      return {
        headerData : ['新鲜水果','中外名酒','营养奶品','食品饮料','个人护理'],
        active: 0
      }
    },
  }
</script>

<style scoped>
.header-list {
  padding-top: 1.1rem;
  font-size: 14px;
  color:#666
}
</style>