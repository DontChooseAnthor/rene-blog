<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">Axios</p>
        <p class="title2">不惜抛弃vue-resource，获得了Vue作者大大力推荐~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>A</span>xios是一个基于promise的HTTP库，可以用在浏览器和Node.js中，稍微分析下源码，了解一下它的内在
        </div>
        <div class="main-section">
          <div class="section">Axios请求</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <div v-html="axios1"></div>
          项目的入口是axios.js，当axios被引入项目中时，导入的其实是一个方法，可以直接调用这个方法来发起请求
          <div v-html="axios2"></div>
          为了方便对get、post等方法的调用，把所有Axios.prototype的方法都绑定到axios上。utils.extend(instance, context)这行代码是为了帮助我们能够通过axios访问到context上面的属性，context里面包含拦截器(interceptors)以及配置属性值(defaults) <br>
          axios创建请求后会返回一个Promise实例，axios.all实际就是在调用promise.all
          <div v-html="axios3"></div>
        </div>
        <div class="main-section">
          <div class="section">请求复用和拦截器</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          Axios的构造函数是如何实现的呢？
          <div v-html="axios4"></div>
          Axios.js主要用来复用请求方法以及实现拦截器 <br>
          当使用Axios的实例取发送请求，使用了get、post等都是复用了request方法，在request方法中通过 arguments 获取传入的参数，实现了传入参数的重载 <br>
          Axios.js中调用InterceptorManager中的方法来创建拦截器
          <div v-html="axios5"></div>
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
import 'highlight.js/styles/monokai-sublime.css';
import axios1 from '../public/Artical/axios/axios1.md'
import axios2 from '../public/Artical/axios/axios2.md'
import axios3 from '../public/Artical/axios/axios3.md'
import axios4 from '../public/Artical/axios/axios4.md'
import axios5 from '../public/Artical/axios/axios5.md'


export default {
  data () {
    return {

    }
  },
  computed: {
    axios1(){
      return axios1
    },
    axios2(){
      return axios2
    },
    axios3(){
      return axios3
    },
    axios4(){
      return axios4
    },
    axios5(){
      return axios5
    },
  },  
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>
  .header{
    background-image: url("../assets/resource/8.jpg");
  }
</style>