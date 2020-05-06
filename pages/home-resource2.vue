<template>
  <div class="vue-resource">
    <Nav />
    <div class="container">
      <div class="header">
        <p class="title1">Vue响应式源码浅析</p>
        <p class="title2">靠着吃饭的家伙怎么能学不精？</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>V</span>ue最独特的特性，就是非侵入性的响应式系统，数据对象是普通的JavaScript对象，当修改JavaScript中的数据时，网页视图也会进行更新。这使得状态管理非常的简单直接，试试对其工作原理进行简单的探索 
        </div>

        <div class="main-section">
          <div class="section">从图入手</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container-short">
          首先上图，这是Vue官网上关于响应式的实现原理简化图：
          <img src="../public/Artical/Vue/Vue原理.png" alt="">
        </div>
        <div class="section-container">
          当一个普通的JavaScript对象传入Vue实例中作为Data的选项时，Vue会遍历这个对象的所有property。Vue 2.0使用Object.defineProperty将所有的property转化为getter/setter方法。Vue中的每个组件都一个对应的Watcher实例，它会在组件渲染的过程中把接触过的数据property记录为依赖，当依赖项的setter方法触发时，会通知Watcher从而实现对关联组件的重新渲染 <br>

          从原理图上可以看出Vue是通过数据劫持结合观察者模式实现的响应式，其中还有很多细节没有标出，接下来继续通过一步一步模拟响应式的流程来加深理解
        </div>

        <div class="main-section">
          <div class="section">initState——初始化data</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div v-html="initState1"></div>
        <div class="section-container">
          Vue会在beforeCreated和created生命周期之间执行initState函数初始化数据，下面是initState函数的源码：
        </div>
        <div v-html="initState2"></div>
        <div class="section-container">
          <ul>
            <li>首先它区分了data是函数还是直接量赋值，在Vue组件中都是以函数的形式封装返回data，这样是为了避免在组件复用的时候，组件和组件之间的同名变量互相影响</li>
            <li>然后它用proxy方法将vm._data属性重定向到vm中
              <div v-html="initState3"></div>
              将data重定向到vm的时候，proxy的方法还将vm属性用Object.defineProperty定义成了存取器属性。这样做的目的是当data是数组时，将它的序列号当成key组合成了个对象
            </li>
            <li>执行observe方法
              <div v-html="initState4"></div>
              在判断完value的值类型以后，添加了Dep原型方法构建的实例，同时使用原型方法walk处理value，walk中的defineReactive$$1方法是响应式的核心部分，接下来先看看defineReactive$$1方法做了什么
              <div v-html="initState5"></div>
              在defineReactive$$1方法中，对data进行了重新的setter和getter的定义，在getter中出现dep.depend()（前提是具有Dep.target,它就是Watcher，只有在触发Watcher的时候才会进行依赖的收集）,其实这就是VUE的依赖收集方法，在改变data时触发set方法，如果之前有get时有进行依赖的收集，那么它就会触发dep.notify()中的render方法<br>
              关于Dep函数到底是什么，它有什么用呢？
              <div v-html="initState6"></div>
              Dep中的subs就是Watcher的存储池，当执行dep.depend()的时候就向subs中添加一个watcher，至此整个initState阶段执行完毕
            </li>

          </ul>
        </div>

        <div class="main-section">
          <div class="section">Watcher的执行</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div v-html="watcher1"></div>
        <div class="section-container">
          new Watcher()是在beforeMount和mounted生命周期之间执行的，watcher函数做了什么呢？
        </div>
        <div v-html="watcher2"></div>
        <div class="section-container">
          后续处理都在Watcher.prototype.get中完成了。可以看到收集完依赖后，执行了this.cleanupDeps()，对依赖进行了重新的整理，旧的没用的依赖将会被剔除，最后将更新的数据渲染要页面中，整个过程结束
        </div>  
      </div>
    </div>
    <BackTop />
    <Footer class="footer" />
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";

import 'highlight.js/styles/monokai-sublime.css';
import initState1 from '../public/Artical/Vue/初始化数据1.md'
import initState2 from '../public/Artical/Vue/初始化数据2.md'
import initState3 from '../public/Artical/Vue/初始化数据3.md'
import initState4 from '../public/Artical/Vue/初始化数据4.md'
import initState5 from '../public/Artical/Vue/初始化数据5.md'
import initState6 from '../public/Artical/Vue/初始化数据6.md'
import watcher1 from '../public/Artical/Vue/执行watcher1.md'
import watcher2 from '../public/Artical/Vue/执行watcher2.md'
export default {
  data () {
    return {

    }
  },
  computed: {
    initState1(){
      return initState1
    },
    initState2(){
      return initState2
    },
    initState3(){
      return initState3
    },
    initState4(){
      return initState4
    },
    initState4(){
      return initState4
    },
    initState5(){
      return initState5
    },
    initState6(){
      return initState6
    },
    watcher1(){
      return watcher1
    },
    watcher2(){
      return watcher2
    },
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
    background-image: url("../assets/resource/2.jpg");
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
    }
    .section-container-short{
      text-align: left;
      img{
      width: 55vw;
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