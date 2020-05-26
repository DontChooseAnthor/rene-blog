<template>
  <div>
    <re-article>
      <div class="header" v-lazy:background-image="require('../../assets/resource/封面_门关.jpg')">
        <p class="title1">NodeJS中间件</p>
        <p class="title2">洋葱模型有点意思~</p>
      </div>
      <div class="article">
        <div class="begin">
        <span>中</span>间件在NodeJS中被广泛使用，它是一种特定的设计模式、一套处理单元和过滤器，以函数的形式存在，组合在一起形成一个异步队列，从而对数据进行预处理或者后处理 <br>
        <br> <b>中间件的优势在于灵活，使用中间件可以通过极少的操作实现插件的效果</b>
      </div>
        <div class="main-section">
          <div class="section">常规中间件模式</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          中间件模式中，最基础的组成部分就是<b>中间件管理器</b>，用它来组织和执行中间件的函数，如下图所示：
          <img src="../../public/Artical/node mid/node1.webp" alt="">
          要实现中间件模式，最重要的实现细节是：
          <ul>
            <li>可以通过调用use()函数来注册新的中间件，通常，新的中间件只能被添加到高压包带的末端，但不是严格要求这么做</li>
            <li>当接收到需要处理的新数据时，注册的中间件在意不执行流程中被依次调用。每个中间件都接受上一个中间件的执行结果作为输入值</li>
            <li>每个中间件都可以停止数据的进一步处理，只需要简单地不调用它的毁掉函数或者将错误传递给回调函数。当发生错误时，通常会触发执行另一个专门处理错误的中间件</li>
          </ul>
          至于怎么处理传递数据，目前没有严格的规则，一般有几种方式:
          <ul>
            <li>通过添加属性和方法来增强</li>
            <li>使用某种处理的结果来替换 data</li>
            <li>保证原始要处理的数据不变，永远返回新的副本作为处理的结果</li>
          </ul>
          而具体的处理方式取决于中间件管理器实现方式以及中间件本身要完成的任务类型 <br>

          NodeJS有两个较常用的框架——Koa和Express，它们的中间件原理有所不同，抽象来说一个是线性执行顺序，一个是洋葱模型<br>
        </div>
        <div class="main-section">
          <div class="section">Express中间件模式</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          express中间件是按照顺序一个个执行，通常会将 response 响应写在最后一个中间件中
          <dl>
            <dt>Express中间件主要特点：</dt>
            <dd>用app.use注册中间件</dd>
            <dd>遇到Http请求，根据path和method判断触发哪些中间件</dd>
            <dd>通过next方法触发下一个中间件</dd>
          </dl>
          <div v-html="express1"></div>
          在代码中express中间件中的next()是异步执行的，所以结果以线性输出，如果取消了异步执行，则会改变输出结果：
          <div v-html="express2"></div>
          express的response在最后一个中间件，其他中间件next()后的代码是无法影响输出结果的
        </div>
        <div class="main-section">
          <div class="section">Koa中间件模式</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <img src="../../public/Artical/express-koa/o_onion.png" alt="">
          Koa中间件是通过async await实现的，中间件执行顺序即是上图这个洋葱模型
          <div v-html="koa1"></div>
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../../components/article'
import 'highlight.js/styles/monokai-sublime.css';
import express1 from '../../public/Artical/express-koa/express1.md'
import express2 from '../../public/Artical/express-koa/express2.md'
import koa1 from '../../public/Artical/express-koa/koa1.md'
export default {
  data () {
    return {

    }
  },
  computed: {
    express1(){
      return express1
    },
    express2(){
      return express2
    },
    koa1(){
      return koa1
    },
  },
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>

</style>