<template>
  <!--search bar layout-->
  <div class="search-bar">
    <van-row gutter="5">
        <van-col span="3">
          <span class="location-icon icon icon-shouhuodizhi"></span>
        </van-col>
        <van-col span="16">
          <input type="text" @click="searchClick" class="search-input" placeholder="优惠大酬宾满300减88"/>
        </van-col>
        <van-col span="5"><van-button size="mini">查找</van-button></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    searchClick(){
      this.$router.push({
        path: 'Searched'
      })
    }
  }
};
</script>

<style scoped>
.search-bar{
    width: 100%;
    height:1.1rem;
    background-color: #e5017d;
    color: #666;
    opacity: .7;
    line-height: 1.1rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
.search-input{
    width:100%;
    height: .9rem;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom:1px solid #fff !important;
    background-color: transparent;
    font-size: 12px;
    z-index: 999;
}
.location-icon {
  padding-top: 0.3rem;
  padding-left: 0.4rem;
  color: #fff;
  font-size: 22px
}
</style>