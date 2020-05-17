
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=0,maximum-scale=1.0,minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:'http://cdn.repository.webfont.com/webfonts/nomal/138360/46931/5ec1096af629d8081cc5e783.css' ,rel:'stylesheet' ,type:'text/css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // font-awesome
    {src:'~/plugins/font-awesome.js',ssr:true},
    // antd-vue
    {src:'~/plugins/antd-ui.js',ssr:true},
    {src:'~/plugins/vue-lazyload.js',ssr:false},
    {src:'~/plugins/vue-waterfall.js',ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 引入新增nuxt-fontawesome套件
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
    /*
    ** FontAwesome module configuration 配置FontAwesome
    */
    fontawesome: {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    },
    /*
    ** [optional] markdownit options
    */
    markdownit: {
      preset: 'default',
      linkify: true,
      breaks: true,
      use:[
        'markdown-it-div',
        'markdown-it-attrs'
      ]
    },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // loaders:[
    //   {
    //     test:/\.md$/,
    //     use:[{loader:"html-loader"},{loader:"markdown-loader",options:{}}]
    //   }
    // ],
    // webpack-bundle-analyzer
    //nuxt build --analyzer
    analyzer: true,
    // transpile:[/ant-design-vue/],
    extend (config, ctx) {
    }
  }
}
