```js
'use strict';

var defaults = require('./../defaults');
var utils = require('./../utils');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  // instanceConfig => 创建对象的设置的默认值
  // Axios 中 defaults 分为三个层次, Axios 默认的defaults < 创建实例传入的defaults < 调用方法时候传入的defaults
  // 个人感觉使用 this.defaults = utils.merge(defaults, instanceConfig) 会更好，当后面使用request发起请求的时候，代码变化如下:
 /*
    config = utils.merge(defaults, this.defaults, config); 老代码
    config = utils.merge(this.defaults, config); // 新代码
  */
  this.defaults = instanceConfig;
  // 拦截器
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  // 重载 request(url, config)
  // 可以支持request (config) 也可以支持 request(url, config)
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  // 拦截器设计处理
  // chain 是一个数组
  var chain = [dispatchRequest, undefined];
  // promise 是调用头，状态已经改变为 resolved
  var promise = Promise.resolve(config);

  // 使用 use 添加 fulfilled 与 rejected 添加到队列中
  // 添加 request 拦截函数的时候使用的是unshift， 这样会导致 use 后添加的先执行，先添加的后执行
  /*
  axios.interceptors.request.use(function resolve(config) {
    console.log("1");
  });

  axios.interceptors.request.use(function resolve(config) {
    console.log("2")
  })
  // 结果 2 1
   */

  // 考虑到后面 是使用 promise的链式调用， 所以在 拦截器的回调方法中 必须要返回一个 config 对象
  // 如果不返回 config， 会导致后续请求执行异常

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  // response 使用的push 添加 拦截函数，这里是添加先执行，后添加后执行
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  // promise 的初始化状态就是 resolved，这里形成了promise调用链，执行流程过程如下

  // chain  [fulfilled, rejected, ... dispatchRequest, undefined ....,fulfilled, rejected]
  // 这里补充一下 fulfilled, rejected 都是肯定是成对出现的， 具体原因可看 InterceptorManager.prototype.use
  // promise.then(undefined, undefined) 中当传递的不是function时，会发生值穿。也就是说 use 中可以传入非function，
  // 或者传入单个function
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
// 复用request 实现了 delete， get, head, options
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

// 复用request 实现了 post， put, patch
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;
```

