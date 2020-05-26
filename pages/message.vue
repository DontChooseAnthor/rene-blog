<template>
  <div>
    <re-article>
       <div class="header" v-lazy:background-image="backgroundImage">
        <p class="title1">留言板</p>
        <p class="title2">留下足迹，证明你曾经来过这里~</p>
      </div>
      <div class="article">
        <div class="verse">
          <p class="title">人生凝结成诗</p>
          <p class="verse-container">
            如果错过了太阳时你流了泪，那么你也要错过群星了
            <span class="verse-author">
              ———泰戈尔《飞鸟集》
            </span>
          </p>
        </div >
        <!-- 留言展示区 -->
        <div class="show-message">
          <p class="comments">No Comment</p>
          <div class="content" v-show="commentResult">
            <font-awesome-icon class="content-icon" :icon="['fas','ellipsis-h']" />
          </div>
        </div>
        <!-- 留言用富文本编辑器 -->
        <div class="write">
          <div class="markdown">
            <font-awesome-icon class="markdown-icon" :icon="['fab','markdown']" />
            <p class="markdown-text">Support of mavon-editor</p>
          </div>
          <div class="mavonEditor">
          <no-ssr>
            <mavon-editor :toolbars="markdownOption" v-model="handbook"/>
          </no-ssr>
        </div>
        </div>
      </div>
      <Music />

    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
import Music from '../components/music'

export default {
  data() {
    return {
      backgroundImage:require('../assets/resource/封面_河市.jpg'),
      markdownOption:{
        bold:true, //粗体
        underline: true, // 下划线
        ol: true, // 有序列表
        ul: true, // 无序列表
        fullscreen: true, // 全屏编辑
        preview: false, // 预览
        table: true, // 表格
        quote: true, // 引用
        help: true, // 帮助
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        link: true, // 链接
        imagelink: true, // 图片链接
      },
      handbook:'留下您的足迹',
      comment: '',
      commentResult: false

    };
  },
  computed: {
    
  },
  components: {
    reArticle,
    Music
  },
  methods: {
    
  },
  mounted() {
    if(this.comment === ''){
      this.commentResult = true
    }
  },
};
</script>

<style lang="less" scoped>
// .header{
//     background-image: url("../assets/resource/15.jpg");
//   }
.article{
  .verse{
    width: 70%;
    height: 140px;
    border: 3px solid rgb(167, 166, 166);
    margin: 0 auto;
    color: rgb(167, 166, 166);
    position: relative;
    line-height: 140px;
    padding: 0 20px;
    .title{
      width: 45%;
      height: 60px;
      background-color: #fff;
      left: 50%;
      line-height: 60px;
      font-size: 30px;
      text-align: center;
      letter-spacing: 8px;
      transform: translateX(-50%);
      top: -25%;
      position: absolute;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .verse-container{
        text-align: center;
        letter-spacing: 3px;
        position: relative;
        font-size: 17px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        .verse-author{
          position: absolute;
          top: 30%;
          right: 0;
          font-size: 13px;
        }
    }
  }
  .show-message{
    width: 85%;
    height: 55vh;
    position: relative;
    margin: 0 auto;
    margin-top: 150px;
    box-shadow: 0 0 5px rgb(207, 207, 207);
    .comments{
      position: absolute;
      top: 5px;
      left: 15px;
      color: gray;
      font-size: 13px;
    }
    .comments::before{
      content: "Comments | ";
      font-size: 20px;
    }
    .content{
      margin: 0 auto;
      text-align: center;
      font-size: 45px;
      color: rgba(179, 179, 179,.6);
      line-height: 55vh;
    }
  }
  .write{
    .markdown{
      height: 40px;
      line-height: 40px;
      margin-top: 180px;

      .markdown-icon{
        display: inline-block;
      }
      .markdown-text{
        display: inline-block;
      }
    }
    .mavonEditor{
      border: 1px solid rgb(194, 194, 194);
    }
  }
}
</style>