# rene-blog

## 开发日志

- 基于Nuxt.js开发的SSR博客线上项目(前后端分离开发)
- 数据库选择mongodb
- 后端框架选择Koa2
- UI部分 Antd-vue和Nuxt-fontawesome 混合使用
- 项目部署于腾讯云服务器(www.reneforevercn.club)
- 计划使用redis作为内存数据库，优化负载性能
- 通过markdown形式上传文章内容，通过前端展示到页面上:showdown/ @nuxtjs/markdownit / @nuxtjs/markdownit-loader[需要安装依赖包]  markdown代码高亮使用highlight.js
- 使用koa-cors处理跨域问题
- 选择mavonEditor富文本编辑器
- 资源页面中图片使用瀑布流展示，使用vue-waterfall2组件
- 统一几个常用组件作为公共组件，降低页面代码复杂度
- about页面使用视差动画完成
- 添加Aplayer及hls.js依赖完成网页音乐播放器
