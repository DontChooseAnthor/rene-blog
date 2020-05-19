<template>
  <div>
    <re-article>
       <div class="header">
        <p class="title1">留言板</p>
        <p class="title2">留下足迹，证明你曾经来过这里~</p>
      </div>
      <div class="article">
        <div class="verse">
          <p class="title">人生总结成事</p>
          <p class="verse-container">
            如果错过了太阳时你流了泪，那么你也要错过群星了————泰戈尔《飞鸟集》
          </p>
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
export default {
  data() {
    return {
     
    };
  },
  computed: {
    
  },
  components: {
    reArticle
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.header{
    background-image: url("../assets/resource/15.jpg");
  }
.article{
  .verse{
    width: 60%;
    height: 120px;
    border: 3px solid #666;
    .title{
      .versen-container{
        
      }
    }
  }
}
</style>