const Router =require('koa-router')
const axios = require('./utils/axios')
const Poi = require('../dbs/models/poi')

let router = new Router({
  prefix:'/search'
})



module.exports = router