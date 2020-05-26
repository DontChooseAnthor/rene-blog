<template>
  <div>
      <re-article>
      <div class="header" v-lazy:background-image="require('../../assets/resource/封面_古迹.jpg')">
        <p class="title1">IndexedDB</p>
        <p class="title2">浏览器也有数据库？</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>随</span>着浏览器功能的不断增强，网站也需要开始考虑如何将大量的数据储存在客户端，以此减少服务器端的压力，同时直接从本地获取数据也能优化用户体验 <br>
          现有的浏览器数据储存方案都适合大量数据储存：Cookie、LocalStorage。所以诞生出了一种新的解决方案——IndexedDB
        </div>

        <div class="main-section">
          <div class="section">IndexedDB介绍</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          IndexedDB是浏览器提供的本地数据库，它可以由网页脚本创建和操作。它不仅可以储存大量数据，还可以建立索引，本质上是一个事务型数据库系统
          <dl>
            <dt>IndexedDB具有以下几个特点：</dt>
            <dd>1.键值对储存：IndexedDB内部采用对象仓库(object store)存放数据，所有类型的数据都可以直接存入，包括 JavaScript对象</dd>
            <dd>2.异步：IndexedDB操作时不会锁死浏览器，用户依然可以进行其他操作，这与LocalStorage形成对比，后者的操作是同步的</dd>
            <dd>3.事务管理：IndexedDB支持事务操作</dd>
            <dd>4.同源限制：网页只能访问自身域名下的数据库，而不能访问跨域的数据库</dd>
            <dd>5.储存空间大： IndexedDB的储存空间比LocalStorage大得多，一般来说不少于250MB，甚至没有上限</dd>
            <dd>6.二进制储存：IndexedDB不仅可以储存字符串，还可以储存二进制数据</dd>
          </dl>
        </div>

        <div class="main-section">
          <div class="section">IndexedDB API</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          IndexedDB API是一种底层API，把不同的数据库操作实体抽象化，API就是抽象后的对象接口
          <dl>
            <dt>连接数据库:</dt>
            <dl>
              <dt>IDBEnvironment:包含了一个indexedDB属性，这个属性可以方便的操作IndexedDB</dt>
            </dl>
            <dl>
              <dt>IDBFactory:数据库访问接口，通过window.indexedDB对象实现</dt>
              <dd>1.IDBFactory.open：打开一个数据库连接或者创建一个数据库</dd>
              <dd>2.IDBFactory.deleteDatabase：删除数据库</dd>
              <dd>3.IDBFactory.cmp：比较两个键的方法并返回一个结果，表明哪个值更大</dd>
            </dl>
            <dl>
              <dt>IDBOpenDBRequest:提供了访问打开或删除数据库的请求的结果(通过IDBFactory.open和IDBFactory.deleteDatabase)</dt>
            </dl>
            <dl>
              <dt>IDBDatabase方法</dt>
              <dd>1.IDBDatabase.close:在一个单独的线程中关闭数据库连接并立即返回</dd>
              <dd>2.IDBDatabase.createObjectStore:创建并返回一个新的object store或者index</dd>
              <dd>3.IDBDatabase.deleteObjectStore:根据给定的名字，删除在当前连接的数据库中的object store和相关的索引</dd>
              <dd>4.IDBDatabase.transaction:立即返回一个包含IDBTransaction.objectStore方法的transaction对象</dd>
            </dl>
            <dl>
              <dt>IDBDatabase属性</dt>
              <dd>1.IDBDatabase.name:DOMString类型，数据库名</dd>
              <dd>2.IDBDatabase.version:64-bit整型数，数据库版本</dd>
              <dd>3.IDBDatabase.objectStoreNames:DOMStringList类型，连接数据库中所有object store名字</dd>
            </dl>
            <dl>
              <dt>IDBDatabase回调</dt>
              <dd>1.IDBDatabase.onabort:中断连接时触发</dd>
              <dd>2.IDBDatabase.onerror:访问失败时触发</dd>
              <dd>3.IDBDatabase.onversionchange:数据库结构发生更改时触发</dd>
            </dl>
          </dl>
          <dl>
            <dt>接受和修改数据</dt>
            <dl>
              <dt>IDBTransaction:提供异步事务关于数据库的操作</dt>
            </dl>
            <dl>
              <dt>IDBTransaction属性(只读)</dt>
              <dd>IDBTransaction.db:当前事务所属的数据库连接</dd>
              <dd>IDBTransaction.error:当前事务操作出错时返回DOM异常事件</dd>
              <dd>IDBTransaction.mode:隔离事务作用域内的object store中数据访问的模式</dd>
              <dd>IDBTransaction.objectStoreNames:返回DOMStringList类型的IDBObjectStore键名</dd>
            </dl>
            <dl>
              <dt>IDBTransaction事件处理</dt>
              <dd>IDBTransaction.onabort:中止事务，onabort会触发中止事件IDBTransaction.abort</dd>
              <dd>IDBTransaction.oncomplete:事务完成时触发</dd>
              <dd>IDBTransaction.onerror:事务失败时触发</dd>
            </dl>
            <dl>
              <dt>IDBTransaction方法</dt>
              <dd>IDBTransaction.abort:放弃本次连接的transaction的所有修改，如果当前的transaction处于回滚完毕或完成状态，则会抛出一个错误事件</dd>
              <dd>IDBTransaction.objectStore:返回表示作为此事务作用域一部分的object store的IDBObjectStore对象</dd>
            </dl>
            <dl>
              <dt>IDBRequest:处理数据库请求并提供对结果访问的通用接口</dt>
              <dl>
                <dt>IDBObjectStore:通过主键查找的IndexedDB数据库中的一组数据的对象存储区</dt>
              </dl>
              <dl>
                <dt>IDBIndex:访问IndexedDB数据库中的数据子集，但使用索引来检索记录而不是主键</dt>
              </dl>
            </dl>
          </dl>
          完整Demo：
          <div v-html="IndexedDB"></div>
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../../components/article'
import 'highlight.js/styles/monokai-sublime.css';
import IndexedDB from '../../public/Artical/IndexedDB/indexedDB.md'
export default {
  data () {
    return {

    }
  },
  computed: {
    IndexedDB(){
      return IndexedDB
    }
  },
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>

</style>