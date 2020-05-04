```js
//then方法接受两个参数：onFulfilled，onRejected
Promise.prototype.then = function(onFulfilled,onRejected){
    // onFulfilled、onRejected是可选参数
    onFulfilled = typeof onFulfilled === 'function'?onFulfilled:val=>val;
    onRejected = typeof onRejected === 'function'?onRejected: err=>{throw err}
    let self = this
    let promise2 
    // 创建新的Promise对象
    let promise2 = new Promise((resolve,reject)=>{
        if(self.status === 'resolved'){
            // 根据promiseA+规范，onFulfilled或onRejected必须
            // 被调用不是当前的上下文，then方法是异步的
            setTimeout(()=>{
                try{
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e) 
                }
            },0)
        }
        
        if(self.status === 'rejected'){
            setTimeout(()=>{
                try{
                    let x = onRejected(self.reason) 
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e)
                }
            },0)
        }
    
        if(self.status === 'pending'){
            self.onResolvedCallbacks.push(()=>{
                setTimeout(()=>{
                    try{
                        let x =  onFulfilled(self.value)
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            }) 
            // 传入失败时的回调函数
            self.onRejectedCallbacks.push(()=>{
                setTimeout(()=>{
                    try{
                        let x = onRejected(self.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            })
        }
    })
    return promise2
} 
```

