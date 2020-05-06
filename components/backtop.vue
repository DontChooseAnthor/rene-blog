<template>
  <div>
    <div class="back-top" ref="cat">
      <div class="hoverbox" @click="backToTop"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    backTop() {
      var scrollTop1 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // let scrollTop1 = 0
      if (scrollTop1 < 690) {
        this.$refs.cat.style.bottom = "100vh";
      } else {
        this.$refs.cat.style.bottom = "10vh";
      }
    },
    backToTop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let speed = Math.floor(-osTop / 4);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + speed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.backTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.backTop);
  }
};
</script>

<style scoped>
.back-top {
  background: url("../assets/home/home-scroll/scroll.png") no-repeat;
  width: 80px;
  height: 1000px;
  transition: all 1s ease;
  position: fixed;
  z-index: 10;
  right: 5vw;
  bottom: 100vh;
}
.hoverbox {
  position: absolute;
  width: 80px;
  height: 110px;
  z-index: 11;
  bottom: 10vh;
  cursor: pointer;
}
</style>