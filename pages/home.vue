<template>
<div>
<div class="homebody">
    <!-- 提示 -->
  <div class="tip">
      小尺寸屏幕切换手机端体验会更好，手机端仍在开发中请耐心等待
  </div>
  <div class="home">
    <!-- header -->
    <div class="headercontent">
      <div class="headername">天井湖失意人</div>
      <nav>
        <ul>
          <nuxt-link to="/home">
            <li>
              <div class="navcontent">
                <font-awesome-icon class="nav-icon" icon="home" />
                <p>首页</p>
              </div>
            </li>
          </nuxt-link>
          <nuxt-link to="/chat">
            <li>
              <div class="navcontent">
                <font-awesome-icon class="nav-icon" :icon="['fas','comments']" />
                <p>杂谈</p>
              </div>
            </li>
          </nuxt-link>
          <nuxt-link to="/resource">
            <li>
              <div class="navcontent">
                <font-awesome-icon class="nav-icon" :icon="['fas','box-open']" />
                <p>资源</p>
              </div>
            </li>
          </nuxt-link>
          <nuxt-link to="/message">
            <li>
              <div class="navcontent">
                <font-awesome-icon class="nav-icon" :icon="['fas', 'edit']" />
                <p>留言板</p>
              </div>
            </li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li>
              <div class="navcontent">
                <font-awesome-icon class="nav-icon" :icon="['fas','tree']" />
                <p>关于</p>
              </div>
            </li>
          </nuxt-link>
        </ul>
      </nav>
      <div class="headericon">
        <nuxt-link to="/search">
          <div class="search">
            <a-icon type="search" />
          </div>
        </nuxt-link>
        <nuxt-link to="/login">
          <div class="user">
            <a-icon type="user" />
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- Nav component -->
    <Nav v-if="navShow" />

    <div :class="bg" v-lazy id="headerBg">
      <!-- title -->
      <figure id="centerbg" class="centerbg">
        <div class="focusinfo">
          <h1
            class="center-text glitch is-glitching Ubuntu-font"
            data-text="HI, FRIEND!"
          >HI, FRIEND!</h1>
          <div class="header-info">
            <p>长日尽处,我站在你的面前,你将看到我的伤痕,知道我曾经受伤,也曾经痊愈。</p>
            <div class="top-social_v2">
              <li id="bg-pre">
                <img
                  class="flipx"
                  src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"
                />
              </li>
              <li>
                <a
                  href="https://github.com/reneforever"
                  target="_blank"
                  class="social-github"
                  title="github"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/github.png"
                  />
                </a>
              </li>

              <li>
                <a href="https://weibo.com" target="_blank" class="social-sina" title="sina">
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/sina.png"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://music.163.com/"
                  target="_blank"
                  class="social-wangyiyun"
                  title="CloudMusic"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wangyiyun.png"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.zhihu.com"
                  target="_blank"
                  class="social-wangyiyun"
                  title="Zhihu"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/zhihu.png"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://blog.csdn.net"
                  target="_blank"
                  class="social-wangyiyun"
                  title="CSDN"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/csdn.png"
                  />
                </a>
              </li>

              <li>
                <a onclick="mail_me()" class="social-wangyiyun" title="E-mail">
                  <img
                    src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg"
                  />
                </a>
              </li>

              <li id="bg-next">
                <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg" />
              </li>
            </div>
          </div>

          <!-- backtop -->
          <BackTop />

          <!-- 下箭头 -->
          <div class="icon-down" @click="iconDownScroll">
            <a-icon type="caret-down" />
          </div>
          <!-- svg波浪 -->
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </figure>
    </div>

    <!-- #bdc3c7   #e67e22 -->
    <!-- news page content -->
    <div class="news" id="news">
      <div class="remind">
        <a-icon type="sound" />
        <!-- color="#7f8c8d" -->
        <p>收藏网站，随时围观站长奇思妙想~</p>
      </div>
      <div class="course">
        <font-awesome-icon class="course-icon" :icon="['fas','crow']" />
        <h1>SHARE:Prototype</h1>
        <div class="course-all-content">
          <nuxt-link to="/home-resource1">
            <div class="course-icon-content">
              <img class="course-img" src="../assets/home/tipsImage/tip1.jpg" alt />
              <div class="course-filter">
                <span class="course-content-a">Promise</span>
                <span class="course-content-b">Promise是什么</span>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/home-resource2">
            <div class="course-icon-content">
              <img class="course-img" src="../assets/home/tipsImage/tip2.jpg" alt />
              <div class="course-filter">
                <span class="course-content-a">Vue</span>
                <span class="course-content-b">拆开Vue看看里面有什么</span>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/home-resource3">
            <div class="course-icon-content">
              <img class="course-img" src="../assets/home/tipsImage/tip3.jpg" alt />
              <div class="course-filter">
                <span class="course-content-a">Hybird App</span>
                <span class="course-content-b">接触混合开发模式</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="share">
        <font-awesome-icon class="share-icon" :icon="['fas','frog']" />
        <h1>SHARE:Articles</h1>
        <div class="share-content">
          <div class="share-info">
            <h2>title</h2>
          </div>
          <div class="share-img"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
  
</template>

<script>
import Nav from '../components/nav'
import BackTop from '../components/backtop'
import Footer from '../components/footer'
export default {
  name: "Home",
  data() {
    return {
      bg: "",
      navShow: false
    };
  },
  methods: {
    // 设置向下按钮平滑滚动
    iconDownScroll() {
      document
        .getElementById("news")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    },
    // 监听页面滚动触发常驻nav
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      
      if (scrollTop < 690) {
        this.navShow = false
      } else {
        this.navShow = true
      }
    },
    //返回顶部鼠标事件
    
  },
  computed: {},
  components: {
    Nav,
    BackTop,
    Footer
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
    // 进入时改变bcimg
    let num = Math.floor(Math.random() * 7 + 1);
    // this.$refs.backGroundImage.style.backGround = url(`../assets/theme/${num}.jpg`)
    this.bg = `bg${num}`;
  },
  destroyed() {
    window.removeEventListener('scroll',this.handleScroll)
  },
};
</script>

<style lang="less">
@media screen and (min-width: 800px) {
  .tip{
    display: none;
  }
  .headercontent {
    position: absolute;
    width: 100%;
    height: 60px;
    transition: all 1s;
    overflow: hidden;
    .headername {
      position: fixed;
      color: #bdc3c7;
      font-family: Ubuntu, sans-serif;
      font-size: 20px;
      top: 15px;
      left: 20px;
      transition: color 1s;
      z-index: 99;
    }
    .headername:hover {
      color: #e67e22;
    }
    nav {
      padding: 0 800px;
      float: right;
      position: absolute;
      right: 120px;
      height: 60px;
      opacity: 0;
      transition: all 0.5s;
      transform: translateX(900px);
      ul {
        display: inline-flex;
        list-style: none;
        li {
          width: 100px;
          line-height: 60px;
          height: 60px;
          text-align: center;
          display: inline-flex;
          justify-content: center;
          color: #bdc3c7;
          .navcontent {
            position: absolute;
            height: 60px;
            border-bottom: solid 5px white;
            border-bottom-width: 0;
            transition: all 0.5s;
            p {
              display: inline-block;
              font-size: 15px;
              height: 60px;
              font-family: Geneva, Verdana, sans-serif;
            }
            .nav-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              margin-right: 3px;
            }
          }
        }
        li:hover > .navcontent {
          border-bottom-color: #e67e22;
          color: #e67e22;
          border-bottom-width: 5.5px;
        }
      }
    }
    nav:hover {
      opacity: 1;
      transform: translateX(720px);
    }
    .headericon {
      position: fixed;
      float: left;
      right: 10px;
      height: 60px;
      vertical-align: middle;
      z-index: 199;
      display: inline-flex;
      .search {
        color: #bdc3c7;
        margin-top: 14px;
        margin-right: 13px;
        transition: all 0.5s;
        font-size: 30px;
      }
      .user {
        color: #bdc3c7;
        font-size: 30px;
        margin-top: 14px;
        transition: all 0.5s;
      }
      .search:hover {
        color: #e67e22;
        transform: translateY(-5px);
        cursor: pointer;
      }
      .user:hover {
        color: #e67e22;
        transform: translateY(-5px);
        cursor: pointer;
      }
    }
  }
  .headercontent:hover {
    background: #ffffff;
  }

  // 笨办法修改background
  .bg1 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/1.jpg") no-repeat center;
    background-size: cover;
  }
  .bg2 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/2.jpg") no-repeat center;
    background-size: cover;
  }
  .bg3 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/3.jpg") no-repeat center;
    background-size: cover;
  }
  .bg4 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/4.jpg") no-repeat center;
    background-size: cover;
  }
  .bg5 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/5.jpg") no-repeat center;
    background-size: cover;
  }
  .bg6 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/6.jpg") no-repeat center;
    background-size: cover;
  }
  .bg7 {
    height: 100vh;
    width: 100%;
    background: url("../assets/home/backgroundImage/7.jpg") no-repeat center;
    background-size: cover;
  }

  .bg1::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg2::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg3::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg4::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg5::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg6::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }
  .bg7::before {
    content: "";
    display: inline-block;
    height: inherit;
    width: inherit;
    background-image: repeating-linear-gradient(
      to top,
      rgba(100, 97, 97, 0.2),
      rgba(204, 204, 204, 0.3) 2px
    );
  }

  // main info
  .focusinfo {
    width: 80%;
    height: 250px;
    text-align: center;
    margin-top: -65vh;
    margin-left: 10%;
    .header-info{
      width: 500px;
      p{
        width: 100%;
      }
    }
  }
  .center-text {
    margin: auto;
    font-family: Ubuntu, sans-serif;
    font-size: 105px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  // hi,friend font
  .glitch {
    position: relative;
    color: #fff;
    mix-blend-mode: lighten;
  }

  .glitch:after,
  .glitch:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    clip: rect(0, 0, 0, 0);
  }

  .glitch:before {
    left: -1px;
    text-shadow: 1px 0 #ff3f1a;
  }

  .glitch:after {
    left: 1px;
    text-shadow: -1px 0 #00a7e0;
  }
  //#ff3f1a
  .glitch:hover:before {
    text-shadow: 4px 0 #8e44ad;
    animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
  }
  //#00a7e0
  .glitch:hover:after {
    text-shadow: -5px 0 #27ae60;
    animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
  }

  @-webkit-keyframes glitch-loop-1 {
    0% {
      clip: rect(36px, 9999px, 9px, 0);
    }
    25% {
      clip: rect(25px, 9999px, 99px, 0);
    }
    50% {
      clip: rect(50px, 9999px, 102px, 0);
    }
    75% {
      clip: rect(30px, 9999px, 92px, 0);
    }
    100% {
      clip: rect(91px, 9999px, 98px, 0);
    }
  }

  @keyframes glitch-loop-1 {
    0% {
      clip: rect(36px, 9999px, 9px, 0);
    }
    25% {
      clip: rect(25px, 9999px, 99px, 0);
    }
    50% {
      clip: rect(50px, 9999px, 102px, 0);
    }
    75% {
      clip: rect(30px, 9999px, 92px, 0);
    }
    100% {
      clip: rect(91px, 9999px, 98px, 0);
    }
  }

  @-webkit-keyframes glitch-loop-2 {
    0% {
      top: -1px;
      left: 1px;
      clip: rect(65px, 9999px, 119px, 0);
    }
    25% {
      top: -6px;
      left: 4px;
      clip: rect(79px, 9999px, 19px, 0);
    }
    50% {
      top: -3px;
      left: 2px;
      clip: rect(68px, 9999px, 11px, 0);
    }
    75% {
      top: 0;
      left: -4px;
      clip: rect(95px, 9999px, 53px, 0);
    }
    100% {
      top: -1px;
      left: -1px;
      clip: rect(31px, 9999px, 149px, 0);
    }
  }

  @keyframes glitch-loop-2 {
    0% {
      top: -1px;
      left: 1px;
      clip: rect(65px, 9999px, 119px, 0);
    }
    25% {
      top: -6px;
      left: 4px;
      clip: rect(79px, 9999px, 19px, 0);
    }
    50% {
      top: -3px;
      left: 2px;
      clip: rect(68px, 9999px, 11px, 0);
    }
    75% {
      top: 0;
      left: -4px;
      clip: rect(95px, 9999px, 53px, 0);
    }
    100% {
      top: -1px;
      left: -1px;
      clip: rect(31px, 9999px, 149px, 0);
    }
  }
  .header-info {
    width: 63%;
    margin: auto;
    font-size: 16px;
    color: #eaeadf;
    background: rgba(0, 0, 0, 0.8);
    padding: 15px;
    margin-top: 40px;
    letter-spacing: 0;
    line-height: 30px;
    border-radius: 10px;
    box-sizing: initial;
    white-space: nowrap;
  }
  .header-info p {
    margin: 0;
    font-size: 14px;
    font-family: Ubuntu, sans-serif;
    font-weight: 700;
  }

  .header-info p::before {
    content: '"';
  }
  .header-info p::after {
    content: '"';
  }

  .top-social {
    height: 32px;
    margin-top: 30px;
    margin-left: 10px;
    list-style: none;
    display: inline-block;
  }

  .top-social img {
    height: 35px;
    width: 35px;
    padding: 6px;
    background: rgba(0, 0, 0, 0.4);
  }

  .top-social li {
    float: left;
    margin-right: 10px;
  }

  .top-social_v2 {
    height: 32px;
    margin-bottom: -15px;
    margin-left: 10px;
    list-style: none;
    display: inline-block;
  }

  .top-social_v2 img {
    height: 35px;
    width: 35px;
    padding: 6px;
    background: 0 0;
  }

  .top-social_v2 li {
    float: left;
    margin-right: 13px;
  }
  .flipx {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
  }

  //向下图标
  .icon-down {
    width: 30px;
    height: 30px;
    font-size: 30px;
    color: #fff;
    margin:0 auto;
    animation: icon-change 1.2s linear infinite alternate;
    svg {
      width: inherit;
      height: inherit;
    }
  }
  .icon-down:hover {
    cursor: pointer;
  }
  @keyframes icon-change {
    from {
      margin-top: 95px;
    }
    to {
      margin-top: 120px;
    }
  }

  /* 波浪 */
  .waves {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 12vh;
    min-height: 100px;
    max-height: 140px;
  }
  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  //scrollTop-img
  

  // news
  .news {
    width: 100%;
    height: 3000px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    .remind {
      top: 55px;
      position: absolute;
      width: 750px;
      height: 65px;
      background: rgb(253, 255, 253);
      line-height: 65px;
      display: inline-flex;
      border: dashed 0.5px #bdc3c7;
      border-radius: 10px;
      /deep/.anticon-sound {
        font-size: 23px;
        color: #7f8c8d;
        margin-top: 2px;
        margin-left: 16px;
        margin-right: 12px;
      }
      p {
        color: #7f8c8d;
        letter-spacing: 1px;
      }
    }
    .course {
      position: absolute;
      top: 150px;
      width: 750px;
      h1 {
        font-size: 18px;
        width: inherit;
        padding-bottom: 5px;
        border-bottom: dashed 1px #bdc3c7;
        color: rgb(102, 99, 99);
      }
      .course-all-content {
        width: inherit;
        display: inline-flex;
        justify-content: center;
      }
      .course-filter {
        width: inherit;
        height: inherit;
        background-color: rgb(53, 50, 50);
        opacity: 0;
        transition: all 0.5s;
      }
      .course-filter:hover {
        opacity: 0.8;
      }
      .course-icon-content {
        position: relative;
        width: 240px;
        height: 160px;
        border-radius: 10px;
        margin-top: 20px;
        overflow: hidden;
        transition: all 1s;
        margin-right: 10px;
        box-shadow: 1.5px 1.5px 5px rgb(112, 109, 109);
        .course-img {
          position: absolute;
          z-index: -1;
          height: 100%;
          width: 100%;
          transition: all 0.6s;
        }
        .course-content-a {
          position: absolute;
          width: 240px;
          height: 50px;
          background: #000000;
          margin-top: 30px;
          text-align: center;
          line-height: 50px;
          transform: translateX(-240px);
          transition: all 0.6s;
          color: #fff;
          text-transform: uppercase;
          font-size: 19px;
          font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        }
        .course-content-b {
          position: absolute;
          width: 240px;
          height: 60px;
          margin-top: 86px;
          line-height: 60px;
          text-align: center;
          transform: translateX(240px);
          transition: all 0.6s;
          font-style: italic;
          color: #bdc3c7;
          font-size: 12px;
          letter-spacing: 1px;
        }
      }
      .course-icon-content:hover .course-img {
        filter: blur(0.3px);
        transform: scale(1.2);
      }
      .course-icon-content:hover .course-content-a {
        transform: translateX(0);
      }
      .course-icon-content:hover .course-content-b {
        transform: translateX(0);
      }
    }
    .share {
      position: absolute;
      top: 420px;
      width: 750px;
      h1 {
        font-size: 18px;
        width: inherit;
        padding-bottom: 5px;
        border-bottom: dashed 1px #bdc3c7;
        color: rgb(102, 99, 99);
      }
      .share-content1 {
        margin-top: 50px;
        width: 750px;
        height: 300px;
        background: brown;
        border-radius: 10px;
        overflow: hidden;
      }
      .share-info {
        height: 300px;
      }
    }
  }
}
@media screen and (max-width: 799px) {
  .home{
    display: none;
  }
  .tip{
    display: block;
  }
}
</style>
