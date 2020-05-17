<template>
  <div class="main">
    <div class="contain">
      <Nav />
      <div class="background">
        <canvas id="canvas" width="2000" height="450"></canvas>
        <h2 class="bc-title">
          Here,the dusk is sudden,the night silent,
          <br />the panoply of stars immense and brilliant
        </h2>
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

          </div>
          <div class="show">
              
            </div>
        </div>
        <BackTop />
        <Footer class="footer" />
      </div>
    </div>
    
  </div>
</template>

<script>
import Nav from "../components/nav";
import BackTop from "../components/backtop";
import Footer from "../components/footer";

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    BackTop,
    Footer
  },
  methods: {},
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
.main{
  background-color: rgb(229, 226, 226);
  overflow: hidden;
}
.contain {
  .background {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: url("../assets/resource/18.jpg") no-repeat;
    background-size: 100%;
    canvas {
      position: absolute;
      z-index: 1;
    }
    .bc-title {
      margin: 25vh auto;
      color: rgb(255, 255, 255);
      font-family: "SnellRoundhand";
      width: 100%;
      text-align: center;
      font-size: 45px;
      opacity: 0.8;
      text-shadow: 2px 0 2px rgb(255, 255, 255);
    }
  }
  .waterfall {
    width: 100%;
    background-color: rgb(229, 226, 226);
    .title{
      width: 800px;
      line-height: 60px;
      letter-spacing: 3px;
      margin: 20px auto;
      height: 60px;
      border-radius: 20px;
      text-align: center;
      border: 1px dashed #fff;
      p{
        font-size: 20px;
        color: #fff;
      }
    }
    .container{
      margin-top: 70px;
      .showtitle{
        width: 100%;
        background-color: #fff;
        height: 50px;
        box-shadow: 0 0 10px rgb(182, 182, 182);
      }
    }
  }
  .footer {
    margin-top: 150px;
  }
}

</style>