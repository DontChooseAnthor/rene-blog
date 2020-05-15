<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">Flex&amp;Grid</p>
        <p class="title2">CSS3搞出来的前端布局方式~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>说</span>起前端布局，大部分人都会想起传统模型布局，然而传统布局有一定的局限性，比如实现垂直居中的问题。因此网页开发中制定了新的布局方式——Flex&amp;Grid
        </div>

        <div class="main-section">
          <div class="section">传统模型布局</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
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
          <div class="section">Flex布局</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          flex布局是Flexible Box的缩写，翻译过来就是弹性盒子，它的作用就是给盒子模型提供更大的灵活性。flex布局通过在CSS中设置display:flex进行开启，这个属性会作用于设置元素和它的所有子元素上。并且处于flex布局的元素和子元素中的float、clear、vertical-align属性都会失效 <br>
          设置display:flex属性的元素又称为容器，容器的设定存在两根轴线，水平的主轴和垂直的纵轴，子元素默认沿主轴排列
        </div>
        <div class="section-container-short">
          <dl>
            <dt>flex容器:</dt>
              <dd>flex-direction:子元素的排列轴方向</dd>
              <dd>flex-wrap:子元素是否换行</dd>
              <dd>flex-flow:flex-direction和flex-wrap的组合形式</dd>
              <dd>justify-content:子元素在主轴上的对齐方式</dd>
              <dd>align-items:子元素在纵轴上如何对齐</dd>
              <dd>align-content:多根轴线的对齐方式</dd>
            <dt>flex子元素:</dt>
              <dd>order:子元素的排列顺序</dd>
              <dd>flex-grow:子元素的放大比例</dd>
              <dd>flex-shrink:子元素的缩小比例</dd>
              <dd>flex-shrink:子元素占据的主轴空间</dd>
              <dd>flex:flex-grow、flex-shrink、flex-shrink的复合简写</dd>
              <dd>align-self:单个子元素不同的对齐方式</dd>
          </dl>
        </div>

        <div class="main-section">
          <div class="section">Grid布局</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          grid布局又叫网格布局，它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。grid布局通过在CSS中设置display:grid开启<br>
          <b>Grid布局和Flex布局的区别</b> <br>
          grid和flex布局十分相似，但却有极大的不同。Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局 <br>
          在二维布局中，m行和n列会产生n.m个单元格，m行有m+1条水平网格线，n列有n+1条垂直网格线
          <dl>
            <dt>grid容器:</dt>
              <dd>grid-template-columns:列宽</dd>
              <dd>grid-template-rows:行高</dd>
              <dd>grid-row-gap:行间距</dd>
              <dd>grid-column-gap:列间距</dd>
              <dd>grid-gap:grid-row-gap和grid-column-gap的复合简写</dd>
              <dd>grid-template-areas:网格区域</dd>
              <dd>grid-auto-flow:子元素放置顺序</dd>
              <dd>justify-items:网格内容水平位置</dd>
              <dd>align-items:网格内容垂直位置</dd>
              <dd>place-items:justify-items和align-items的复合简写</dd>
            <dt>grid子元素:</dt>
              <dd>grid-column-start:左边框所在的垂直网格线</dd>
              <dd>grid-column-end:右边框所在的垂直网格线</dd>
              <dd>gird-row-start:左边框所在的水平网格线</dd>
              <dd>gird-row-end:右边框所在的水平网格线</dd>
              <dd>grid-column:grid-column-start和grid-column-end的复合简写</dd>
              <dd>grid-row:gird-row-start和gird-row-end的复合简写</dd>
              <dd>grid-area:子元素的放置区域</dd>
              <dd>justify-self:网格内容的水平位置</dd>
              <dd>align-self:网格内容的垂直位置</dd>
              <dd>place-self:justify-self和align-self的复合简写</dd>
          </dl>
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