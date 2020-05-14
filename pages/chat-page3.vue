<template>
  <div>
      <re-article>
      <div class="header">
        <p class="title1">Nuxt.js</p>
        <p class="title2">传说中的服务器端渲染(SSR)</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>本</span>网站正是基于Nuxt.js开发而成的，服务器端渲染是一个之前从未接触过的概念，随着油了一段时间的Vue，我了解了很多SPA的弊端后，着手开始学习SSR，本网站就是学习过程中的作品之一—— <a  target="_blank" href="https://www.nuxtjs.cn/">Nuxt.js官网点我</a>
        </div>
        <div class="main-section">
          <div class="section">SPA和SSR</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          很久很久以前，网页开发前后端并不分离，由于前端页面较为简单，所以通过后端渲染出模板直接通过服务器展现到浏览器上。后来，随着前端页面逐渐花哨起来，前端就从后端独立出来自立门户，也随之出现了前后端分离开发的模式。SPA的出现使得前端开发变得简单，但是也带来了一些问题... <br>
          <dl>
            <dt>SPA的诸多优点：</dt>
            <dd>1.降低了与后端的耦合度，解放前端开发的关注点</dd>
            <dd>2.数据通过异步获取，页面不会频繁刷新，对网络要求小，用户体验丝滑</dd>
            <dd>3.服务器不再需要传递页面模板，减轻了服务器压力</dd>
          </dl>
          SPA既然有如此多的优点，为什么人们还是不满意呢？<br>
          因为SPA有个致命的缺点：<b>SEO极度不友好</b>，整个页面在没有被浏览器渲染之前，就是一个基础结构空网页。SPA对SEO爬虫是天生免疫，使得搜索引擎完全无法抓取你网页中的内容，最终导致你的网页无法通过搜索引擎搜索关键词推广，与这个流量横行的时代实在有点格格不入。所以最终网页还是得通过预渲染向搜索引擎的爬虫们妥协。<br>
          这里就出现了一种剩饭新炒的概念——SSR，即重回后端渲染，这次与远古时代不同的是，前端来完成后端的活。这里就需要Node.js了，Node作为一种可以脱离浏览器的JavaScript环境，理所应当的承担起了后端的大梁。<br>
          Nuxt.js是Vue SSR中比较受欢迎且有强大社区支持的框架，它集成了很多开发中依赖选项，可以和Vue CLI一样一步到位。
          <dl>
            <dt>Nuxt.js特性：</dt>
            <dd>基于Vue.js</dd>
            <dd>自动代码分层</dd>
            <dd>服务端渲染</dd>
            <dd>强大的路由功能，支持异步数据</dd>
            <dd>静态文件服务</dd>
            <dd>ES2015+语法支持</dd>
            <dd>打包和压缩JS和CSS</dd>
            <dd>HTML头部标签管理</dd>
            <dd>本地开发支持热加载</dd>
            <dd>集成ESLint</dd>
            <dd>支持所有样式预处理器</dd>
            <dd>支持HTTP/2推送</dd>
          </dl>
        </div>

        <div class="main-section">
          <div class="section">Nuxt.js流程周期</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          Nuxt.js是基于Vue.js的，所以它也有类似生命周期的概念，不过与Vue的生命周期有一定的不同。Vue生命周期中的mount、update和destroy都是作用在客户端页面中的，所以在Nuxt服务器端渲染过程中是不存在的。这里介绍一下Nuxt特有的流程周期,先上图
          <img src="../public/Artical/Nuxt/nuxt-schema.svg" alt="">
          <dl>
            <dt>nuxtServerInit:</dt>
            <dd>当在Nuxt中使用Vuex之后，即可在状态树中使用这个方法。Nuxt.js在调用它的时候会将页面的上下文对象作为第二参数传递给它,也就是实现了服务端操作Vuex的状态树</dd>
            <dt>middleware:</dt>
            <dd>页面在服务端渲染前执行的函数，它可以在nuxt.config.js、layouts、pages中使用，它主要是用来加载中间件对数据进行处理</dd>
            <dt>validate():</dt>
            <dd>该方法可以在动态路由对象的页面组件中配置校验方法，用来校验动态路由参数是否有效</dd>
            <dt>asyncData()&fetch()</dt>
            <dd>asyncData是加载组件之前在服务端或路由更新前调用，可以进行异步获取数据并返回当前组件</dd>
            <dd>fetch用于渲染页面前填充应用的状态树数据</dd>
          </dl>
        </div>
        <div class="main-section">
          <div class="section">静态化</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          Nuxt.js的一个最主要的创新点就是将SPA应用静态化处理，通过nuxt generate命令实现。它会对每一个Vue页面都生成一个index.html静态页面，这样的优势是可以极大的提高页面访问速度。但是缺点也很明显，就是页面中的数据不能再动态更新，整个网页变成了纯静态页面。
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
export default {
  data () {
    return {

    }
  },
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>
  .header{
    background-image: url('../assets/resource/7.jpg');
  }
  .article{
    .begin{
      a{
        text-decoration: none;
        font-weight: 700;
        color: #55efc4;
      }
    }
  }
</style>