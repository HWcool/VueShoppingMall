<template>
  <div class="container">
    <van-row>
      <SearchBar></SearchBar>
      <!-- Swiper 轮播 -->
      <div class="swiper-area">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
            <img v-lazy = "banner.image" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 商品列表 -->
      <div class="type-bar">
          <div class="item-list" v-for="(item,index) in category" :key="index">
            <img v-lazy ="item.image" :key="index" width="90%">
            <div>{{ item.mallCategoryName }}</div>
          </div>
      </div>
      <div class="tips">
        <img v-lazy="tips.PICTURE_ADDRESS" width="100%">
      </div>
      <!-- 商品推荐区域 -->
      <div class="recommend-area">
        <div class="recommend-title">商品推荐</div>
        <div class="recommend-main">
          <!-- swiper -->
          <swiper :options="swiperOption">
              <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
                  <div class="recommend-item">
                    <img :src="item.image" width="80%" />
                    <p>{{item.price | toMoney}}</p>
                    <span>{{item.mallPrice | toMoney}}</span>
                  </div>
              </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 楼层区域 -->
      <FloorComponent :floorData="floor1" :floorTitle="floorName.floor1"></FloorComponent>
      <FloorComponent :floorData="floor2" :floorTitle="floorName.floor2"></FloorComponent>
      <FloorComponent :floorData="floor3" :floorTitle="floorName.floor3"></FloorComponent>
      <!-- 底部菜单 -->
      <Footer></Footer>
    </van-row>
  </div>
</template>

<script>
import axios from "axios"
import "swiper/dist/css/swiper.css"
import SearchBar from "@/component/SearchBar"
import Footer from '@/component/Footer'
import FloorComponent from '@/component/Floor'
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      category: [],
      bannerPicArray: [],
      tips: "",
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
    };
  },
  components: {
    SearchBar,
    Footer,
    swiper,
    swiperSlide,
    FloorComponent
  },
  created() {
    axios({
      url:"https://easy-mock.com/mock/5aeb0cfe671cac5c2b7aa0ea/example/easyVue/index",
      method: "get"
    })
      .then(response => {
        console.log(response.data.data);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.bannerPicArray = response.data.data.slides;
          this.tips = response.data.data.advertesPicture;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
          this.imagesData =response.data.data.hot
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  filters: {
    toMoney: function(val) {
      if(!val) { return '' }
      val = val.toFixed(2);
      return '￥' + val;
    }
  }
};
</script>

<style scoped>
.swiper-area {
  width: 10rem;
  clear: both;
  overflow: hidden;
  padding-top: 1.1rem; 
}

.swiper-area img {
  display: block;
  height: 4.9rem;
}
.type-bar {
  background-color: #fff;
  margin: 0.1rem;
  border-radius: 0.2rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.1rem;
  font-size: 12px;
  text-align: center;
}
.tips {
  text-align: center;
}
.recommend-area {
  width: 100%;
  margin-top: 0.2rem;
  background: #fff;
}
.recommend-title {
  font-size: 14px;
  color: #db5b52;
  padding-left: 0.3rem;
  border-bottom: 1px solid #eee;
  line-height: 1rem;
}
.recommend-main {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  text-align: center;
}

.recommend-item p {
  font-size: 14px;
}
.recommend-item span {
  text-decoration: line-through;
  color: #bebebe;
}
</style>