```js
import axios from './axios'
console.log(typeof axios); // function
axios({
  url: 'http://localhost...'
}).then((res) => {
  console.log(res)
})
```

