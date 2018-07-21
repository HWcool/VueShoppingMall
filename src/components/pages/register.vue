<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="register-panel">
        <van-field
          v-model="username"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          required
          @click-icon="username = ''"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        <div class="register-button">
            <van-button type="primary" @click="axiosRegisterUSER" size="large">马上注册</van-button>
        </div>
       </div>
  </div>
</template>

<script>
import url from '@/api/serviceAPI.config'
import axios from 'axios'
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    axiosRegisterUSER() {
      axios({
        url: url.registerUser,
        methods: 'post',
        data:{
          username: this.username,
          password: this.password
        }
      })
      .then((response)=>{
        console.log(response)
        if(response.data.code == 200){
          Toast.success('恭喜您，注册成功')
        }else {
          console.log(response.data.message)
          Toast.fail('注册失败')
        }
        console.log(response.data.code)
      })
      .catch((error)=>{
        Toast.fail('用户注册失败，请尝试重新注册')
        console.log(error)
      })
    }
  }
};
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: .533333rem auto;
  padding-bottom: 1.333333rem;
}
.register-button {
  padding-top: .266667rem;
}
</style>