<template>
  <div class="home">
    <div class="homebox">
      <h3>Login Form</h3>
      <div class="inp1">
        <el-input
          placeholder="Username"
          prefix-icon="el-icon-user-solid"
          v-model="username"
        >
        </el-input>
      </div>
      <div class="inp2">
        <el-input
          placeholder="Password"
          prefix-icon="el-icon-s-cooperation"
          v-model="password"
          show-password
        >
        </el-input>
      </div>
      <el-button type="primary" class="botton" @click="Signin"
        >Login1</el-button
      >
    </div>
  </div>
</template>

<script>
import { querySignin } from "../request/Api.js";
export default {
  name: "HomeView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // 登录
    Signin() {
      querySignin({ username: this.username, password: this.password }).then(
        (res) => {
          // console.log(res);
          if (this.username == "" && this.password == "") {
            alert("账户或密码不能为空");
            return false;
          }
          if (res.data.userInfo.username == this.username) {
            this.$router.push("/about");
          }
        }
      );
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 760px;
  background-color: #2d3a4b;
  .homebox {
    width: 500px;
    height: 300px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .inp1 {
      margin: 20px;
    }
    .inp2 {
      margin: 20px;
    }
    h3 {
      color: #fff;
    }
    .botton {
      width: 460px;
      height: 40px;
    }
  }
}
</style>
