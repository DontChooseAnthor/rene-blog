<template>
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
          <!-- <font-awesome-icon class="user-icon" :icon="['fas','diagnoses']" /> -->
          <input name="email" type="text" placeholder="请输入邮箱" v-model="email" ref="email" />
          <!-- <font-awesome-icon class="psw-icon" :icon="['fas','dove']" /> -->
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
        let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        let passwordResult = passwordReg.test(this.password.trim());
          if (!emailResult || !passwordResult) {
            if(!emailResult){
            this.email = "";
            this.password = "";
            this.$refs.email.placeholder = "邮箱格式不合法,请重新输入";
            return false
            }
          if(!passwordResult) {
            this.password = "";
            this.$refs.password.placeholder = "密码格式不正确,请重新输入";
            return false
          }
        } else {
          let result = {
            email: this.email.trim(),
            password: this.password.trim()
          };
          console.log(result)
          return true
        }
      } else {
        if (!this.email) {
          this.$refs.email.placeholder = "邮箱不能为空";
        }
        if (!this.password) {
          this.$refs.password.placeholder = "密码不能为空";
        }
        return false
      }
    }

  }
};
</script>
