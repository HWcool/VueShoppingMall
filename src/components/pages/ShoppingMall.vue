<template>
  <div class="container">
    <van-row>
      <Searchbar></Searchbar>
      <!-- Swiper -->
      <div class="swiper-area">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
            <img v-lazy = "banner.imageUrl" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <Footer></Footer>
    </van-row>
  </div>
</template>

<script>
import Searchbar from "./Search-bar";
import Footer from "./Footer";
export default {
  data() {
    return {
      bannerPicArray:[
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
    }
  },
  components: {
    Searchbar,
    Footer
  }
};
</script>

<style scoped>
.swiper-area{
  width: 20rem;
  clear: both;
  overflow: hidden;
}
</style>