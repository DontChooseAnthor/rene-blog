<template>
  <div>
    <div class="page-contain">
      <div class="page-text-right">
        <div class="title-time-right">
          <font-awesome-icon class="title-icon" :icon="['far','clock']" />
          <p class="time">最后编辑于2020.5.16</p>
        </div>
        <div class="page-title">
          <slot name="title" />
          <font-awesome-icon class="title-icon" :icon="['fas','tag']" />
        </div>
        <div class="message">
          <div class="chat">
            <font-awesome-icon class="chat-icon" :icon="['far','comment-dots']" />
            <p>NoComment</p>
          </div>
          <div class="eye">
            <font-awesome-icon class="eye-icon" :icon="['far','eye']" />
            <p>NoOne</p>
          </div>
          <div class="list">
            <font-awesome-icon class="list-icon" :icon="['far','list-alt']" />
            <slot name="list" />
          </div>
        </div>
        <p class="page-article">
          <slot name="article" />
        </p>
        <div class="showarticle">
          <font-awesome-icon class="list-icon" :icon="['fas','ellipsis-h']" />
        </div>
      </div>
      <div class="page-image">
        <slot name="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="less" scoped>
.page-contain {
  margin-top: 50px;
  width: inherit;
  height: 300px;
  border-radius: 12px;
  display: inline-flex;
  overflow: hidden;
  box-shadow: 0 0 10px rgb(187, 185, 185);
  .page-image {
    width: 55%;
    overflow: hidden;
    display: inline-block;
    img {
      height: 300px;
      transition: all 0.6s ease;
    }
  }
  .page-image:hover img {
    transform: scale(1.5);
  }
  .page-text-right {
    width: 45%;
    display: inline-block;
    position: relative;
    margin-top: 10px;
    .title-time-right {
      margin-left: 30px;
      font-size: 13px;
      .title-icon {
        display: inline-block;
      }
      .time {
        display: inline-block;
      }
    }
    .page-title {
      margin-top: 10px;
      text-align: center;
      color: #444;
      transition: all 0.5s linear;
      h2 {
        margin: 10px 0;
        display: inline-block;
        letter-spacing: 1px;
      }
      .title-icon {
        display: inline-block;
      }
    }
    .page-title:hover {
      color: orange;
    }
    .message {
      text-align: center;
      font-size: 13px;
      margin-bottom: 20px;
      .chat {
        display: inline-block;

        .chat-icon {
          display: inline-block;
        }
        p {
          display: inline-block;
        }
      }
      .eye {
        display: inline-block;
        margin-left: 10px;
        .eye-icon {
          display: inline-block;
        }
        p {
          display: inline-block;
        }
      }
      .list {
        display: inline-block;
        margin-left: 10px;

        .list-icon {
          display: inline-block;
        }
        p {
          display: inline-block;
        }
      }
    }
    .page-article {
      width: 80%;
      height: 110px;
      margin: 0 auto;
      padding-top: 15px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
    .showarticle{
      position: absolute;
      bottom: 20px;
      right: 30px;
      font-size: 25px;
      color: rgb(148, 141, 141);
      transition: all .5s ease;
    }
    .showarticle:hover{
      color: orange;
    }
  }
}
</style>