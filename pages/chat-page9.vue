<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">Vue的九种优化方法</p>
        <p class="title2">来自于Guillaume Chau大神在19年开发大会上的总结~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>前</span>端用户体验很大一部分占比来自于流畅度，提升流畅度的方法有很多，其中九种常见的方法被Guillaume Chau大神总结出来
          </div>
          <div class="section-container">
             <dl>
            <dt>函数型组件：</dt>
            <dd>由于Vue中每个组件都包含一整套的生命周期，当组件很多时，势必会拖慢整个应用。有一些组件的作用仅仅是已有数据的展示，无需生命周期，此时使用函数型组件就避免了性能的损耗
            <div v-html="vue1"></div>
            </dd>
            <dt>子组件拆分：</dt>
            <dd>将复杂计算的处理放在子组件中处理
              <div v-html="vue2"></div>
            </dd>
            <dt>局部变量：</dt>
            <dd>引用computed数据进行计算的时候可以使用局部变量，就避免了多次重复的计算
              <div v-html="vue3"></div>
            </dd>
            <dt>多用v-show代替v-if</dt>
            <dd>有些组件显示状态切换的较为频繁，这时使用v-show更好，v-show不会影响DOM，比起v-if提高了性能
              <div v-html="vue4"></div>
            </dd>
            <dt>keep-alive：</dt>
            <dd>使用keep-alive避免在路由切换时，需要重复渲染组件
              <div v-html="vue5"></div>
            </dd>
            <dt>延迟加载Defer:</dt>
            <dd>通过设定延迟的方式分开加载页面内容，一定程度上提高了用户对于流畅度的感受，并不会实际提高性能
              <div v-html="vue6"></div>
            </dd>
            <dt>分批处理:</dt>
            <dd>通过requestAnimationFrame分批次执行大数据量的计算，防止一次性执行的数据量太大影响到页面渲染速度
              <div v-html="vue7"></div>
            </dd>
            <dt>非响应式模式:</dt>
            <dd>有些组件中的data是静态的，不需要响应式，则可以通过设置非响应式模式优化
              <div v-html="vue8"></div>
            </dd>
            <dt>仅渲染可视化部分:</dt>
            <dd>对于长列表一类资源的特殊优化,例如使用vue-virtual-scroller组件优化列表资源
              <div v-html="vue9"></div>
            </dd>

          </dl>
          </div>

      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
import 'highlight.js/styles/monokai-sublime.css';
import vue1 from '../public/Artical/vue-better/vue1.md'
import vue2 from '../public/Artical/vue-better/vue2.md'
import vue3 from '../public/Artical/vue-better/vue3.md'
import vue4 from '../public/Artical/vue-better/vue4.md'
import vue5 from '../public/Artical/vue-better/vue5.md'
import vue6 from '../public/Artical/vue-better/vue6.md'
import vue7 from '../public/Artical/vue-better/vue7.md'
import vue8 from '../public/Artical/vue-better/vue8.md'
import vue9 from '../public/Artical/vue-better/vue9.md'

export default {
  data () {
    return {

    }
  },
  computed: {
    vue1(){
      return vue1
    },
    vue2(){
      return vue2
    },
    vue3(){
      return vue3
    },
    vue4(){
      return vue4
    },
    vue5(){
      return vue5
    },
    vue6(){
      return vue6
    },
    vue7(){
      return vue7
    },
    vue8(){
      return vue8
    },
    vue9(){
      return vue9
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
    background-image: url("../assets/resource/13.jpg");
  }
</style>