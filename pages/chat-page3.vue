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
          SPA既然有如此多的优点，为什么人们呢
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