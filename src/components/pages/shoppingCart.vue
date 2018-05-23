<template>
  <div class="ShoppingCar">
    <div class="back-bar">
        <van-nav-bar
          title="购物车"
          left-text="返回"
          left-arrow
          @click-left="back"
        />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/component/Footer'
import {mapState} from 'vuex'
  export default {
    components:{Footer},
    computed:{

    },
    data() {
      return {
        
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
.ShoppingCar{
  background: #fff;
}
.back-bar{
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
}
</style>