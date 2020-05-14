```js
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('第一层 - 开始')
    setTimeout(() => {
        next()
    }, 0)
    console.log('第一层 - 结束')
})

app.use((req, res, next) => {
    console.log('第二层 - 开始')
    setTimeout(() => {
        next()
    }, 0)
    console.log('第二层 - 结束')
})

app.use('/api', (req, res, next) => {
    console.log('第三层 - 开始')
    res.json({
        code: 0
    })
    console.log('第三层 - 结束')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})
```

打印结果如下：

```js
第一层 - 开始
第一层 - 结束
第二层 - 开始
第二层 - 结束
第三层 - 开始
第三层 - 结束
```

