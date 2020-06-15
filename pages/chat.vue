<template>
  <div>
    <re-article>
      <div class="header">
      <!-- 渐进加载 -->
        <template v-for="(item,index) in imgs">
          <div class="progressive" :key="index">
            <img class="preview" :src="item.preview" v-progressive="item.src" alt="">
          </div>
        </template>

        <p class="title1">杂谈</p>
        <p class="title2">快进来，在火炉旁找个位置随便坐~</p>
      </div>
      <div class="article">
        <nuxt-link class="chat-page" to="./chat-page/Flex&Grid">
        <showPage>
          <img slot="themeImage" v-lazy="pageShare[0]" alt="">
          <h2 slot="themeTitle">Flex&amp;Grid</h2>
          <p slot="themeContain">说起前端布局，大部分人都会想起传统模型布局，然而传统布局有一定的局限性，比如实现垂直居中的问题。因此网页开发中制定了新的布局方式——Flex&amp;Grid</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/IndexedDB">
        <showPage>
          <img slot="themeImage" v-lazy="pageShare[1]" alt="">
          <h2 slot="themeTitle">IndexedDB</h2>
          <p slot="themeContain">随着浏览器功能的不断增强，网站也需要开始考虑如何将大量的数据储存在客户端，以此减少服务器端的压力，同时直接从本地获取数据也能优化用户体验<br>现有的浏览器数据储存方案都适合大量数据储存：Cookie、LocalStorage。所以诞生出了一种新的解决方案——IndexedDB</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/Nuxt.js">
        <showPage>
          <img slot="themeImage" v-lazy="pageShare[2]" alt="">
          <h2 slot="themeTitle">Nuxt.js</h2>
          <p slot="themeContain">本网站正是基于Nuxt.js开发而成的，服务器端渲染是一个之前从未接触过的概念，随着油了一段时间的Vue，我了解了很多SPA的弊端后，着手开始学习SSR，本网站就是学习过程中的作品之一</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/Axios">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[3]" alt="">
          <h2 slot="themeTitle">Axios</h2>
          <p slot="themeContain">Axios是一个基于promise的HTTP库，可以用在浏览器和Node.js中，稍微分析下源码，了解一下它的内在</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/Fire">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[4]" alt="">
          <h2 slot="themeTitle">火法循环</h2>
          <p slot="themeContain">从6.8一路走到8.3，见识过7.0初期的奥法机关枪，也见证了热能冰流派的诞生，但是玩起来都不如火法的手感，每次转到其他流派一段时间后又会回到火法。虽然手感好吧，但是辉煌都是别人的，这火法在自己手上怎么总有股下水道味儿</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/HTTPBase">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[5]" alt="">
          <h2 slot="themeTitle">HTTP基本原理</h2>
          <p slot="themeContain">本HTTP协议（HyperText Transfer Protocol，超文本传输协议）是用于从WWW服务器传输超文本到本地浏览器的传送协议。它可以使浏览器更加高效，使网络传输减少。它不仅保证计算机正确快速地传输超文本文档，还确定传输文档中的哪一部分，以及哪部分内容首先显示(如文本先于图形)等</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/Node.jsMid">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[6]" alt="">
          <h2 slot="themeTitle">NodeJS中间件</h2>
          <p slot="themeContain">中间件在NodeJS中被广泛使用，它是一种特定的设计模式、一套处理单元和过滤器，以函数的形式存在，组合在一起形成一个异步队列，从而对数据进行预处理或者后处理 <br>
        中间件的优势在于灵活，使用中间件可以通过极少的操作实现插件的效果</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/HTTPCache">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[7]" alt="">
          <h2 slot="themeTitle">HTTP缓存ZooTeam搬运</h2>
          <p slot="themeContain">HTTP 的缓存机制，可以说这是前端工程师需要掌握的重要知识点之一。本文将针对 HTTP 缓存整体的流程做一个详细的讲解，争取做到大家读完整篇文章后，对缓存有一个整体的了解</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/VueOptimize">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[8]" alt="">
          <h2 slot="themeTitle">Vue的九种优化方法</h2>
          <p slot="themeContain">前端用户体验很大一部分占比来自于流畅度，提升流畅度的方法有很多，其中九种常见的方法被Guillaume Chau大神总结出来</p>
        </showPage>
        </nuxt-link>
        <nuxt-link class="chat-page" to="./chat-page/WebpackTheory">
          <showPage>
          <img slot="themeImage" v-lazy="pageShare[9]" alt="">
          <h2 slot="themeTitle">webpack原理</h2>
          <p slot="themeContain">webpack是一个现代JavaScript应用程序的静态模块打包器，当webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle</p>
        </showPage>
        </nuxt-link>
      </div>
      <Music />

    </re-article>
  </div>
</template>

<script>
import reArticle from "../components/article";
import showPage from '../components/showpage'
import Music from '../components/music'

export default {
  data() {
    return {
      pageShare:[
        require("../assets/resource/封面_暗流LOW.jpg"),
        require("../assets/resource/封面_古迹LOW.jpg"),
        require("../assets/resource/封面_森林LOW.jpg"),
        require("../assets/resource/封面_橱窗LOW.jpg"),
        require("../assets/resource/封面_远眺LOW.jpg"),
        require("../assets/resource/封面_车站LOW.jpg"),
        require("../assets/resource/封面_门关LOW.jpg"),
        require("../assets/resource/封面_夕阳LOW.jpg"),
        require("../assets/resource/封面_鸟居LOW.jpg"),
        require("../assets/resource/封面_瀑布LOW.jpg"),
      ],
      imgs:[
        {
          src:require('../assets/resource/封面_万圣节.jpg'),
          preview:require('../assets/resource/封面_万圣节LOW.jpg')
        }
      ]
    };
  },
  components: {
    reArticle,
    showPage,
    Music

  },
  methods: {}
};
</script>

<style lang="less" scoped>
.chat-page {
  text-decoration: none;
  color: #666;
  width: 80vw;
}
</style>