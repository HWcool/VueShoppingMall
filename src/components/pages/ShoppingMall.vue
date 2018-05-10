<template>
  <div class="container">
    <van-row>
      <Searchbar></Searchbar>
      <!-- Swiper 轮播 -->
      <div class="swiper-area">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
            <img v-lazy = "banner.imageUrl" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品列表 -->
      <van-row class="product-container">
        <div class="product-list">
          <a href="#">
            <img src="" alt="">
            <div>新鲜水果</div>
          </a>
          <a href="#">
            <img src="" alt="">
            <div>中外名酒</div>
          </a>
          <a href="#">
            <img src="" alt="">
            <div>营养奶品</div>
          </a>
          <a href="#">
            <img src="" alt="">
            <div>食品饮料</div>
          </a>
          <a href="#">
            <img src="" alt="">
            <div>个人护理</div>
          </a>
        </div>
        <div class="tips">
          
        </div>
      </van-row>
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
@import url('../../css/reset.css');

.swiper-area{
  width: 10rem;
  clear: both;
  overflow: hidden;
}

.swiper-area img{
  display: block;
  height: 4.9rem
}
.product-container{
  background-color: #EEEEEE;
}
.product-list{
  padding: 0 5px;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
}
.product-list a{
  flex: 1;
}y

.product-list p{
  font-size: 12px;
  color: #696969;
  text-align: center;
}
</style>