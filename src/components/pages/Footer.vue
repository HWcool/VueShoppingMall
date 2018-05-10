<template>
  <div>
    <van-row class="footer">
      <router-link class="menu-list" tag="div" to="/">
        <span class="icon icon-home"></span>
        <p>商城</p>
      </router-link>
      <router-link class="menu-list" tag="div" to="/productList">
        <span class="icon icon-list"></span>
        <p>分类</p>
      </router-link>
      <router-link class="menu-list" tag="div" to="/shoppingCart">
        <span class="icon icon-shoppingcart"></span>
        <p>购物车</p>
      </router-link>
      <router-link class="menu-list" tag="div" to="/mine">
        <span class="icon icon-mine"></span>
        <p>会员中心</p>
      </router-link>
    </van-row>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.footer{
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.menu-list{
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #888888;
  padding-bottom: .133rem;
}

.menu-list span{
  font-size: 24px
}

.router-link-active {
  color: #e5017d;
}
</style>