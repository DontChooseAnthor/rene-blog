<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">HTTP基本原理</p>
        <p class="title2">在浏览器中敲入URL到获取网页内容之间发生了什么~</p>
      </div>
      <div class="article">
        <div class="main-section">
          <div class="section">URL&URI</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          URI = URL + URN
          URI是统一资源标识符的简称，用来标识抽象或物理资源的一个紧凑字符串
          URL是统一资源定位符的简称，是一个定位资源的访问地址的字符串
          URN是统一资源名称的简称，通过特定命名空间中的唯一名称或ID来标识资源
          在互联网中，几乎所有的URI都是URL，访问的网址，实际上就是访问对应地址的资源。
        </div>
        <div class="main-section">
          <div class="section">超文本</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          一个普通的网页内容就是由超文本解析而成的，网页的源代码是一整页HTML代码，里面包含了很多标签，浏览器通过解析标签还原这个页面内容，这些HTML源代码就是超文本
        </div>

        <div class="main-section">
          <div class="section">HTTP和HTTPS</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          每个URL地址前，都会有HTTP或者HTTPS的前缀,HTTP是超文本传输协议的简称，这个协议是用于从网络传输超文本数据到本地浏览器的传输协议，它能高效而准确的传输超文本内容。HTTP由万维网协会（World Wide Web Consortium）和Internet工作小组IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是HTTP 1.1版本 <br>
          而HTTPS是在协议基础上添加了SSL层，也就是一层安全加密，使得协议更加安全可靠，
          HTTPS的传输都是通过SSL加密的，主要有两个作用：
          <ul>
            <li>建立一个信息安全通道来保证数据传输的安全</li>
            <li>确认网站的真实性，凡是使用了HTTPS的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过CA机构颁发的安全签章来查询</li>
          </ul>
        </div>
        <div class="main-section">
          <div class="section">HTTP请求过程</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          在浏览器中输入网址的过程，实际就是浏览器向网站所在的服务器发送了请求，网站服务器接收到请求以后进行处理和解析，然后返回对应的响应，响应中包含网页源代码等内容，浏览器解析响应后将内容还原给用户
          <dl>
            <dt>响应体：</dt>
            <dd>name:请求的名称，一般会将URL的最后一部分内容当作名称</dd>
            <dd>status:响应的状态码</dd>
            <dd>type:请求的文档类型。这里为document，代表我们这次请求的是一个HTML文档，内容就是一些HTML代码</dd>
            <dd>initiator:请求的源头</dd>
            <dd>size:从服务器下载的文件和请求的资源大小</dd>
            <dd>time:发起请求到获取响应所用的总时间</dd>
            <dd>waterfall：网络请求的可视化瀑布流</dd>
          </dl>
        </div>

        <div class="main-section">
          <div class="section">请求</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          请求是由客户端向服务端发出的，分成四个部分：请求方法（Request Method）、请求的网址（Request URL）、请求头（Request Headers）、请求体（Request Body）<br>
          <b>请求方法：</b>主要是GET和POST
          <dl>
            <dt>GET和POST请求方法有如下区别</dt>
            <dd>GET请求中的参数包含在URL里面，数据可以在URL中看到，而POST请求的URL不会包含这些数据，数据都是通过表单形式传输的，会包含在请求体中</dd>
            <dd>GET请求提交的数据最多只有1024字节，而POST方式没有限制</dd>
          </dl>
          <b>请求头：</b>请求头，用来说明服务器要使用的附加信息，比较重要的信息有Cookie、Referer、User-Agent等 <br>
          <dl>
            <dd>Accept：请求报头域，用于指定客户端可接受哪些类型的信息</dd>
            <dd>Accept-Language：指定客户端可接受的语言类型</dd>
            <dd>Accept-Encoding：指定客户端可接受的内容编码</dd>
            <dd>Host：用于指定请求资源的主机IP和端口号，其内容为请求URL的原始服务器或网关的位置。从HTTP 1.1版本开始，请求必须包含此内容</dd>
            <dd>Cookie：也常用复数形式 Cookies，这是网站为了辨别用户进行会话跟踪而存储在用户本地的数据。它的主要功能是维持当前访问会话</dd>
            <dd>Referer：此内容用来标识这个请求是从哪个页面发过来的，服务器可以拿到这一信息并做相应的处理，如作来源统计、防盗链处理等</dd>
            <dd>User-Agent：简称UA，它是一个特殊的字符串头，可以使服务器识别客户使用的操作系统及版本、浏览器及版本等信息</dd>
            <dd>Content-Type：也叫互联网媒体类型（Internet Media Type）或者MIME类型，在HTTP协议消息头中，它用来表示具体请求中的媒体类型信息</dd>
          </dl>
          <b>请求体：</b>请求体一般承载的内容是POST请求中的表单数据，而对于GET请求，请求体则为空
        </div>
        
        <div class="main-section">
          <div class="section">响应</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          响应，由服务端返回给客户端，可以分为三部分：响应状态码（Response Status Code）、响应头（Response Headers）和响应体（Response Body）
          <b>响应状态码：</b>特点数字表示服务器的响应状态<br>
          <b>响应头：</b>响应头包含了服务器对请求的应答信息，如Content-Type、Server、Set-Cookie等
          <dl>
            <dd>Date：标识响应产生的时间</dd>
            <dd>Last-Modified：指定资源的最后修改时间</dd>
            <dd>Content-Encoding：指定响应内容的编码</dd>
            <dd>Server：包含服务器的信息，比如名称、版本号等</dd>
            <dd>Content-Type：文档类型，指定返回的数据类型是什么，如text/html代表返回HTML文档，application/x-javascript则代表返回JavaScript文件，image/jpeg则代表返回图片</dd>
            <dd>Set-Cookie：设置Cookies。响应头中的Set-Cookie告诉浏览器需要将此内容放在Cookies中，下次请求携带Cookies请求</dd>
            <dd>Expires：指定响应的过期时间，可以使代理服务器或浏览器将加载的内容更新到缓存中。如果再次访问时，就可以直接从缓存中加载，降低服务器负载，缩短加载时间</dd>
          </dl>
          <b>响应体：</b>响应的正文数据都在响应体中，比如请求网页时，它的响应体就是网页的HTML代码
        </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from '../components/article'
export default {
  data () {
    return {

    }
  },
  components:	{
    reArticle
  },
  methods: {},
}
</script>

<style lang="less" scoped>
  .header{
    background-image: url("../assets/resource/10.jpg");
  }
</style>