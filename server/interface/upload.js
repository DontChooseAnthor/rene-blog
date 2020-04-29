const Router = require('koa-router')
const axios = require('axios')
const fs = require('fs')
const path = require('path')


let router = new Router({
  prefix:'/upload'
})

router.post('/file',async (ctx,next)=>{
  const file = ctx.request.files.file
  const reader = fs.createReadStream(file.path)
  var myDate = new Date()
  // 添加上传文件的时间戳
  var newFilename = myDate.getTime()+'.'+file.name
  var targetPath = path.join(__dirname,'../../public/uploads/')+`/${newFilename}`
  const upStream = fs.createWriteStream(targetPath)
  reader.pipe(upStream)
  return ctx.body = {code:0,msg:'上传成功'}
})
// 多文件
router.post('/files',async (ctx,next)=>{
  const files = ctx.request.files.file
  for(let file of files){
    const reader = fs.createReadStream(file.path)
    var myDate = new Date()
  // 添加上传文件的时间戳
    var newFilename = myDate.getTime()+'.'+file.name
    let targetPath = path.join(__dirname,'../../public/uploads/')+`/${newFilename}`
    const upStream = fs.createWriteStream(targetPath)
    reader.pipe(upStream)
  }
  return ctx.body = {code:0,msg:'上传成功'}
})


module.exports = router