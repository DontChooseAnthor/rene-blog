<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">杂谈</p>
        <p class="title2">快进来，在火炉旁找个位置随便坐~</p>
      </div>
      <div class="article">
        <nuxt-link to="./chat-page1">1</nuxt-link>
        <nuxt-link to="./chat-page2">2</nuxt-link>
        <nuxt-link to="./chat-page3">3</nuxt-link>
        <nuxt-link to="./chat-page4">4</nuxt-link>
        <nuxt-link to="./chat-page5">5</nuxt-link>
        <nuxt-link to="./chat-page6">6</nuxt-link>
        <nuxt-link to="./chat-page7">7</nuxt-link>
        <nuxt-link to="./chat-page8">8</nuxt-link>
        <nuxt-link to="./chat-page9">9</nuxt-link>
        <nuxt-link to="./chat-page10">10</nuxt-link>

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

<style scoped>
  .header{
    background-image: url("../assets/resource/5.jpg");
  }
</style>