<template>
  <div>
    <div class="search">
      <icon-font type="icon-search1"></icon-font>
      <input type="text" placeholder="请输入想要搜索的内容">
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1745031_iqy8kfbvt7g.js'
})
export default {
  data () {
    return {

    }
  },
  components:	{
    IconFont
  },
  methods: {},
}
</script>

<style scoped>

</style>