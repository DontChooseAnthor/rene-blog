const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
// const redisStore = require('koa-redis')
const json = require('koa-json')
const dbConfig =require('./dbs/config.js')
const passport = require('./interface/utils/passport')
const users = require('./interface/users')
const search = require('./interface/search')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

app.keys = ['keys', 'keykeys'];
app.proxy = true
app.use(session({
  cookie: {secure: false, maxAge:86400000},
  // store: new redisStore()
},app))

app.use(bodyParser({
  extendType: ['json', 'form', 'text']
}))

app.use(json())
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('数据库已连接')).catch(()=>console.log('数据库连接失败'))
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
