<template>
  <div class="show-headercontent">
    <div class="headername">天井湖失意人</div>
    <nav class="shownav">
      <ul>
        <nuxt-link to="/home">
          <li>
            <div class="navcontent">
              <font-awesome-icon class="nav-icon" icon="home" />
              <p>首页</p>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/chat">
          <li>
            <div class="navcontent">
              <font-awesome-icon class="nav-icon" :icon="['fas','comments']" />
              <p>杂谈</p>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/resource">
          <li>
            <div class="navcontent">
              <font-awesome-icon class="nav-icon" :icon="['fas','box-open']" />
              <p>资源</p>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/message">
          <li>
            <div class="navcontent">
              <font-awesome-icon class="nav-icon" :icon="['fas', 'edit']" />
              <p>留言板</p>
            </div>
          </li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li>
            <div class="navcontent">
              <font-awesome-icon class="nav-icon" :icon="['fas','tree']" />
              <p>关于</p>
            </div>
          </li>
        </nuxt-link>
      </ul>
    </nav>
    <div class="show-headericon">
      <nuxt-link to="/search">
        <div class="search">
          <a-icon type="search" />
        </div>
      </nuxt-link>
      <nuxt-link to="/login">
        <div class="user">
          <a-icon type="user" />
        </div>
      </nuxt-link>
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
// showHeader
.show-headercontent {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  opacity: .9;
  overflow: hidden;
  background-color: #ffffff;
  transition: opacity .5s linear;
  .headername {
    position: fixed;
    color: #bdc3c7;
    font-family: Ubuntu, sans-serif;
    font-size: 20px;
    top: 18px;
    left: 20px;
    transition: color 1s;
    z-index: 99;
  }
  .headername:hover {
    color: #e67e22;
  }
  .shownav {
    float: right;
    position: absolute;
    height: 70px;
    right: 220px;
    animation: navshow .6s linear;
    ul {
      display: inline-flex;
      list-style: none;
      li {
        width: 100px;
        line-height: 70px;
        height: 70px;
        text-align: center;
        display: inline-flex;
        justify-content: center;
        color: #bdc3c7;
        .navcontent {
          position: absolute;
          height: 70px;
          border-bottom: solid 5px white;
          border-bottom-width: 0;
          transition: all 0.5s;
          p {
            display: inline-block;
            font-size: 15px;
            height: 70px;
            font-family: Geneva, Verdana, sans-serif;
          }
          .nav-icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 3px;
          }
        }
      }
      li:hover > .navcontent {
        border-bottom-color: #e67e22;
        color: #e67e22;
        border-bottom-width: 5.5px;
      }
    }
    @keyframes navshow {
      0% {
        opacity: 0;
        right: -80px;
         }
      25% {
        opacity: 0.2;
        right: 0px;
      }
      50% {
        opacity: 0.4;
        right: 80px;
      }
      75%{
        opacity: 0.7;
        right: 160px;
      }
      100% {
        opacity: .9;
        right: 220px;
      }
    }
  }
  .show-headericon {
    position: fixed;
    float: left;
    right: 10px;
    height: 60px;
    vertical-align: middle;
    z-index: 199;
    display: inline-flex;
    .search {
      color: #bdc3c7;
      margin-top: 18px;
      margin-right: 13px;
      transition: all 0.5s;
      font-size: 30px;
    }
    .user {
      color: #bdc3c7;
      font-size: 30px;
      margin-top: 18px;
      transition: all 0.5s;
    }
    .search:hover {
      color: #e67e22;
      transform: translateY(-5px);
      cursor: pointer;
    }
    .user:hover {
      color: #e67e22;
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
}
.show-headercontent:hover{
  opacity: 1;
}
</style>
