<template>
  <div class="promise-resource">
    <Nav />
    <div class="container">
      <div class="header">
        <p class="title1">Promise一些理解</p>
        <p class="title2">无论何时，ES6的基础永远是最重要的~</p>
      </div>
      <div class="article">
        <div v-html="hello"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";
// 引入showdown和md文件
import showdown from 'showdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css';
import hello from '../public/uploads/1588334778217.Promise的一些理解.md'

export default {
  data() {
    return {
      
    };
  },
  computed: {
    hello(){
      return hello
    }
  },
  components: {
    Nav,
    BackTop,
    Footer
  },
  methods: {
    
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  overflow: hidden;
  .header {
    width: 100vw;
    height: 50vh;
    overflow: hidden;
    position: relative;
    background-image: url("../assets/resource/1.jpg");
    background-size: 100% auto;
    .title1 {
      width: inherit;
      color: #fff;
      text-align: center;
      margin-top: 23vh;
      position: absolute;
      font-size: 30px;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .title1::after {
      content: "";
      background-color: #fff;
      width: 180%;
      height: 35vh;
      position: absolute;
      z-index: 10;
      left: -40%;
      margin-top: 24vh;
      border-radius: 100%;
    }
    .title2 {
      color: #fff;
      width: inherit;
      text-align: center;
      margin-top: 30vh;
      position: absolute;
      letter-spacing: 2px;
    }
  }
  .article {
    width: 60vw;
    margin: 0 auto;
    margin-top: 60px;
    /deep/pre{
      margin: 0 auto;
      width: 80%;
      padding: 8px;
      background: #111;
      border-radius: 5px;
      color: #fff;
      overflow: scroll;
    }
    // 取消默认的滚动条样式
    /deep/pre::-webkit-scrollbar{
      display: none;
    }
  }
}

</style>