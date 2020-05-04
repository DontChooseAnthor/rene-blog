```js
function Promise(executor){
    var self = this
    self.state = 'pending'
    self.value = undefined  //成功的响应
    self.reason = undefined  //失败的响应
    function resolve(value){ 
        if(self.state === 'pending'){
        self.state = 'resolved' //修改状态
        self.value = value //将响应值返回
      }
   }
    function reject(reason){
        if(self.state === 'pending'){  //与成功响应同理
        self.state = 'rejected'
        self.reason = reason
      }
   }
    try{
        executor(resolve,reject) //executor执行
    }catch(err){
        reject(err)  //executor出错返回reject
    }
}
```

