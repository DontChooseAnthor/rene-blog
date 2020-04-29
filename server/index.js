const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const KoaBody = require('koa-body')
const path = require('path')
const static_ = require('koa-static')
const cors = require('koa-cors')

const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
// const redisStore = require('koa-redis')
const json = require('koa-json')
const dbConfig = require('./dbs/config.js')
const passport = require('./interface/utils/passport')
const users = require('./interface/users')
const search = require('./interface/search')
const upload = require('./interface/upload')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

app.keys = ['keys', 'keykeys'];
app.proxy = true
app.use(session({
  cookie: { secure: false, maxAge: 86400000 },
  // store: new redisStore()
}, app))

app.use(bodyParser({
  extendType: ['json', 'form', 'text']
}))

app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
      }
      return 'http://localhost:3000'; //只允许http://localhost:3000这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)

// koa-body
app.use(KoaBody({
  multipart: true,
  encoding: 'gzip',
  formidable: {
    keepExtensions: true,
    maxFileSize: 2000 * 1024 * 1024, //默认最大20M文件
    multipart: true //支持multipart-formdate表单
  }
}))

// koa-static
app.use(static_(
  path.join(__dirname, '../public/uploads/')
))

app.use(json())
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('数据库已连接')).catch(() => console.log('数据库连接失败'))
mongoose.set('useCreateIndex', true)

// 挂载passport
app.use(passport.initialize())
app.use(passport.session())

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 引入路由
  app.use(users.routes()).use(users.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(upload.routes()).use(upload.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
