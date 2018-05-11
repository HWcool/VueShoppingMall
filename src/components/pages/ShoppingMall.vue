<template>
  <div class="container">
    <van-row>
      <Searchbar></Searchbar>
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
                    <p>￥{{item.price}}</p>
                    <span>￥{{item.mallPrice}}</span>
                  </div>
              </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 楼层区域 -->
      <div class="goods-floor">
        <div class="floor-one-title">
          <div class="floor-number">
            <span>1F</span>
          </div>
          <span class="floor-name">休闲食品</span>
        </div>
        <div class="floor-anomaly">
          <div class="floor-left"><img :src="floor_1.image" width="100%"></div>
          <div class="floor-right">
            <div><img :src="floor_2.image" width="100%"></div>
            <div><img :src="floor_3.image" width="100%"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </van-row>
  </div>
</template>

<script>
import Searchbar from "./Search-bar";
import Footer from "./Footer";
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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
      floor_1: "",
      floor_2: "",
      floor_3: ""
    };
  },
  components: {
    Searchbar,
    Footer,
    swiper,
    swiperSlide
  },
  created() {
    axios({
      url:
        "https://easy-mock.com/mock/5aeb0cfe671cac5c2b7aa0ea/example/easyVue/index",
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
          this.floor_1 = this.floor1[0];
          this.floor_2 = this.floor1[1];
          this.floor_3 = this.floor1[2];
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.swiper-area {
  width: 10rem;
  clear: both;
  overflow: hidden;
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
  font-size: 16px;
}
.recommend-item span {
  text-decoration: line-through;
  color: #bebebe;
}
.goods-floor {
  background: #fff;
}
.floor-one-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: #eeeeee;
  height: 1rem;
}
.floor-one-title .floor-number {
  background: #c05328;
  border-radius: 50%;
  color: #fff;
  margin-right: 0.267rem;
  text-align: center;
  width: 0.64rem;
  height: 0.64rem;
}
.floor-one-title .floor-number span {
  line-height: 0.64rem;
}

.floor-one-title .floor-name {
  color: #c05328;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 5rem;
  box-sizing: border-box;
}
.floor-left {
  border-right: 1px solid #ddd;
}
.floor-right {
  border-bottom: 1px solid #ddd;
}
</style>