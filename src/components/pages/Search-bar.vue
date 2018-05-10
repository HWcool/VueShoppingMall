<template>
    <div>
<!--search bar layout-->
<div class="search-bar">
    <van-row gutter="5">
        <van-col span="3">
          <span class="location-icon icon icon-shouhuodizhi"></span>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5"><van-button size="mini">查找</van-button></van-col>
    </van-row>
</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png")
    };
  }
};
</script>

<style scoped>
.search-bar{
    height:1.1rem;
    background-color: #e5017d;
    line-height: 1.1rem;
    overflow: hidden;
}
.search-input{
    width:100%;
    height: .9rem;
    border-top:0;
    border-left:0;
    border-right:0;
    border-bottom:1px solid #fff !important;
    background-color: #e5017d;
    color:#fff;
    font-size: 12px
}
.location-icon {
  padding-top: 0.3rem;
  padding-left: 0.4rem;
  color: #ffffff;
  font-size: 22px
}
</style>