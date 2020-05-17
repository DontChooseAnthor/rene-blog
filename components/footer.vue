<template>
  <div class="footer-container">
    <div class="moon">
      <icon-font type="icon-taikong"></icon-font>
    </div>
     <div class="footer-text">
        <p class="ICP">皖ICP备20006224</p>
      <p class="name">© 2019 天井湖失意人 博客平台</p>
      <div class="logo">
        <div class="logo-item">
          <a href="https://www.baidu.com">
            <icon-font type="icon-baidu"></icon-font>
          </a>
        </div>
        <div class="logo-item1">
          <a href="https://www.aliyun.com/?utm_content=se_1000301881" >
        <icon-font style="fontSize:50px" type="icon-aliyun01-copy-copy-copy"></icon-font>
      </a>
        </div>
        <div class="logo-item1">
          <a href="https://cloud.tencent.com/?fromSource=gwzcw.2212127.2212127.2212127&utm_medium=cpd&utm_id=gwzcw.2212127.2212127.2212127">
        <icon-font style="fontSize:50px" type="icon-tengxunyun"></icon-font>
      </a>
        </div>
        <div class="logo-item1">
          <a href="https://www.google.com">
        <icon-font style="fontSize:50px" type="icon-Google"></icon-font>
      </a>
        </div>
        <div class="logo-item">
          <a href="https://github.com/">
        <icon-font type="icon-GitHub"></icon-font>
      </a>
        </div>
        <div class="logo-item">
          <a href="https://www.mongodb.org">
        <icon-font type="icon-MongoDB"></icon-font>
      </a>
        </div>
      
     </div>
      </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1745031_4rrtecxn5yq.js"
});
export default {
  data () {
    return {

    }
  },
  components:	{
    IconFont
  },
  methods: {},
}
</script>

<style lang="less" scoped>
  .footer-container{
    width: 100%;
    height: 150px;
    text-align: center;
    color: #666;
    position: relative;
    .moon{
      height: 30px;
      .anticon{
      margin-left: -8px;
      font-size: 24px;
      line-height: 27.2px;
      width: 27.2px;
      height: 25px;
      text-align: center;
      position: absolute;
      // height: 1px;
      word-spacing: 0;
      animation: star 9s linear .5s infinite;
    }
    @keyframes star {
        from{
          transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
        }
        to{
          transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
        }
      }
    }
    .footer-text{
      height: 120px;
      .ICP{
        margin-top: 20px;
        width: 100%;
      }
      .name{
        width: 100%;
        margin-top: 5px;
      }
       .logo{
        width: 100%;
        height: 80px;
        line-height: 60px;
        display: inline-flex;
        justify-content: center;
        .logo-item{
          font-size: 30px;
          width: 60px;
          height: 60px;
        }
        .logo-item1{
          font-size: 30px;
          width: 60px;
          height: 60px;
        }
      }
    }
  }
</style>