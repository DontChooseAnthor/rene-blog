<template>
  <div>
    <re-article>
      <div class="header">
      <!-- 渐进加载 -->
        <template v-for="(item,index) in imgs">
          <div class="progressive" :key="index">
            <img class="preview" :src="item.preview" v-progressive="item.src" alt="">
          </div>
        </template>
        
        <p class="title1">火法循环</p>
        <p class="title2">结合NGA老哥经验后的自闭思考~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>从</span>6.8一路走到8.3，见识过7.0初期的奥法机关枪，也见证了热能冰流派的诞生，但是玩起来都不如火法的手感，每次转到其他流派一段时间后又会回到火法。虽然手感好吧，但是辉煌都是别人的，这火法在自己手上怎么总有股下水道味儿
        </div>
        <div class="section-container-short">
        现阶段，火法的爆发应该可以挤进T0队列，得益于8.0版本的绑定项链的清醒梦境特质，以前开启燃烧专心搓炎爆就好，但是现在一下子多出来两三个前戏，导致现在火法大批投靠一键宏阵营。
      </div>
      <div class="main-section">
        <div class="section">火法单体手法</div>
        <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
      <dl>
        <dt>有爆发:</dt>
        <dd>前置流星：清醒梦境+火冲——法阵+火冲——流星——燃烧+饰品——炎爆——火冲+炎爆——灼烧+火冲+炎爆*2——正常循环...</dd>
        <dd>这是一种稳定的七个炎爆的打法，后续就是最后两步的循环，脸好暴击的话可以少打灼烧多打炎爆</dd>
        <dd>后置流星：小括号——清醒梦境+火冲——法阵+火冲——燃烧+饰品——炎爆+火冲——炎爆+流星+火冲——炎爆——正常循环...</dd>
        <dd>这一般是在斩杀期通过灼烧必暴的机制打的一套</dd>
        <dt>没爆发：</dt>
        <dd>按照火法的常规1+1循环打法，有法阵流星的话尽量后置吃高层冲击大师，进斩杀后打1+0循环(即灼烧+火冲直接打出炎爆，若炎爆不暴击继续，若炎爆暴击产生了小括号则直接打灼烧+炎爆或者火冲+炎爆)</dd>
      </dl>
      <div class="main-section">
        <div class="section">法师鸡汤</div>
        <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        玩火法最关键的还是心态，因为火法的难度确实算是T0级别，玩火法就注定要被人骂。法师不是万金油职业，三系都是输出,没办法向其他职业一样切专精混日子，只能疯狂打木桩来练习肌肉记忆，这样才能在现实情况下打出自己想要的结果。
      <br>
      有了一定的肌肉记忆以后，再去练习副本理解。也就是打本的经验，魔兽世界和大部分动作游戏类似，可以通过背板来优化自己的时间和走位，最大化自己的输出。比如Boss的时间轴，需要优先处理的怪，安全的站位等等。 <br>
      <b>Things what you never have done！</b> <br>
      10年前，多少人被这句话召唤争相涌入艾泽拉斯大陆。如今10年过去了，10年的点点滴滴，一幕幕感动，一幕幕欣喜仿佛就在昨日。你还记得当初的激动么？你还记得当初的感动么？<br>
      就像谈恋爱，很少有第一眼就喜欢上的姑娘，也很少有一建号就觉得很爽的职业。大多数的法师应该是奔着“亲儿子”的头衔来的，就像我自己。<br>
      大家可能先是通过V大等神级玩家了解了法师，进而着迷于法师飘逸的走位，绚丽的法术，又被亡灵大开大合的帅气施法迷住。。。。哇靠！就这个了！就法师了！帅呆了！当然也有像我一样，被人带进来，在老玩家的介绍下开始了法师之旅。虽然后者有些许的机会主义的嫌疑，但是到最后大家都不约而同的爱上了法师。
      有人问我，如果最开始法师屎一样，你还会玩法师么？老实说，我不会。但是，事实是所有的事情都已经发生了，我就在这个时候开始玩魔兽了，而且这个时候的法师还不错，那么这也许就是缘分。好比那个下午，阳光正好，你穿了一件我喜欢的衬衫。我们都不是圣人，也许大俗就是大雅。 <br>
      喜欢谁有时候没什么为什么，喜欢法师，就做法师就好了。你赢我陪你君临天下，你输我陪你东山再起。这毕竟是个游戏，游戏就是程序，一代补丁一代神，也做过法爷，也当过法孙，我尊敬法师弱的时候咬牙默默坚持的人，也不会对放弃法师的人说什么。无论什么职业，相生相克的怪圈是逃不掉的，昨天有4.3战士骑士被我一路放到死，今天有5.05天神下凡战士追着我砍成酱，哦，前天还有70级12345被骑士打出翔。放平心态人就很享受生活。王权没有永恒，我的孩子。就是这样，我虽然一朝落寞难当大任，但我一定会倾尽全力发挥出近乎100%的威力。<br>
      </div>
      
      </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../../components/article'
export default {
  data () {
    return {
      imgs:[
        {
          src:require('../../assets/resource/封面_远眺.jpg'),
          preview:require('../../assets/resource/封面_远眺LOW.jpg')
        }
      ]
    }
  },
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>

</style>