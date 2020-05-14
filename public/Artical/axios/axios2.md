```js
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var defaults = require('./defaults');

/**
 * 创建 Axios 的一个实例
 * Create an instance of Axios
 * 
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);

  // instance 是一个方法, 实际上就是 Axios.prorotype.request， 方法的 this => context
  var instance = bind(Axios.prototype.request, context);

  // 把 Axios 原型上面的属性(方法)复制到 instance 上面，保证被复制的方法中 this => context
  // 注意 utils.extend 和 utils.merge的区别，两者是不同的
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  // context 上面的属性都复制到 instance，context.defaults 和 context.interceptors 通过instance能够访问
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
// 创建 Axios 实例
axios.create = function create(instanceConfig) {
  // instanceConfig 是开发者提供的配置属性，将会和 Axios 提供的默认配置属性合并，
  // 形成的新的配置属性将会是实例请求的默认属性 (很常用的设计方法)
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
// 请求取消
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// 输出Axios
module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;
```

