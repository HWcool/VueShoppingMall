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
            @click-icon="username=''"
            :error-message = 'errorusername'
        />

        <van-field
            v-model="password"
            type="password"
            label="密码" 
            placeholder="请输入密码"
            required
            :error-message = 'errorpassword'
            v-on:keyup.enter = 'registerUserAction'
        />
        <div class="register-button">
            <van-button type="primary" @click="registerUserAction" :loading="openloading" size="large">马上注册</van-button>
        </div>
        <div class="register-button">
            <van-button type="primary" @click="goLoginPage"  size="large">已有账户，去登录</van-button>
        </div>
       </div>
  </div>
</template>

<script>
import url from "@/api/serviceAPI.config";
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      openloading: false, //是否开启点击后的loading
      errorusername: "",
      errorpassword: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    registerUserAction() {
      this.checkForm() && this.axiosRegisterUSER();
    },
    axiosRegisterUSER() {
      this.openloading = true;
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.username,
          password: this.password
        }
      })
        .then(response => {
          console.log(response)
          if (response.data.code == 200) {
            Toast.success(response.data.message);
            this.$router.push("/");
          } else {
            console.log(response.data.message);
            this.openloading = false;
            Toast.fail("注册失败");
          }
        })
        .catch(error => {
          console.log(error);
          Toast.fail("注册失败");
          this.openloading = false;
        });
    },
    checkForm() {
      let isTrue = true;
      if (this.username.length < 3) {
        this.errorusername = "用户名不能小于3位";
        isTrue = false;
      } else {
        this.errorusername = "";
      }

      if (this.password.length < 6) {
        this.errorpassword = "用户密码不能少于6位";
        isTrue = false;
      } else {
        this.errorpassword = "";
      }
      return isTrue;
    },
    goLoginPage() {
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 0.533333rem auto;
  padding-bottom: 1.333333rem;
}
.register-button {
  padding-top: 0.266667rem;
}
</style>