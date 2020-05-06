<template>
  <div class="promise-resource">
    <Nav />
    <div class="container">
      <div class="header">
        <p class="title1">Promise的一些理解</p>
        <p class="title2">无论何时，ES6的基础永远是最重要的~</p>
      </div>
      <div class="article">

        <div class="begin"><span>如</span>果把ES6比作一顶皇冠的话，那Promise大概就是皇冠上的一颗珍珠。它作为一种新的异步执行解决方式，一直都是面试官所青睐的提问对象，我想借这次机会稍微揭开Promise的神秘面纱~</div>
        
        <div class="main-section">
          <div class="section">前言</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          由于JavaScript中所有代码都是单线程的特点，导致JavaScript中所有网络操作、浏览器事件都必须异步执行，异步执行的结果通过回调函数处理并返回。如果结果需要通过多次回调处理，则会出现层层嵌套的结构，俗称回调地狱，会严重降低代码的可读性和可维护性。在ES6中为了解决这种回调套回调的弊端，引入了Promise对象和Generator函数 
        </div>
        <div v-html="PromiseObj"></div>
        <div class="section-container">
          构造函数中可以看出，Promise对象有三个状态：pending(进行中),fulfilled(成功),rejectd(失败)，这个简化函数中fulfilled状态对应resolved。Promise对象的初始状态始终是pending，它代表异步操作的结果，可以被修改为resolved和rejected，无论是修改成什么值，之后都无法再次修改，这也是Promise命名的由来，承诺的结果永远无法改变
        </div>

        <div class="main-section">
          <div class="section">Promise实例</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div v-html="PromiseNew"></div>
        <div class="section-container">
          Promise构造函数接受一个函数作为参数，函数的两个参数分别是resolve和reject，分别对应Promise对象状态的成功和失败的状态调用的函数，它们会将异步操作的结果作为参数传递出去
        </div>

        <div class="main-section">
          <div class="section">Then</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          then方法的作用时为Promise实例添加状态改变时的回调函数，且then方法返回的是一个新的Promise实例，所以可以采用链式写法，解决了异步函数回调地狱的问题
          它本质是一个Promise的原型方法，类似源码的函数如下所示：
        </div>
        <div v-html="thenObj"></div>

        <div class="main-section">
          <div class="section">Catch</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          Promise.prototype.catch()方法是.then(null,rejection)或.then(undifined,rejection)的别名，用于指定发生错误时的回调函数
        </div>
        <div v-html="catchObj"></div>
        <div class="section-container">
          不要在then()方法中定义reject状态的回调函数，永远使用catch方法捕获reject状态抛出的错误。catch方法对于Promise对象非常重要，因为Promise对象的错误具备冒泡的特性，会通过.then方法一直向后传递，直到被catch方法捕获才终止冒泡。同样的，不用catch方法指定处理错误的回调函数，Promise对象抛出的错误在外部是无法传递到外部的
        </div>

        <div class="main-section">
          <div class="section">Finally</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          finally方法适用于不受Promise对象状态约束，最后都会执行的操作，由ES2018引入
        </div>
        <div v-html="finallyObj"></div>
        <div class="section-container">
          上面代码中，then和catch方法根据Promise状态调用对应的回调函数，但是最终都会调用finally方法，不管状态是resolved还是rejected

          finally方法的回调函数不接受任何参数，无法知道Promise对象的状态，因此脱离对Promise状态的依赖
        </div>
        
        <div class="main-section">
          <div class="section">All</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          all方法是将多个Promise对象包装成一个新的Promise对象，它有以下几个特点:
          <ul>
            <li>1. all返回的Promise对象的状态只有在所有子对象状态都是resolved才是resolved，其它情况返回rejected</li>
            <li>2. all返回的Promise的完成状态的结果是一个数组</li>
            <li>3. 如果参数不包含Promise对象，则返回一个异步完成</li>
          </ul>
        </div>
        <div v-html="allObj"></div>

        <div class="main-section">
          <div class="section">Race</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          race方法和all方法类似，不过race返回的Promise对象的状态是根据率先返回状态的子对象来的，也就是谁先完成谁先返回状态，race的Promise对象的状态就会变成这个状态
        </div>
        <div v-html="raceObj"></div>
        <div class="section-container">
          如果传的参数数组是空，则返回的 promise 将永远等待。
          如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 Promise.race 将解析为迭代中找到的第一个值
        </div>

        <div class="main-section">
          <div class="section">Resolve</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          resolve方法用来将一个现有对象转化为Promise对象
        </div>
        <div v-html="resolveObj"></div>
        <div class="section-container">
          resolve接受的参数分四种情况:
          <ul>
            <li>1. 参数是Promise实例：resolve不做任何改变并返回这个实例</li>
            <li>2. 参数是thenable对象：thenable对象是指具有then方法的对象，在将对象转化为Promise对象后，就会立即执行thenable对象的then方法</li>
            <li>3. 参数不是对象：返回一个状态为resolved的新Promise对象</li>
            <li>4. 没有参数：直接返回一个状态为resolved的新Promise对象</li>
          </ul>
        </div>

        <div class="main-section">
          <div class="section">Reject</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          reject方法返回一个状态为rejected的新Promise对象
        </div>
        <div v-html="rejectObj"></div>
        <div class="section-container">
          reject方法的参数，会直接作为reject状态返回的错误状态，以供后续的方法作为参数调用
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

// 引入highlight样式
import 'highlight.js/styles/monokai-sublime.css';
import PromiseObj from '../public/Artical/Promise/Promise对象.md'
import PromiseNew from '../public/Artical/Promise/Promise实例.md'
import thenObj from '../public/Artical/Promise/then方法.md'
import catchObj from '../public/Artical/Promise/catch方法.md'
import finallyObj from '../public/Artical/Promise/finally.md'
import allObj from '../public/Artical/Promise/all.md'
import raceObj from '../public/Artical/Promise/race.md'
import resolveObj from '../public/Artical/Promise/resolve.md'
import rejectObj from '../public/Artical/Promise/reject.md'


export default {
  data() {
    return {
      
    };
  },
  computed: {
    PromiseObj(){
      return PromiseObj
    },
    PromiseNew(){
      return PromiseNew
    },  
    thenObj(){
      return thenObj
    },
    catchObj(){
      return catchObj
    },
    finallyObj(){
      return finallyObj
    },
    allObj(){
      return allObj
    },
    raceObj(){
      return raceObj
    },
    resolveObj(){
      return resolveObj
    },
    rejectObj(){
      return rejectObj
    },
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
      ul{
        list-style: none;
        width: 90%;
        border: 1px dashed orange;
        margin: 5px auto;
        text-align: left;
        padding: 15px 15px;
        border-radius: 10px;
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