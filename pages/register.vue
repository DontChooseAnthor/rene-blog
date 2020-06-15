<template>
  <div>
    <div class="register">
      <div class="header">
        <div class="container">
          <icon-font type="icon-boke-copy"></icon-font>
          <span class="title">注册</span>
          <div class="login">
            <p>已有账号，点错了？重来</p>
            <nuxt-link to="/login">
              <button>登录</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="container">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="用户名">
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [
                    {required: true,message:'请输入用户名'},
                    {}
                  ]
                }
              ]"
            ></a-input>
          </a-form-item>
          <a-form-item label="邮箱地址">
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
            />
          </a-form-item>
          <a-form-item label="设置密码" has-feedback>
            <a-input
              v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
              type="password"
            />
          </a-form-item>
          <a-form-item label="密码确认" has-feedback>
            <a-input
              v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请再次输入密码',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item label="昵称">
            <a-input
              v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: '请输入您的昵称', whitespace: true }],
          },
        ]"
            />
          </a-form-item>

          <a-form-item>
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
              已经阅读了
              <nuxt-link to="/">玩转博客的自我修养(用户协议)</nuxt-link>
            </a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">立即注册</a-button>
            <a-modal
            title="Title"
            :visible="visible1"
            :confirmLoading="confirmLoading1"
            @ok="handleOk1"
            ><p>{{ModalText1}}</p></a-modal>
            <a-modal
            title="Title"
            :visible='visible2'
            @ok="handleOk2"
            ><p>{{ModalText2}}</p></a-modal>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "../components/footer";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1745031_wqtjly17xot.js"
});
import CryptoJS from 'crypto-js'
import api from '../api/constant'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      visible1: false,
      confirmLoading1: false,
      visible2: false,
      ModalText1:'注册成功，确认后跳转登录页面',
      ModalText2:''
    };
  },
  components: {
    Footer,
    IconFont
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let _this = this
      this.form.validateFieldsAndScroll(async(err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
          // console.log(values);
          const res = await _this.$axios.post(api.RENE_REGISTER,{
           username: window.encodeURIComponent(values.username),
           password: CryptoJS.MD5(values.password).toString(),
           email: values.email,
           nickname: values.nickname
         }).then(({status,data})=>{
           if(status===200){
               this.visible1 = true
           }else{
               this.visible2 = true
               this.ModalText2 = data.msg
             
           }
         })
          
        }
        
      });
    },
    handleOk1(e){
      this.ModalText1 = "页面将在两秒后跳转"
      this.confirmLoading1 = true
      setTimeout(()=>{
        this.visible1 = false;
        this.confirmLoading1 = false
        this.$router.push('/login')
      },2000)
    },
    handleOk2(e){
      this.visible2 = false;
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("两次密码输入不一致");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    }
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.register {
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
      .login {
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
  .container {
    width: 40vw;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 100px;
  }
}
.footer {
  height: 140px;
}
</style>