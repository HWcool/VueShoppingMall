<template>
  <div class="mine">
    <van-nav-bar
      title="用户中心"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <h2 class="greetingInfo">{{ userName }}你好，欢迎回来！</h2>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/component/Footer'
  export default {
    data() {
      return {
        userName: ''
      }
    },
    components:{
      Footer
    },
    created() {
      this.userName = localStorage.getItem('userInfo')
      setTimeout(()=> {
        if(this.userName == '' || this.userName == null) {
          this.$router.push('/register')
        }
      },200)
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.greetingInfo{
  text-align: center;
  font-size: 16px;
  line-height: 1rem
}
</style>