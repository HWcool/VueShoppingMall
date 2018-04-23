<template>
  <div class="container">
    <van-row>
      <Searchbar></Searchbar>
      <Footer></Footer>
    </van-row>
  </div>
</template>

<script>
import Searchbar from './Search-bar'
import Footer from './Footer'
  export default {
   components:{
     Searchbar,
     Footer,
   }
  }
</script>

<style scoped>

</style>