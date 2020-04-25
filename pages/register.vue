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
          <a-form-item label="邮箱地址">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: '请输入合法的邮箱地址',
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
          <a-form-item label="电话号码">
            <a-input
              v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入您的电话号码' }],
          },
        ]"
              style="width: 100%"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['prefix', { initialValue: '86' }]"
                style="width: 70px"
              >
                <a-select-option value="86">+86</a-select-option>
                <a-select-option value="87">+87</a-select-option>
                <a-select-option value="852">+852</a-select-option>
                <a-select-option value="853">+853</a-select-option>
                <a-select-option value="886">+886</a-select-option>
              </a-select>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
              已经阅读了
              <nuxt-link to="/">
                玩转博客的自我修养(用户协议)
              </nuxt-link>
            </a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">Register</a-button>
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

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: []
    };
  },
  components: {
    Footer,
    IconFont
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
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
a{
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