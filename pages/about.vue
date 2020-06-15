<template>
  <div class="main">
    <Nav />
    <div class="background" >
    <!-- 渐进加载 -->
          <div class="mountain">
            <img :src="mountain.preview" id="background" v-progressive="mountain.src" alt="">
          </div>
          <div class="road">
            <img :src="road.preview" v-progressive="road.src" alt="">
          </div>

      <p class="title">About</p> 
   </div>
    <div class="during"></div>
    <div class="container">
      <div class="text">
        <div class="theme">
          <p class="name">天井湖失意人</p>
        </div>
        <div class="article">
          <p class="content">
            为什么要叫天井湖失意人呢？天井湖是家乡一个承载了我童年回忆的滨江堰塞湖，直到今日，我仍然会在失意郁闷的时候选择到那里去溜达一圈。人大概在失意和惆怅的时候最喜欢放任双脚带着自己前进，每个失意的人在天井湖都可以获得一些慰藉，或是从来往同样愁眉的同龄人，或是从生机蓬勃的自然。如今虽然远离家乡，但是我希望每当失意的时候还可以神游此地，这就是这个名字的由来<br>
            PS:当然其他地方出现这个名字与本人、本站无关
            <br>
            <br>
            从我自学前端开始，就一直想创建一个属于自己的网站。没想到这个过程这么漫长，跨度近一年多，断断续续才完成了这个博客的框架。严格来说它还是个Baby，还有很多需要改进的地方，由于技能水平的限制，只能做到如今这个样子。建站过程中借鉴了很多论坛前辈们的经验，美术风格模仿了春园庄的雪博客平台的风格，所以可以说这个网站是踩着巨人的肩膀而实现的<br>
            大部分的博客平台都是基于PHP的wordpress定制，我这种PHP苦手，对于全世界最好的语言实在是无从下手。所以最终决定通过Vue来实现，基础的SPA肯定不能满足线上博客平台需求，因为SPA实在对SEO不友好，我想让网站有一定的曝光度，便选择了VueSSR，服务端渲染对我来说算是一个新的概念，它虽然和Vue语法没有差别，但是配置和目录结构上却大相径庭。不过这都不算问题吧，毕竟想搞就要搞出来，这点钻牛角尖的精神还是得有的 <br>
            这个网站也夹杂了很多二次元私货，据我观察，程序员中挺多人有二次元兴趣爱好的。我个人也是二次元爱好者，网站的标题部分全部用的二次元立绘，不仅增加了美感，还可能得到同好的青睐。<br>
            细心的你一定会发现，资源页面的图片全是星空、银河，这也是我的私货之一，希望这些要素可以成为将你我联系起来的桥梁吧！
          </p>
        </div>
      </div>
      <Music />
      <Footer  class="footer"/>
    </div> 
    <BackTop />
    
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";
import Music from '../components/music'
export default {
  data () {
    return {
      // imgs:[
      //   {
      //     src:require('../assets/about/视差_重山.jpg'),
      //     preview:require('../assets/about/视差_重山LOW.jpg'),
      //   },
      //   {
      //     src:require('../assets/about/视差_公路.png'),
      //     preview:require('../assets/about/视差_公路LOW.png'),
      //   }
      // ]
      mountain:{
        src:require('../assets/about/视差_重山.jpg'),
          preview:require('../assets/about/视差_重山LOW.jpg'),
      },
      road:{
        src:require('../assets/about/视差_公路.png'),
          preview:require('../assets/about/视差_公路LOW.png'),
      }

    }
  },
  components:	{
    Nav,
    BackTop,
    Footer,
    Music
  },
  methods: {
    // 背景图片根据scroll放大缩小
    changeBackground() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        let background = document.getElementById('background')

        // background.style.backgroundSize = 100 + scrollTop + "%"
        background.style.width = 100 + scrollTop/3 +"%"
        background.style.left = - scrollTop*3 + 'px'
        background.style.top = - scrollTop*1.2 + 'px'
    },
  },
  mounted() {
    window.addEventListener("scroll", this.changeBackground);

  },
  destroyed() {
    window.removeEventListener("scroll", this.changeBackground);
  }
}
</script>

<style lang="less" scoped>
.background{
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  // background-position:center;
  // background-repeat: no-repeat;
  .mountain{
    position: absolute;
    width: 100%;
    text-align: center;
    img{
      position: absolute;
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }
  .road{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100; 
    img{
      position: absolute;
      width: 100%;
    }
  }
  .title{
    position: fixed;
    top: 32%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    color: #fff;
    font-size: 100px;
    letter-spacing: 8px;
    font-weight: 800;
  }
}
.during{
  margin-top: -70px;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 70px;
  background:linear-gradient(transparent,#3c3936);
}
.container{
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #3c3936;
  .text{
    width: 45%;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 150px;
   .theme{
    text-align: center;
    .name{
        font-size: 50px;
        color: #fff;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      }
    .name::before{
        content: "[";
        margin-right: 20px;
      }
    .name::after{
        content: "]";
        margin-left: 20px;
      }
    }
    .article{
      margin-top: 60px;
      .content{
        color: #fff;
        font-size: 16px;
        line-height:30px;
      }
    }
  }
}
.footer{
  margin-bottom: 5vh;
}
</style>