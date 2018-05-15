<template>
  <div class="goods-floor">
    <div class="floor-one-title">
      <span class="floor-name">{{ floorTitle }}</span>
    </div>
    <div class="floor-anomaly">
      <div class="floor-left"><img :src="floorData0.image" width="100%"></div>
      <div class="floor-right">
        <div><img :src="floorData1.image" width="100%"></div>
        <div><img :src="floorData2.image" width="100%"></div>
      </div>
    </div>
    <div class="ruleGoods">
      <div v-for="(item,index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%;" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["floorData","floorTitle"],
  data() {
    return {
      floorData0:{},
      floorData1:{},
      floorData2:{},
      floorName:{}
    }
  },
  watch:{
    floorData:function(val) {
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  },
};
</script>

<style scoped>
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
.floor-right div:nth-child(1){
  border-bottom: 1px solid #ddd;
}
.ruleGoods{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
}
.ruleGoods div{
  width: 5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd
}
.ruleGoods div:nth-child(odd){
  border-right: 1px solid #ddd
}
</style>