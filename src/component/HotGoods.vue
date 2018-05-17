<template>
  <div class="goods-info">
    <div class="goods-image">
        <img v-lazy="goodsImage" width="99%" />
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
  </div>
</template>

<script>
import { toMoney } from "@/common/js/util.js";
export default {
  props: ["goodsImage", "goodsName", "goodsPrice"],
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>

<style scoped>
.goods-info{
  background: #fff;
  padding-bottom: .3rem;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.goods-name {
  padding: 0 8px 8px 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #db5b52;
}
.goods-price {
  text-align: center;
  font-size: 16px;
  color: crimson
}
</style>