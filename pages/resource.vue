<template>
  <div class="main">
    <BackTop />
    <!-- 弹出图片展示框 -->
    <div class="dialog" v-show="dialog" id="dialog">
          <div class="dialog-control">
            <a-icon type="close-circle" class="close" :style="{  color: 'gray' }" @click="close" />
            <a-icon type="left" class="change-left" :style="{  color: 'gray' }" @click="turnLeft" />
            <a-icon type="right" class="change-right" :style="{  color: 'gray' }" @click="turnRight" />
        </div>
        <div class="dialog-share">
          <p class="dialog-share-text">
            <font-awesome-icon class="showtitle-icon" :icon="['fas','share-alt']" />
            分享到：
          </p>
          <a-icon type="wechat" @click="shareWechat" class="dialog-share-item" :style="{  color: 'green' }" />
          <a-icon type="weibo" @click="shareWeibo" class="dialog-share-item" :style="{  color: 'orange' }" />
          <a-icon type="qq" @click="shareQQ" class="dialog-share-item" :style="{  color: 'blue' }" />
        </div>
        </div>
      <div class="contain" id="contain">
        
        <Nav />
        <div class="background" v-lazy:background-image="backgroundImage">
          <canvas id="canvas" width="2000" height="635"></canvas>
          <!-- svg波浪 -->
          <div class="svg-wave">
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(229, 226, 226,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(229, 226, 226,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(229, 226, 226,0.7)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(229, 226, 226,1)" />
              </g>
            </svg>
          </div>
        </div>

        <div class="waterfall">
          <div class="title">
            <p>寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷</p>
          </div>
          <div class="container">
            <div class="showtitle">
              <font-awesome-icon class="showtitle-icon" :icon="['fas','camera-retro']" />
              <p class="showtext">photos of the Milky Way from Pexels</p>
            </div>
            <div class="show">
              <waterfall :col="col" :data="waterfallData">
                <template>
                  <div class="cell-item" v-for="(item,index) in waterfallData" :key="index">
                    <img @click="showDialog($event)" :id="index" class="item" :lazy-src="item"  alt />
                  </div>
                </template>
              </waterfall>
            </div>
          </div>
          <Footer class="footer" />
      <Music />

        </div>
      </div>
  
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";
import Music from '../components/music'

export default {
  data() {
    return {
      backgroundImage:require('../assets/resource/封面_银河.jpg'),
      col: 4,
      dialog: false,
      imageId: 0
    };
  },
  components: {
    Nav,
    BackTop,
    Footer,
    Music

  },
  computed: {
    waterfallData() {
      let arrImg = [
        // 瀑布流放入数据
        require("../assets/resource/star/星空1.jpg"),
        require("../assets/resource/star/星空2.jpg"),
        require("../assets/resource/star/星空3.jpg"),
        require("../assets/resource/star/星空4.jpg"),
        require("../assets/resource/star/星空5.jpg"),
        require("../assets/resource/star/星空6.jpg"),
        require("../assets/resource/star/星空7.jpg"),
        require("../assets/resource/star/星空8.jpg"),
        require("../assets/resource/star/星空9.jpg"),
        require("../assets/resource/star/星空10.jpg"),
        require("../assets/resource/star/星空11.jpg"),
        require("../assets/resource/star/星空12.jpg"),
        require("../assets/resource/star/星空13.jpg"),
        require("../assets/resource/star/星空14.jpg"),
        require("../assets/resource/star/星空15.jpg"),
        require("../assets/resource/star/星空16.jpg"),
        require("../assets/resource/star/星空17.jpg"),
        require("../assets/resource/star/星空18.jpg"),
        require("../assets/resource/star/星空19.jpg"),
        require("../assets/resource/star/星空20.jpg")
      ];
      return arrImg;
    }
  },
  methods: {
    // 动态创建DOM元素展示图片细节
    showDialog($event) {
      this.dialog = true;
      // console.log($event.path[0].id);
      this.imageId =  parseInt($event.path[0].id) + parseInt(1)
      // console.log(this.imageId)
      var dialogWindow = document.createElement("img");
      dialogWindow.setAttribute("id", "img");
      var parent = document.getElementById("dialog");
      parent.appendChild(dialogWindow);
      var img = document.getElementById("img");
      img.setAttribute("src", `http://localhost:3002/_nuxt/assets/resource/star/${this.imageId}.jpg`);
      img.style.width = "28vw";
      img.style.height = "100%";

      // 添加背景灰度模糊效果
      var backgroundWindow = document.getElementById('contain')
      backgroundWindow.style.filter = "grayscale(20%) blur(5px)" 
    },
    close(){
      this.dialog = false;
      var backgroundWindow = document.getElementById('contain')
      backgroundWindow.style.filter = "grayscale(0%) blur(0)"
    },
    turnLeft(){
      this.imageId = this.imageId - 1
      var img = document.getElementById("img");
      img.setAttribute("src", `http://localhost:3002/_nuxt/assets/resource/star/${this.imageId}.jpg`);
      // var imageUrl = img.getAttribute('src')
      // imageUrl.split(imageUrl.length-1)
      
    },
    turnRight(){
      this.imageId = this.imageId + 1
      var img = document.getElementById("img");
      img.setAttribute("src", `http://localhost:3002/_nuxt/assets/resource/star/${this.imageId}.jpg`);
    },
    shareWechat(){
      console.warn('接口开发中')     
    },
    shareWeibo(){
      console.warn('接口开发中')     
    },
    shareQQ(){
      console.warn('接口开发中')     
    }
  },
  mounted() {
    // 坐标
    class Crood {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }
      setCrood(x, y) {
        this.x = x;
        this.y = y;
      }
      copy() {
        return new Crood(this.x, this.y);
      }
    }

    // 流星
    class ShootingStar {
      constructor(
        init = new Crood(),
        final = new Crood(),
        size = 3,
        speed = 200,
        onDistory = null
      ) {
        this.init = init; // 初始位置
        this.final = final; // 最终位置
        this.size = size; // 大小
        this.speed = speed; // 速度：像素/s

        // 飞行总时间
        this.dur =
          (Math.sqrt(
            Math.pow(this.final.x - this.init.x, 2) +
              Math.pow(this.final.y - this.init.y, 2)
          ) *
            1000) /
          this.speed;

        this.pass = 0; // 已过去的时间
        this.prev = this.init.copy(); // 上一帧位置
        this.now = this.init.copy(); // 当前位置
        this.onDistory = onDistory;
      }
      draw(ctx, delta) {
        this.pass += delta;
        this.pass = Math.min(this.pass, this.dur);

        let percent = this.pass / this.dur;

        this.now.setCrood(
          this.init.x + (this.final.x - this.init.x) * percent,
          this.init.y + (this.final.y - this.init.y) * percent
        );

        // canvas
        ctx.strokeStyle = "#fff";
        ctx.lineCap = "round";
        ctx.lineWidth = this.size;
        ctx.beginPath();
        ctx.moveTo(this.now.x, this.now.y);
        ctx.lineTo(this.prev.x, this.prev.y);
        ctx.stroke();

        this.prev.setCrood(this.now.x, this.now.y);
        if (this.pass === this.dur) {
          this.distory();
        }
      }
      distory() {
        this.onDistory && this.onDistory();
      }
    }

    // 流星雨
    class MeteorShower {
      constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.stars = [];
        this.T;
        this.stop = false;
        this.playing = false;
      }

      // 生成随机位置的流星
      createStar() {
        let angle = Math.PI / 1.35;
        let distance = Math.random() * 800;
        let init = new Crood(
          Math.random() * 1.2 * this.cvs.width - 50,
          (Math.random() * 300) | 0
        );
        let final = new Crood(
          init.x + distance * Math.cos(angle),
          init.y + distance * Math.sin(angle)
        );
        let size = Math.random();
        let speed = Math.random() * 400;
        let star = new ShootingStar(init, final, size, speed, () => {
          this.remove(star);
        });
        return star;
      }

      remove(star) {
        this.stars = this.stars.filter(s => {
          return s !== star;
        });
      }

      update(delta) {
        if (!this.stop && this.stars.length < 40) {
          this.stars.push(this.createStar());
        }
        this.stars.forEach(star => {
          star.draw(this.ctx, delta);
        });
      }

      tick() {
        if (this.playing) return;
        this.playing = true;

        let now = new Date().getTime();
        let last = now;
        let delta;

        let _tick = () => {
          if (this.stop && this.stars.length === 0) {
            cancelAnimationFrame(this.T);
            this.playing = false;
            return;
          }

          delta = now - last;
          delta = delta > 500 ? 30 : delta < 16 ? 16 : delta;
          last = now;
          // console.log(delta);

          this.T = requestAnimationFrame(_tick);

          ctx.save();
          ctx.globalCompositeOperation = "destination-in";
          ctx.fillStyle = "rgba(0,0,0,0.8)"; // 每一帧用 “半透明” 的背景色清除画布
          ctx.fillRect(0, 0, cvs.width, cvs.height);
          ctx.restore();
          this.update(delta);
        };
        _tick();
      }

      // 开始
      start() {
        this.stop = false;
        this.tick();
      }

      // 暂停
      stop() {
        this.stop = true;
      }
    }

    let cvs = document.querySelector("canvas");
    let ctx = cvs.getContext("2d");
    let meteorShower = new MeteorShower(cvs, ctx);
    meteorShower.start();
  }
};
</script>

<style lang="less" scoped>
.main {
  background-color: rgb(229, 226, 226);
  overflow: hidden;
}
 .dialog {

    padding: 70px 60px;
    background-color: #fff;
    text-align: center;


    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2000;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    .dialog-control{
      position: absolute;
      width: 100%;
      height: 60%;
      margin-left: -60px;
      margin-top: -70px;
      .close{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 30px;
        cursor: pointer;
        outline: none;
      }
      .change-left{
        position: absolute;
        font-size: 45px;
        bottom: 10%;
        left: 10px;
        cursor: pointer;
        outline: none;

      }
      .change-right{
        position: absolute;
        font-size: 45px;
        bottom: 10%;
        right: 10px;
        cursor: pointer;
        outline: none;
      }
    }
    .dialog-share{
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      width:250px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 28px;
      display: flex;
      .dialog-share-text{
        font-size: 16px;
        position: absolute;
        margin-left: -60px;
        color: rgb(163, 163, 163);
      }
      .dialog-share-item{
        flex: 1;
        outline: none;
        cursor: pointer;
        padding-top: 3px;
      }
    }
  }
.contain {
  .background {
    width: 100%;
    height: 95vh;
    overflow: hidden;
    position: relative;
    // background: url("../assets/resource/18.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    canvas {
      position: absolute;
      z-index: 1;
    }
  }
  .waterfall {
    width: 100%;
    background-color: rgb(229, 226, 226);
    .title {
      width: 800px;
      line-height: 60px;
      letter-spacing: 3px;
      margin: 30px auto;
      height: 60px;
      border-radius: 20px;
      text-align: center;
      border: 1px dashed #fff;
      p {
        font-size: 20px;
        color: #fff;
      }
    }
    .container {
      margin-top: 60px;
      .showtitle {
        width: 100%;
        background-color: #fff;
        height: 50px;
        box-shadow: 0 0 10px rgb(182, 182, 182);
        text-align: center;
        line-height: 50px;
        color: #777;
        .showtitle-icon {
          display: inline-block;
        }
        .showtext {
          display: inline-block;
        }
      }
      .show {
        width: 100%;
        display: flex;
        .cell-item {
          flex: 1;
          margin: 15px 10px;
          overflow: hidden;
          cursor: pointer;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .footer {
    margin-top: 150px;
  }
}
</style>