<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">flex和grid</p>
        <p class="title2">CSS3搞出来的前端布局方式~</p>
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