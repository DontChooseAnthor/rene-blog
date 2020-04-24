<template>
<div>
  <!-- 提示 -->
    <div class="tip">
      小尺寸屏幕切换手机端体验会更好，手机端仍在开发中请耐心等待
    </div>
  <div class="container">
    <div class="container-color">
      <header>
        <div class="headername">さくら荘の宝</div>
        <div class="message">随性的博客交流分享平台</div>
      </header>

      <div class="logo">
        <h1>ReneForever</h1>
      </div>

      <div class="login">
        <form action="#/login" method="post" @submit.prevent="handleSubmit()">
          <font-awesome-icon class="user-icon" :icon="['fas','diagnoses']" />
          <input name="email" type="text" placeholder="请输入邮箱" v-model="email" ref="email" />
          <font-awesome-icon class="psw-icon" :icon="['fas','dove']" />
          <input name="password" type="text" placeholder="请输入密码" v-model="password" ref="password" />
          <button type="submit" class="submit-button">
            <p>登录</p>
          </button>
          <p class="forget">忘记密码</p>
          <p class="register">新用户注册</p>
        </form>
      </div>
      <div class="last">
        <p>since 2019</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {},
  methods: {
    // 登录验证是否合法并
    handleSubmit() {
      if (this.email.trim() && this.password.trim()) {
        let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let emailResult = emailReg.test(this.email.trim());
        let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        let passwordResult = passwordReg.test(this.password.trim());
        if (!emailResult || !passwordResult) {
          if (!emailResult) {
            this.email = "";
            this.password = "";
            this.$refs.email.placeholder = "邮箱格式不合法,请重新输入";
            return false;
          }
          if (!passwordResult) {
            this.password = "";
            this.$refs.password.placeholder = "密码格式不正确,请重新输入";
            return false;
          }
        } else {
          let result = {
            email: this.email.trim(),
            password: this.password.trim()
          };
          console.log(result);
          return true;
        }
      } else {
        if (!this.email) {
          this.$refs.email.placeholder = "邮箱不能为空";
        }
        if (!this.password) {
          this.$refs.password.placeholder = "密码不能为空";
        }
        return false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
@media screen and (min-width: 800px) {
  .tip{
    display: none;
  }
  .container {
    width: 100%;
    height: 100vh;
    background: url("../assets/login/1.jpg") no-repeat;
    background-size: 100% 100%;
    filter: blur(0.48px);
    -webkit-filter: blur(0.48px);
    .container-color {
      width: 100%;
      height: 100%;
      position: relative;
      background: rgba(41, 40, 40, 0.404);
    }
  }
  header {
    width: 100%;
    height: 7vh;
    display: inline-flex;
    line-height: 7vh;
    .headername {
      font-size: 25px;
      font-weight: 800;
      color: #fff;
      margin-left: 20px;
      transition: all 1s;
    }
    .headername:hover {
      color: #e67e22;
    }
    .message::before {
      content: "☂";
    }
    .message {
      position: absolute;
      right: 30px;
      letter-spacing: 3px;
      color: #fff;
      font-size: 15px;
      transition: all 1s;
    }
    .message:hover {
      color: #e67e22;
    }
  }
  .logo {
    width: 200px;
    height: 40px;
    display: flex;
    margin: 160px auto;
    justify-content: center;
    align-items: center;
    h1 {
      color: transparent;
      font-family: Helvetica;
      margin: 0;
      padding: 0;
      font-size: 7rem;
      letter-spacing: -0.2rem;
      position: relative;
    }
    h1::after {
      content: "ReneForever";
      background-image: url("../assets/login/logo.jpg");
      background-size: 120%;
      background-position: center center;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: ellipse(110px 110px at 0% 50%);
      -webkit-clip-path: ellipse(110px 110px at 0% 50%);
      animation: spotlight 7s infinite;
    }
    @keyframes spotlight {
      0% {
        clip-path: ellipse(110px 110px at 0% 50%);
        -webkit-clip-path: ellipse(110px 110px at 0% 50%);
      }

      50% {
        clip-path: ellipse(110px 110px at 100% 50%);
        -webkit-clip-path: ellipse(110px 110px at 100% 50%);
      }

      100% {
        clip-path: ellipse(120px 120px at 0% 50%);
        -webkit-clip-path: ellipse(120px 120px at 0% 50%);
      }
    }
  }
  .login {
    width: 300px;
    height: 233px;
    position: relative;
    margin: -75px auto;
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      height: 42px;
      width: 280px;
      font-size: 14px;
      border: none;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 25px;
      padding: 0 20px;
      padding-left: 40px;
      color: #ffffff;
      background: rgba(82, 81, 81, 0.905);
    }
    .user-icon {
      position: absolute;
      top: 23px;
      left: 22px;
      color: #fff;
    }
    .psw-icon {
      position: absolute;
      top: 76px;
      left: 22px;
      color: #fff;
    }
    .submit-button {
      width: 280px;
      height: 42px;
      border: none;
      border-radius: 25px;
      margin-top: 60px;
      margin-left: 10px;
      letter-spacing: 10px;
      color: #ffffff;
      background: #e67e22;
      outline: none;
    }
    .submit-button:hover {
      cursor: pointer;
    }
    .forget {
      position: absolute;
      bottom: 0;
      left: 10px;
      color: #fff;
      font-size: 13px;
    }
    .forget:hover {
      cursor: pointer;
    }
    .register {
      position: absolute;
      bottom: 0;
      right: 10px;
      color: #fff;
      font-size: 13px;
    }
    .register:hover {
      cursor: pointer;
    }
  }
  .last {
    position: fixed;
    bottom: 5px;
    right: 45px;
    color: #fff;
    font-weight: 100;
  }
}
@media screen and (max-width: 799px) {
  .container{
    display: none;
  }
  .tip{
    display: block;
  }
}
</style>
