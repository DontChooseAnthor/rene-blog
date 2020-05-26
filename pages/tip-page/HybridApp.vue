<template>
  <div class="hybrid-app">
      <Nav />
      <div class="container">
        <div class="header" v-lazy:background-image="require('../../assets/home/tipsImage/封面_幽道.jpg')">
          <p class="title1">初探Hybrid App</p>
          <p class="title2">紧跟技术前沿，至少知道是个啥</p>
        </div>
        <div class="article">
          <div class="begin">
            <span>A</span>pp的开发方式发展到今天已经变得多种多样，每种开发方式都对应了其应用场景或者一个开发平台，介绍一下每一种开发方式先
          </div>

          <div class="main-section">
            <div class="section">Native App</div>
            <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container-short">
            即原生App，指利用Android、iOS系统官方提供的开发语言、开发类库、开发工具开发的App
          </div>
          <div class="section-container">
            <dl>
              <dt>优点：</dt>
              <dd>1.原生App因为采用的是由各移动厂商提供的SDK，是基于特定的移动设备的操作系统所设计出来的，因此它的针对性强，与用户的交互体验非常好，性能佳且稳定</dd>
              <dd>2.原生App可以调用其对应系统的底层的接口，使得用户的体验更加流畅，扩展功能更加多样</dd>
              <dd>3.原生App可以在没有网络环境的情况下使用</dd>
              <dt>缺点：</dt>
              <dd>1.软件每个版本都需要在不同的平台独立开发，开发成本较大</dd>
              <dd>2.更新缓慢且用户更新繁琐，每次更新都需要上传到对应系统的应用商店进行审核后才能上架，且需要用户自行到应用商店更新</dd>
            </dl>
          </div>

          <div class="main-section">
            <div class="section">Web App</div>
            <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container-short">
            随着HTML5的出现，衍生出的一种利用Web技术开发的App，这类App依附于浏览器，所以可以化浏览器的优势为自己的优势
          </div>
          <dl>
            <dt>优点：</dt>
            <dd>1.更新迭代快，用户无需单独更新，数据在后台更新即可呈现在用户面前</dd>
            <dd>2.开发成本低，HTML5应用基于浏览器，浏览器本身有跨平台的优势，所以Web App实现了一端开发多端运行</dd>
            <dd>3.不占用用户本地存储，相较于原生App更加的轻量化</dd>
            <dt>缺点：</dt>
            <dd>1.Web App不能脱离网络单独运行</dd>
            <dd>2.功能比原生App简单，无法调用系统底层的接口，如相机、麦克风等</dd>
            <dd>3.交互体验差，不够稳定，依赖网速进行数据交互</dd>
          </dl>

          <div class="main-section">
            <div class="section">Hybrid App</div>
            <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <img src="../../public/Artical/Hybrid/hybrid-app.jpg" alt="">
          <div class="section-container">
            正是因为原生App和Web App都拥有各自的优势和局限性，所以诞生出一种新的开发方式——Hybrid App混合开发，即混合了Native和Web技术的开发，这种开发方式下诞生的应用既有HTML5简单的开发和快速迭代能力，也包含了原生强大的底层功能同时可以使用系统中的原生组件。现在主流的有三种混合方案，以不同的UI渲染机制划分：
            <ul>
              <li>1.基于WebView UI：通过JSBridge实现HTML5和Native的双向通讯，赋予了HTML5一定的原生API</li>
              <li>2.基于Native UI：比如React-Native、Weex等，在赋予原生API的基础上，进一步通过JSBridge将JavaScript解析成虚拟节点树(Virtual DOM)传递到Native并使用原生渲染</li>
              <li>3.基于微信小程序：通过更加定制化的 JSBridge，并使用双 WebView 双线程的模式隔离了JS逻辑与UI渲染，形成了特殊的开发模式，加强了 H5 与 Native 混合程度，提高了页面性能及开发体验</li>
            </ul>
          </div>

          <div class="main-section">
          <div class="section">Hybrid App原理</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container">
            混合开发的技术本质是在原生App中，使用WebView作为容器直接承载Web页面。所以需要实现Native和HTML5之间的跨语言双向通讯机制 —— JSBridge，以下是JSBridge实现的具体方法
          </div>

          <div class="main-section">
          <div class="section">JavaScript 通知 Native</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container-short">
            iOS端：通过iOS UIWebView组件中的方法，它有浏览器记录功能，对加载页面的内容是可编程的<br>
            Android端：基于WebView和API，共有三种方式
            <ul>
              <li>1.通过schema,对 WebView 信息冒泡传递的拦截处理</li>
              <li>2.在WebView页面中直接注入原生JavaScript代码</li>
              <li>3.通过prompt、console、alert这三个原生JavaScript方法</li>
            </ul>
          </div>

          <div class="main-section">
          <div class="section">Native 通知 JavaScript</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container-short">
            Native可以直接通过WebView API执行JavaScript代码
            <div v-html="hybrid1"></div>
          </div>

          <div class="main-section">
          <div class="section">JSBridge代码注入</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <img src="../../public/Artical/Hybrid/JSBridge.jpg" alt="">
          <div class="section-container-short">
            从图中可以看出，实现JSBridge大概分成两个部分：
            <ul>
              <li>1.JSBridge部分：在JavaScript环境中注入JSBridge代码，包含协议的发送、回调、参数等基础功能</li>
              <li>2.Native SDK部分：在原生App中JSBridge的功能映射代码，实现URL拦截解析、通用功能映射等功能</li>
            </ul>
            常用方法是将两部分封装成一个Native SDK，由原生App统一引入，App在初始化WebView页面时，会直接在HTML的头部注入对应的JSBridge代码，这样有很多优点：
            <ul>
              <li>两部分的代码统一维护，避免出现版本不统一的情况</li>
              <li>App的接入方便，只需要接入最新版SDK即可</li>
              <li>Web端不需要关注，有利于将JSBridge开放给第三方页面使用</li>
            </ul>
          </div>

          <div class="main-section">
          <div class="section">HTML5页面呈现</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
          </div>
          <div class="section-container-short">
            App中HTML5页面内容有两种呈现方式
            <ul>
              <li>在线：将HTML5代码部署到服务端，App通过WebView打开特定URL即可</li>
              <li>内置：将HTML5代码打包下发到Native App中，App直接访问本地储存获取数据</li>
            </ul>
          </div>
        </div>
      </div>
      <BackTop />
      <Footer class="footer" />
  </div>
</template>

<script>
import Nav from "../../components/nav";
import BackTop from "../../components/backtop";
import Footer from "../../components/footer";

import 'highlight.js/styles/monokai-sublime.css';
import hybrid1 from '../../public/Artical/Hybrid/hybrid.md'
export default {
  data () {
    return {

    }
  },
  computed: {
    hybrid1(){
      return hybrid1
    }
  },
  components:	{
    Nav,
    BackTop,
    Footer
  },
  methods: {},
}
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
    background-size: 100% auto;
    animation: showHeader 1s ease;
    .title1 {
      width: inherit;
      color: #fff;
      text-align: center;
      margin-top: 23vh;
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
    from{
      transform: translate(100px,100px);
      opacity: 0;
    }
    to{
      transform: translate(0,0);
      opacity: 1;
    }
  }

  .article {
    width: 55vw;
    margin: 0 auto;
    margin-top: 15vh;
    font-weight: 500;
    text-align: justify;
    line-height: 30px;  
    letter-spacing: .5px;
    color: #666;
    animation: showArt 1.5s ease;
    img{
      width: 55vw;
      padding: 0 10vw;
    }
    /deep/pre{
      margin: 10px auto;
      width: 90%;
      padding: 8px;
      background: #222;
      border-radius: 5px;
      color: #fff;
      overflow: scroll;
      opacity: .9;
      letter-spacing: 0;
    }
    // 取消默认的滚动条样式
    /deep/pre::-webkit-scrollbar{
      display: none;
    }
    .begin{
      span{
        font-size: 30px;
        padding: 0;
        font-weight: 600;
        color: orange;
      }
    }
  
    .main-section{
      font-size: 21px; 
      font-weight: 600;
      margin:20px 0;
      margin-top: 60px;
      color: orange;
      position: relative;
      display: inline-flex;
      line-height: 21px;
      
      .section-icon{
        position: absolute;
        right: -30px;
      }
    }
    .section-container{
      img{
      width: inherit;
      }
      ul{
        list-style: none;
        width: 90%;
        border: 1px dashed orange;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        li{
          margin-top: 10px;
        }
      }
      dl{
        width: 90%;
        border: 1px dashed orange;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        dt{
          color: orange;
          font-weight: 600;
        }
      }
    
    }
    .section-container-short{
      text-align: left;
      img{
      width: 55vw;
      }
       ul{
        list-style: none;
        width: 90%;
        border: 1px dashed orange;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
        li{
          margin-top: 10px;
        }
        }
    }

  }
  @keyframes showArt {
    from{
      opacity: 0;
      transform: translateY(500px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.footer{
  margin-top: 150px;
}
</style>