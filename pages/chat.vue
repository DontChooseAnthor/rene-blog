<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">杂谈</p>
        <p class="title2">快进来，在火炉旁找个位置随便坐~</p>
      </div>
      <div class="article">
        <nuxt-link class="chat-page" to="./chat-page1">
          <div class="chat-page-contain">
            <div class="picture">
              <img src="../assets/resource/4.jpg" alt />
              <div class="message">
                <div class="chat">
                  <font-awesome-icon class="chat-icon" :icon="['far','comment-dots']" />
                  <p>NoComment</p>
                </div>
                <div class="eye">
                  <font-awesome-icon class="eye-icon" :icon="['far','eye']" />
                  <p>NoOne</p>
                </div>
              </div>
            </div>
            <div class="title">
             <div class="title-show">
                <h2>Flex&amp;Grid</h2><font-awesome-icon class="title-icon" :icon="['fas','tag']" />
             </div>
            <p>说起前端布局，大部分人都会想起传统模型布局，然而传统布局有一定的局限性，比如实现垂直居中的问题。因此网页开发中制定了新的布局方式——Flex&amp;Grid</p>
            </div>
          </div>
          <hr>
        </nuxt-link>
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
import reArticle from "../components/article";
export default {
  data() {
    return {};
  },
  components: {
    reArticle
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header {
  background-image: url("../assets/resource/5.jpg");
}
.chat-page {
  text-decoration: none;
  color: #666;
  width: 80vw;

  .chat-page-contain {
    position: relative;
    display: inline-flex;
    padding: 40px 0;
    .picture {
      width: 110px;
      height: 110px;
      border: 1px solid rgb(153, 150, 150);
      padding: 2px;
      border-radius: 50%;
      overflow: hidden;
      .message{
        position: absolute;
        width: 100px;
        height: 70px;
        left: -95px;
        opacity: 0;
        transition: all .5s ease;
        top: 60px;
        font-size: 13px;
        border-top:2px solid rgb(153, 150, 150);
        .chat{
          margin-top: 5px;
          .chat-icon{
            display: inline-block;
          }
          p{
            display: inline-block;
          }
        }
        .eye{
          .eye-icon{
            display: inline-block;
          }
          p{
            display: inline-block;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .picture:hover .message{
      opacity: 1;
        left: -110px;
    }
    .title{
      width: 80%;
      margin-left: 2vw;
      .title-show{
        position: relative;
        height: 30px;
        transition: all .3s linear;
        h2{
          display: inline-block;
          font-size: 24px;
          font-weight: 500;
        }
        .title-icon{
          display: inline-block;
          margin-left: 8px;
        }
      }
      .title-show:hover{
        color: orange;
      }
      p{
        margin-top: 20px;
        font-size: 15px;
        height: 65px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        
      }
    }
  }
  hr{
    width: 33%;
    padding: 0;
    margin: 20px auto;
    color: #EFEFEF;
    opacity: .3;
    height: .5px;
  }
}
</style>