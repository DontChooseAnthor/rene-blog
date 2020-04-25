<template>
  <div>
    <div class="search">
      <div class="header">
          <img class="img" src="../assets/search/2.jpg" alt />
      </div>
      <div class="container">
        <icon-font type="icon-search1"></icon-font>
        <input class="search-input" type="text" placeholder="想要发现什么宝贝" @focus="isFocus" @blur="isBlur"  v-model="search" />
        <dl class="hot-place" v-show="isHotPlace">
          <dt>热门搜索:</dt>
          <dd>1</dd>
        </dl>
        <dl class="search-list" v-show="isSearchList">
          <dt>搜索结果:</dt>
          <dd>1</dd>
        </dl>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from '../components/footer'
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1745031_4rrtecxn5yq.js"
});
export default {
  data() {
    return {
      search:'',
      isFocusValue: false
    };
  },
  computed: {
    isHotPlace:function(){
      if(!this.search&&this.isFocusValue){
        return true
      } else {
        return false
      }
    },
    isSearchList:function(){
      if(this.search&&this.isFocusValue){
        return true
      } else {
        return false
      }
    }
  },
  components: {
    IconFont,
    Footer
  },
  methods: {
    isFocus(){
      this.isFocusValue = true
    },
    isBlur(){
      // 解决触发click之前会触发blur导致冲突的问题
      let _this = this
      setTimeout(function(){
        _this.isFocusValue = false
      },500)
    }
  }
};
</script>

<style lang='less' scoped>
.header {
  position: relative;
  width: 100%;
  height: 100%;
    .img {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: -1;
      border: none;
      opacity: 0.85;
    }
}
.container{
  position: absolute;
  margin-top: 200px;
  width: 55vw;
  text-align: center;
  margin-left: 22.5vw;
  .search-input{
    display: inline-block;
    outline: none;
    width: inherit;
    height: 55px;
    border-radius: 30px;
    border: 1px solid #e67e22;
    font-size: 23px;
    opacity: .9;
    padding: 0 50px;
    font-family:'Times New Roman', Times, serif;
    line-height: 55px;
  }
  .hot-place{
    width: 48vw;
    margin-left: 3.5vw;
    height: 30px;
    opacity: .8;
    dt{
      color: #636e72;
      background-color: #F8EFBA;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      width: inherit;
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding:0 14px;
      opacity: .8;
      border-bottom: 1px solid #636e72;
      box-shadow: 1px 1px 5px .5px #444;
    }
    dd{
      color: #636e72;
      width: inherit;
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding-left: 12px;
      box-shadow: 1px 1px 5px .5px #444;
      background-color: #F8EFBA;
      border-bottom: 1px solid #636e72;
      opacity: .8;
    }
  }
  .search-list{
    width: 48vw;
    margin-left: 3.5vw;
    height: 30px;
    dt{
      color: #636e72;
      background-color: #F8EFBA;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      width: inherit;
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding-left: 12px;
      opacity: .8;
      border-bottom: 1px solid #636e72;
      box-shadow: 1px 1px 5px .5px #444;
    }
    dd{
      color: #636e72;
      width: inherit;
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding-left: 12px;
      box-shadow: 1px 1px 5px .5px #444;
      background-color: #F8EFBA;
      border-bottom: 1px solid #636e72;
      opacity: .8;
    }
  }
  
  .anticon{
    font-size: 30px;
    position: absolute;
    z-index: 10;
    left: 12px;
    top: 11px;
  }
}
.footer{
  position: fixed;
  bottom: 0;
}
</style>