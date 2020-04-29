<template>
  <div class="promise-resource">
      <Nav />
      <div class="container">
        <div class="header">
          <p class="title1">Promise理解及原理</p>
          <p class="title2">ES6提供最优的异步编程方案</p> 
        </div>
        <div class="article">

        </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Nav from '../components/nav'
import BackTop from '../components/backtop'
import Footer from '../components/footer'
export default {
  data () {
    return {

    }
  },
  components:	{
    Nav,
    BackTop,
    Footer
  },
  methods: {}
}
</script>

<style lang="less" scoped>
  .container{
    .header{
      width: 100%;
      height: 50vh;
      background-image: url('../assets/resource/1.jpg');
      background-size: 100% auto;
      .title1{
        width: inherit;
        color: #fff;
        text-align: center;
        margin-top: 25vh;
        position: absolute;
        font-size: 30px;
      }
      .title2{
        color: #fff;
      }
    }
  }
</style>