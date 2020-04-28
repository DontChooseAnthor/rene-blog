// user接口文件
// import Router from 'koa-router'
const Router = require('koa-router')
const Redis = require('koa-redis')
const Passport = require('./utils/passport')
const axios = require('./utils/axios')
// const nodeMailer = require('nodemailer')
// const Email = require('../dbs/config')
const User = require('../dbs/models/users')
// import Redis from 'koa-redis'
// import Passport from './utils/passport'
// import axios from './utils/axios'
// import nodeMailer from 'nodemailer'
// import Email from '../dbs/config'
// import User from '../dbs/models/users'

let router = new Router({
  prefix: '/users'
})

// let Store = new Redis().client

// 注册接口
router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    nickname
    // code
  } = ctx.request.body;

  // 校验code
  // if(code){
  //   const saveCode = await Store.hget(`nodemail:${username}`,'code')
  //   // 创建验证码有效期
  //   const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
  //   if(code === saveCode){
  //     if(new Date().getTime() - saveExpire>0){
  //       ctx.body={
  //         code:-1,
  //         msg:'验证码已过期，请重新获取'
  //       }
  //       return false
  //     }
  //   } else {
  //     ctx.body={
  //       code: -1,
  //       msg:'请填写正确的验证码'
  //     }
  //   }
  // } else {
  //   ctx.body={
  //     code: -1,
  //     msg:'请填写验证码'
  //   }
  // }
  //注册接口用户名查重
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '用户名已被注册,请更换用户名重新尝试'
    }
    return
  }
  // 写库
  let nuser = await User.create({
    username,
    password,
    email,
    nickname
  })
  if(nuser){
    ctx.body = {
      code:0,
      msg:'注册成功'
    }
  }else{
    ctx,body = {
      code: -1,
      msg: '注册失败,请重新尝试'
    }
  }
})

// 登录接口
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local',function(err,user,info,status){
    if(err){
      ctx.body = {
        code: -1,
        msg: err
      }
    }else{
      if(user){
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      }else{
        ctx.body = {
          code: 1,
          msg: info
        }
        return
      }
    }
  })(ctx,next)
})

// 邮箱验证
// router.post('/verify',async(ctx,next)=>{
//   let username = ctx.request.body.username
//   const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
//   if(saveExpire&&new Date().getTime-saveExpire<0){
//     ctx.body={
//       code:-1,
//       msg:'验证请求过于频繁,5分钟后再次尝试'
//     }
//     return false
//   }
//   // 发送对象
//   let transporter = nodeMailer.createTransport({
//     host:Email.smtp.host,
//     port: 587,
//     secure: false,
//     auth:{
//       user:Email.smtp.user,
//       pass:Email.smtp.pass
//     }
//   })
//   // 接受信息
//   let ko = {
//     code:Email.smtp.code(),
//     expire:Email.smtp.expire(),
//     email:ctx.request.body.email,
//     user:ctx.request.body.username
//   }
//   // 邮件显示内容
//   let mailOptions={
//     from:`"认证邮件"<${Email.smtp.user}>`,
//     to:ko.email,
//     subject:'博客平台用户注册码',
//     html:`感谢您对小站的支持，拿好您的车票>>>${ko.code}`
//   }
//   // 发送邮件
//   await transporter.sendMail(mailOptions,(error,info)=>{
//     if(error){
//       return console.error('error')
//     } else {
//       Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
//     }
//   })
//   ctx.body={
//     code:0,
//     msg:'验证码已发送，请注意在注册邮箱中查收'
//   }
// })

// 退出
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

// 获取用户名
router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

module.exports = router