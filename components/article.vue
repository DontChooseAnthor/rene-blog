<template>
  <div>
    <Nav />
    <div class="container">
      <slot />
    </div>
    <BackTop />
    <Footer class="footer" />
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";
import "highlight.js/styles/monokai-sublime.css";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
    BackTop,
    Footer
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  overflow: hidden;
  .header {
    width: 100vw;
    height: 55vh;
    overflow: hidden;
    position: relative;
    // background-image: url("../assets/resource/3.jpg");
    // background-size: 100% auto;
    animation: showHeader 1s ease;
    .progressive{
      position: absolute;
      width: inherit;
      img{
        width: 100%;
      }
    }
    .title1 {
      width: inherit;
      color: #fff;
      text-align: center;
      margin-top: 25vh;
      position: absolute;
      font-size: 35px;
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
      left: -42%;
      margin-top: 24vh;
      border-radius: 100%;
    }
    .title2 {
      color: #fff;
      width: inherit;
      text-align: center;
      margin-top: 32vh;
      font-size: 16px;
      position: absolute;
      letter-spacing: 4px;
    }
  }
  @keyframes showHeader {
    from {
      transform: translate(100px, 100px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  .article {
    width: 55vw;
    margin: 0 auto;
    margin-top: 10vh;
    font-weight: 500;
    text-align: justify;
    line-height: 30px;
    letter-spacing: 0.5px;
    color: #666;
    animation: showArt 1.5s ease;
    img {
      width: 55vw;
      padding: 0 10vw;
    }
    code {
      color: rgb(211, 142, 153);
      padding: 2px 5px;
      background-color: rgb(238, 235, 235);
      border-radius: 5px;
    }
    table {
      border: 1px solid #55efc4;
      border-collapse: collapse;
      font-size: 14px;
      width: 90%;
      margin: 0 auto;
      /deep/tr {
        border: 1px solid #55efc4;

        td {
          border: 1px solid #55efc4;
        }
        th {
          border: 1px solid #55efc4;
          background-color: rgba(113, 226, 198, 0.4);
        }
      }
    }
    /deep/pre {
      margin: 10px auto;
      width: 90%;
      padding: 8px;
      background: #222;
      border-radius: 5px;
      color: #fff;
      overflow: scroll;
      opacity: 0.9;
      letter-spacing: 0;
    }
    // 取消默认的滚动条样式
    /deep/pre::-webkit-scrollbar {
      display: none;
    }
    .begin {
      span {
        font-size: 30px;
        padding: 0;
        font-weight: 600;
        color: #55efc4;
      }
    }

    .main-section {
      font-size: 21px;
      font-weight: 600;
      margin: 20px 0;
      margin-top: 60px;
      color: #55efc4;
      position: relative;
      display: inline-flex;
      line-height: 21px;

      .section-icon {
        position: absolute;
        right: -30px;
      }
    }
    .section-container {
      img {
        width: inherit;
      }
      ul {
        list-style: none;
        width: 90%;
        border: 1px dashed #55efc4;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        li {
          margin-top: 10px;
        }
      }
      dl {
        width: 90%;
        border: 1px dashed #55efc4;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;

        dt {
          color: #55efc4;
          font-weight: 600;
        }
        dd {
          img {
            margin-left: -10vw;
          }
        }
      }
    }
    .section-container-short {
      text-align: left;
      img {
        width: 55vw;
      }
      ul {
        list-style: none;
        width: 90%;
        border: 1px dashed #55efc4;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        li {
          margin-top: 10px;
        }
      }
      dl {
        width: 90%;
        border: 1px dashed #55efc4;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        dt {
          color: #55efc4;
          font-weight: 600;
        }
        dd {
          img {
            margin-left: -5vw;
          }
        }
      }
    }
  }
  @keyframes showArt {
    from {
      opacity: 0;
      transform: translateY(500px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.footer {
  margin-top: 150px;
}
</style>