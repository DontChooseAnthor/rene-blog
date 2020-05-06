<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">flex和grid</p>
        <p class="title2">CSS3搞出来的前端布局方式~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>说</span>起前端布局，大部分人都会想起传统模型布局，然而传统布局有一定的局限性，比如实现垂直居中的问题。因此网页开发中制定了新的布局方式——flex和grid
        </div>

        <div class="main-section">
          <div class="section">传统模型布局</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container-short">
          传统模型布局分三种模型，三种模型互相搭配形成布局
          <dl>
             <dt>1.流动模型(Flow):</dt>
             <dd>流动模型是默认的网页布局模式，即块级元素自上而下按顺序垂直延伸分布，因为在默认情况下块级元素宽度总是100%；行内元素都会在所处的包含元素内从左到右水平分布显示</dd>
             <dt>2.浮动模型(Float):</dt>
             <dd>当元素css属性中设置了float，则它将依照浮动的位置进行特定的定位</dd>
             <dt>3.层模型(Layer):</dt>
             <dd>即三种position关系:</dd>
             <dd>#1.relative(相对定位)</dd>
             <dd>#2.absolute(绝对定位)</dd>
             <dd>#3.fixed(固定定位)</dd>
          </dl>
          所以传统模型布局就是<b>盒模型+display属性+position属性+float属性</b>组合而成
        </div>

        <div class="main-section">
          <div class="section">flex布局</div>
          <font-awesome-icon class="section-icon" :icon="['fas','dog']" />
        </div>
        <div class="section-container">
          flex布局是Flexible Box的缩写，翻译过来就是弹性盒子，它的作用就是给盒子模型提供更大的灵活性。flex布局通过在CSS中设置display:flex进行开启，这个属性会作用于设置元素和它的所有子元素上。并且处于flex布局的元素和子元素中的float、clear、vertical-align属性都会失效。
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
    background-image: url("../assets/resource/4.jpg");
  }
</style>