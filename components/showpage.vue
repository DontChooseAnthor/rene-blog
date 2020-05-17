<template>
  <div>
    <div class="chat-page-contain">
      <div class="picture">
        <slot name="themeImage" />
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
          <slot name="themeTitle" />
          <font-awesome-icon class="title-icon" :icon="['fas','tag']" />
        </div>
        <div class="title-time">
          <font-awesome-icon class="title-icon" :icon="['far','clock']" />
          <p class="time">最后编辑于2020.5.16</p>
        </div>
        <slot name="themeContain" />
      </div>
    </div>
    <hr />
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
.chat-page-contain {
  position: relative;
  display: inline-flex;
  padding: 40px 0;
  margin: 60px 0;
  .picture {
    width: 110px;
    height: 110px;
    border: 1px solid rgb(153, 150, 150);
    padding: 2px;
    border-radius: 50%;
    overflow: hidden;
    .message {
      position: absolute;
      width: 100px;
      height: 70px;
      left: -95px;
      opacity: 0;
      transition: all 0.5s ease;
      top: 60px;
      font-size: 13px;
      border-top: 2px solid rgb(153, 150, 150);
      .chat {
        margin-top: 5px;
        .chat-icon {
          display: inline-block;
        }
        p {
          display: inline-block;
        }
      }
      .eye {
        .eye-icon {
          display: inline-block;
        }
        p {
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
  .picture:hover .message {
    opacity: 1;
    left: -110px;
  }
  .title {
    width: 80%;
    margin-left: 2vw;
    .title-show {
      position: relative;
      height: 30px;
      transition: all 0.3s linear;
      h2 {
        display: inline-block;
        font-size: 24px;
        font-weight: 500;
      }
      .title-icon {
        display: inline-block;
        margin-left: 8px;
      }
    }
    .title-show:hover {
      color: orange;
    }
    .title-time {
      position: absolute;
      top: 20px;
      right: 0;
      .title-icon {
        display: inline-block;
        margin-bottom: 44px;
        font-size: 13px;
      }
      .time {
        display: inline-block;
        font-size: 13px;
      }
    }
    p {
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
hr {
  width: 33%;
  padding: 0;
  margin: 20px auto;
  color: #efefef;
  opacity: 0.3;
  height: 0.5px;
}
</style>