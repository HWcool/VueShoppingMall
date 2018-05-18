<template>
  <div>
    <div class="search-bar">
      <form action="/">
        <van-search ref="seachbar"
          placeholder="请输入商品名称"
          show-action
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="search-history">
      <p class="title">热门搜索</p>
      <div class="wrap">
        <div class="history-item" v-for="(item, index) in data" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: ['Ipad','防护眼镜','打印机','实木沙发','钢琴','男士板鞋','女士靓装','家用插板','小狗吸尘器']
      }
    },
    methods:{
      onCancel(){
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>

<style scoped>
.search-bar{
  border-bottom: 1px solid #ddd
}
.search-history{
  padding: .267rem;
  font-size: 12px;
  color: #666;
}
.title{
  font-size: 14px;
  color: #666;
}
.wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .267rem;
  padding-left: 0;
}
.history-item{
  flex: 0 0 18%;
  text-align: center;
  padding: 8px;
  margin: .1rem 0;
  background: #c0d2ec;
  border-radius: 5px;
}
</style>