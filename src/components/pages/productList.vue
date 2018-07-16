<template>
  <div>
    <SearchBar></SearchBar>
    <!-- 商品分类区域 -->
    <div class="header-list">
      <van-tabs v-model="active">
        <van-tab v-for="(item,index) in headerData" :title="item" :key="index" sticky>
          <div class="Condition-selection">
            <div class="selection">
              <span>销量：</span>
              <div class="switch">
                  <van-switch v-model="checked" />
              </div>
            </div>
            <div class="selection">
              <span>价格：</span>
              <div class="switch">
                高<van-switch v-model="low" />低
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 商品 -->
    <div class="goods-area">
      <div class="left-menu">
        <div v-for="(item,index) in googsList" :key="index">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="">
         <van-list class="goods-detail">
          <div class="goods-wrap" v-for="(item,index) in imagesData" :key="index">
            <img v-lazy="item.image" width="100%" />
            <div class="goods-name">{{ item.name }}</div>
            <span class="mallPrice">￥{{ item.price | moneyFilter }}</span>
            <span class="price">￥{{ item.mallPrice | moneyFilter }}</span>
          </div>
        </van-list>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import SearchBar from '@/component/SearchBar'
  import Footer from '@/component/Footer'
  import axios from 'axios'
  import {toMoney} from '@/common/js/util'
  import URL from '@/api/serviceAPI.config'

  export default {
    components:{SearchBar,Footer},
    data() {
      return {
        headerData : ['新鲜水果','中外名酒','营养奶品','食品饮料','个人护理'],
        googsList: ['全部', '热带水果', '时令水果', '苹果/梨子','柑橘橙柚'],
        active: 0,
        checked: true,
        low: false,
        imagesData:[],
      }
    },
    created(){
      console.log(111)
      console.log(this.products)
      axios({
        url: URL.getShoppingMallInfo,
        method: 'get',
      })
      .then(res=>{
        console.log(res);
        this.imagesData = res.data.data.hotGoods
      })
      .catch((e)=>{
        console.log(e)
      })
    },
    methods:{
      
    },
    filters:{
      moneyFilter:function(val) {
        return toMoney(val)
      }
    }
  }
</script>

<style scoped>
  .header-list {
    padding-top: 1.1rem;
    font-size: 14px;
    color:#666
  }
  .Condition-selection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 1rem;
    line-height: 1rem;
    background: #fff
  }
  .selection{
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-right: .266rem;
    color: #666
  }
  .switch{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goods-area{
    margin-top: .133rem;
    display: flex;
    flex-direction: row;
  }
  .left-menu{
    flex: 0 0 20%;
    font-size: 16px;
    text-align: center;
    background: #fff;
    margin-right: .133rem;
  }

  .left-menu div{
    height: 1.173rem;
    line-height: 1.173rem;
    border-bottom: 1px solid #ddd;
  }
  .left-menu div:nth-child(1){
    background: #eeeeee;
  }
  .goods-detail{
    flex: 0 0 79%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .goods-detail .goods-wrap{
    width: 49%;
    margin-bottom: .133rem;
    background: #fff
  }
  .goods-detail .goods-wrap:nth-child(odd){
    margin-right: .133rem
  }
  .goods-wrap{
    text-align: center;
    padding-bottom: .4rem
  }
  .goods-name{
    padding: 0 .107rem;
    color: #C66973;
    font-size: 14px;
    line-height: 1.25;
    margin-bottom: .133rem;
  }
  .mallPrice{
    color: #C66973;
    font-size: 16px;
  }
  .price{
    color: #666;
    text-decoration: line-through;
  }
</style>

