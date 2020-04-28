const passport = require('koa-passport')
const LocalStrategy=require('passport-local').Strategy
const UserModel=require('../../dbs/models/users')

passport.use(new LocalStrategy(async function(username,password,done){
  var where = {
    username
  }
  var result = await UserModel.findOne(where)
  if(result!=null){
    if(result.password===password){
      return done(null,result)
    } else {
      return done(null,false,'密码错误')
    }
  } else {
    return done(null,false,'用户不存在')
  }
}))

// 自动验证,通过api储存到session
passport.serializeUser(function(user,done){
  done(null,user)
})

passport.deserializeUser(function(user,done){
  return done(null,user)
})

module.exports = passport