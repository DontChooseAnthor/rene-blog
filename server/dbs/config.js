module.exports = {
  dbs: 'mongodb://148.70.214.82:27017/blog'
  // smtp:{
  //   get host(){
  //     return 'smtp.qq.com'
  //   },
  //   get user(){
  //     return '464637243@qq.com'
  //   },
  //   get pass(){
  //     return 'wvzvkchdwwyhbgeb'
  //   }
  // },
  // 随机验证码
  // get code(){
  //   return ()=>{
  //     return Math.random().toString(16).slice(2,6).toUpperCase()
  //   }
  // },
  // 过期时间 5min
  // get expire(){
  //   return ()=>{
  //     return new Date().getTime()+300*60*1000
  //   }
  // }
}