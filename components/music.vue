<template>
  <div>
      <no-ssr>
        <aplayer  :music="music" :listFolded="true" :list="musicList"  />
     </no-ssr>
  </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  data () {
    return {
      music:
          {
          title:'オレンジ',
          artist:'7!!',
          src:'https://m701.music.126.net/20200523151337/e622e9b828dfd592f49870bd4bdc2790/jdyyaac/045b/0f59/520c/31c4f6142083a633317aef82c2542c4b.m4a',
          pic:'https://p1.music.126.net/5AQU0WlqeDsA5XSDVaXTqA==/4420036743669830.jpg?param=130y130',
        },
      musicList:[
        {
          title:'オレンジ',
          artist:'7!!',
          src:'https://m701.music.126.net/20200523151337/e622e9b828dfd592f49870bd4bdc2790/jdyyaac/045b/0f59/520c/31c4f6142083a633317aef82c2542c4b.m4a',
          pic:'https://p1.music.126.net/5AQU0WlqeDsA5XSDVaXTqA==/4420036743669830.jpg?param=130y130',
        },
        {
          title:'Ther',
          artist:'Kraffa',
          src:'https://m701.music.126.net/20200523150555/8842105958e97dafad824a0dba5c2b12/jdyyaac/0408/5453/560c/3b08790b3fc9769ed744afb22e60f533.m4a',
          pic:'https://p2.music.126.net/SOJ1838GtKK6jXq5kFrgVQ==/854320534832434.jpg?param=130y130'
        },
        {
          title:'Flouxetine',
          artist:'仵嘉丞Ghost',
          src:'https://m10.music.126.net/20200523151023/2b116838e57db86e1d055447a5cd4e61/yyaac/5508/055e/055c/bb275f5657242d530bab2608c5b11f32.m4a',
          pic:'https://p1.music.126.net/lwBYCDWWeo-_lEaayDj6dg==/109951164304004302.jpg?param=130y130'
        },
        {
          title:'intro (w rook1e)',
          artist:'barnes blvd.',
          src:'https://m701.music.126.net/20200523151514/fb3633197cbcbeb6ec5153fbd972ad19/jdyyaac/555d/5208/0759/b7257ca6eceb4a3e222403a365c4b810.m4a',
          pic:'https://p1.music.126.net/JkyGIcfelzjzgiqaLMhYSA==/109951163298720217.jpg?param=130y130'
        },
      ]  
  
    }
  },
  components:	{
    aplayer
  },
  methods: {},
}
</script>

<style scoped>
 .aplayer{
    width: 300px;
    position: fixed;
    z-index: 3000;
    bottom: 0;
    left: 0;
    animation: showPlayer 2s;
  }
  @keyframes showPlayer {
    from{
      opacity: 0;
      bottom: -100;
    }
    to{
      opacity: 1;
      bottom: 0;
    }
  }
</style>