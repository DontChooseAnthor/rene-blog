<template>
  <div>
    <div class="header">
      <div class="container">
        <icon-font type="icon-boke-copy"></icon-font>
        <span class="title">登录</span>
        <div class="register">
          <p>没有账号？快到碗里来</p>
          <nuxt-link to="/register">
            <button>注册</button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="login">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: '请输入合法的邮箱地址',
                      trigger: 'blur'
                    },
                    {
                      required: true,
                      message: '请输入邮箱',
                    },
                  ],
                },
            ]"
            placeholder="Email"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
          >记住密码</a-checkbox>
          <a-button type="primary" html-type="submit" class="login-form-button">立即登录</a-button>
        </a-form-item>
      </a-form>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import Footer from "../components/footer";
import { Icon } from "ant-design-vue";
import api from '../api/constant'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1745031_wqtjly17xot.js"
});
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {};
  },
  components: {
    Footer,
    IconFont
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let _this = this
      this.form.validateFields(async(err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
         const res = await _this.$axios.post(api.RENE_LOGIN,{
           email:values.email,
           password:CryptoJS.MD5(values.password).toString()
         })
        console.log(res.data)
        if(res.data.success){
          this.$router.push('/home')
        }else{
          alert('登录失败')
        }
          
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
}
.header {
  width: 100%;
  height: 60px;
  .container {
    width: 70%;
    height: 60px;
    margin: 0 auto;
    border-bottom: 1px solid #1296db;
    .anticon {
      font-size: 60px;
      line-height: 60px;
    }
    .title {
      color: #1296db;
      font-size: 20px;
      font-weight: 500;
      position: absolute;
      top: 15px;
      margin-left: 0.8vw;
    }
    .title::before {
      content: "|";
      margin-right: 0.8vw;
    }
    .register {
      width: 240px;
      display: inline-block;
      position: relative;
      float: right;
      height: 60px;
      line-height: 60px;
      p {
        font-size: 14px;
      }
      button {
        position: absolute;
        top: 18px;
        left: 160px;
        width: 70px;
        height: 25px;
        border: none;
        border-radius: 15px;
        background: #1296db;
        color: #fff;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
.login {
  width: 40vw;
  margin: 0 auto;
  margin-top: 100px;
}
.footer {
  position: fixed;
  bottom: 0;
}
</style>
