<template>
  <div>
    <re-article>
      <div class="header">
        <p class="title1">webpack原理</p>
        <p class="title2">理解webpack的简单工作原理~</p>
      </div>
      <div class="article">
        <div class="begin">
          <span>w</span>ebpack是一个现代JavaScript应用程序的静态模块打包器，当webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle
        </div>
        <div class="main-section">
          <div class="section">基本概念</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          <dl>
            <dt>Entry:</dt>
            <dd>入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入</dd>
            <dt>Module:</dt>
            <dd>模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块</dd>
            <dt>Chunk:</dt>
            <dd>代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割</dd>
            <dt>Loader:</dt>
            <dd>模块转换器，用于把模块原内容按照需求转换成新内容</dd>
            <dt>Plugin:</dt>
            <dd>扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情</dd>
          </dl>一个完整的简单webpack配置文件应该长这样：
          <div v-html="webpack1"></div>
        </div>
        <div class="main-section">
          <div class="section">流程概况</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container">
          <dl>
            <dt>webpack的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：</dt>
            <dd>1.初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数</dd>
            <dd>2.开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译</dd>
            <dd>3.确定入口：根据配置中的 entry 找出所有的入口文件</dd>
            <dd>4.编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理</dd>
            <dd>5.完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系</dd>
            <dd>6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会</dd>
            <dd>7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统</dd>
          </dl>
        </div>
        <div class="main-section">
          <div class="section">流程细节</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <dl>
            <dt>Webpack 的构建流程可以分为以下三大阶段：</dt>
            <dd>1.初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler</dd>
            <dd>2.编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理</dd>
            <dd>3.输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统</dd>
          </dl>
        </div>
        <div class="main-section">
          <div class="section">初始化阶段</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>解释</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>初始化参数</td>
                <td>
                  从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。 这个过程中还会执行配置文件中的插件实例化语句
                  <code>new Plugin()</code>。
                </td>
              </tr>
              <tr>
                <td>
                  实例化
                  <code>Compiler</code>
                </td>
                <td>
                  用上一步得到的参数初始化
                  <code>Compiler</code> 实例，
                  <code>Compiler</code> 负责文件监听和启动编译。
                  <code>Compiler</code> 实例中包含了完整的
                  <code>Webpack</code> 配置，全局只有一个
                  <code>Compiler</code> 实例。
                </td>
              </tr>
              <tr>
                <td>加载插件</td>
                <td>
                  依次调用插件的
                  <code>apply</code> 方法，让插件可以监听后续的所有事件节点。同时给插件传入
                  <code>compiler</code> 实例的引用，以方便插件通过
                  <code>compiler</code> 调用 Webpack 提供的 API。
                </td>
              </tr>
              <tr>
                <td>
                  <code>environment</code>
                </td>
                <td>开始应用 Node.js 风格的文件系统到 compiler 对象，以方便后续的文件寻找和读取。</td>
              </tr>
              <tr>
                <td>
                  <code>entry-option</code>
                </td>
                <td>
                  读取配置的
                  <code>Entrys</code>，为每个
                  <code>Entry</code> 实例化一个对应的
                  <code>EntryPlugin</code>，为后面该
                  <code>Entry</code> 的递归解析工作做准备。
                </td>
              </tr>
              <tr>
                <td>
                  <code>after-plugins</code>
                </td>
                <td>
                  调用完所有内置的和配置的插件的
                  <code>apply</code> 方法。
                </td>
              </tr>
              <tr>
                <td>
                  <code>after-resolvers</code>
                </td>
                <td>
                  根据配置初始化完
                  <code>resolver</code>，
                  <code>resolver</code> 负责在文件系统中寻找指定路径的文件。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-section">
          <div class="section">编译阶段</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>解释</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>run</code>
                </td>
                <td>启动一次新的编译。</td>
              </tr>
              <tr>
                <td>
                  <code>watch-run</code>
                </td>
                <td>
                  和
                  <code>run</code> 类似，区别在于它是在监听模式下启动的编译，在这个事件中可以获取到是哪些文件发生了变化导致重新启动一次新的编译。
                </td>
              </tr>
              <tr>
                <td>
                  <code>compile</code>
                </td>
                <td>
                  该事件是为了告诉插件一次新的编译将要启动，同时会给插件带上
                  <code>compiler</code> 对象。
                </td>
              </tr>
              <tr>
                <td>
                  <code>compilation</code>
                </td>
                <td>
                  当
                  <code>Webpack</code> 以开发模式运行时，每当检测到文件变化，一次新的
                  <code>Compilation</code> 将被创建。一个
                  <code>Compilation</code> 对象包含了当前的模块资源、编译生成资源、变化的文件等。
                  <code>Compilation</code> 对象也提供了很多事件回调供插件做扩展。
                </td>
              </tr>
              <tr>
                <td>
                  <code>make</code>
                </td>
                <td>
                  一个新的
                  <code>Compilation</code> 创建完毕，即将从
                  <code>Entry</code> 开始读取文件，根据文件类型和配置的
                  <code>Loader</code> 对文件进行编译，编译完后再找出该文件依赖的文件，递归的编译和解析。
                </td>
              </tr>
              <tr>
                <td>
                  <code>after-compile</code>
                </td>
                <td>
                  一次
                  <code>Compilation</code> 执行完成。
                </td>
              </tr>
              <tr>
                <td>
                  <code>invalid</code>
                </td>
                <td>当遇到文件不存在、文件编译错误等异常时会触发该事件，该事件不会导致 Webpack 退出。</td>
              </tr>
            </tbody>
          </table>在编译阶段中，最重要的要数
          <code>compilation</code>事件了，因为在
          <code>compilation</code>阶段调用了 Loader 完成了每个模块的转换操作，在
          <code>compilation</code>阶段又包括很多小的事件，它们分别是：
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>解释</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>build-module</code>
                </td>
                <td>使用对应的 Loader 去转换一个模块。</td>
              </tr>
              <tr>
                <td>
                  <code>normal-module-loader</code>
                </td>
                <td>
                  在用 Loader 对一个模块转换完后，使用
                  <code>acorn</code> 解析转换后的内容，输出对应的抽象语法树（
                  <code>AST</code>），以方便 Webpack 后面对代码的分析。
                </td>
              </tr>
              <tr>
                <td>
                  <code>program</code>
                </td>
                <td>从配置的入口模块开始，分析其 AST，当遇到 require 等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系。</td>
              </tr>
              <tr>
                <td>
                  <code>seal</code>
                </td>
                <td>所有模块及其依赖的模块都通过 Loader 转换完成后，根据依赖关系开始生成 Chunk。</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="main-section">
          <div class="section">输出阶段</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>解释</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>should-emit</code>
                </td>
                <td>所有需要输出的文件已经生成好，询问插件哪些文件需要输出，哪些不需要。</td>
              </tr>
              <tr>
                <td>
                  <code>emit</code>
                </td>
                <td>确定好要输出哪些文件后，执行文件输出，可以在这里获取和修改输出内容。</td>
              </tr>
              <tr>
                <td>
                  <code>after-emit</code>
                </td>
                <td>文件输出完毕。</td>
              </tr>
              <tr>
                <td>
                  <code>done</code>
                </td>
                <td>成功完成一次完成的编译和输出流程。</td>
              </tr>
              <tr>
                <td>
                  <code>failed</code>
                </td>
                <td>如果在编译和输出流程中遇到异常导致 Webpack 退出时，就会直接跳转到本步骤，插件可以在本事件中获取到具体的错误原因。</td>
              </tr>
            </tbody>
          </table>在输出阶段已经得到了各个模块经过转换后的结果和其依赖关系，并且把相关模块组合在一起形成一个个 Chunk。 在输出阶段会根据 Chunk 的类型，使用对应的模版生成最终要要输出的文件内容
        </div>
        <div class="main-section">
          <div class="section">输出文件分析</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          虽然在前面的章节中你学会了如何使用 Webpack ，也大致知道其工作原理，可是你想过 Webpack 输出的
          <code>bundle.js</code> 是什么样子的吗？ 为什么原来一个个的模块文件被合并成了一个单独的文件？为什么
          <code>bundle.js</code> 能直接运行在浏览器中？ 本节将解释清楚以上问题
          <br />简化下的bundle.js代码如下：
          <div v-html="webpack2"></div>
          <code>bundle.js</code>能直接运行在浏览器中的原因在于输出的文件中通过
          <code>__webpack_require__</code> 函数定义了一个可以在浏览器中执行的加载函数来模拟 Node.js 中的
          <code>require</code> 语句。
          <br />原来一个个独立的模块文件被合并到了一个单独的
          <code>bundle.js</code>的原因在于浏览器不能像 Node.js 那样快速地去本地加载一个个模块文件，而必须通过网络请求去加载还未得到的文件。 如果模块数量很多，加载时间会很长，因此把所有模块都存放在了数组中，执行一次网络加载。
          <br />如果仔细分析
          <code>__webpack_require__</code>函数的实现，你还有发现 Webpack 做了缓存优化： 执行加载过的模块不会再执行第二次，执行结果会缓存在内存中，当某个模块第二次被访问时会直接去内存中读取被缓存的返回值
          <br />
        </div>
        <div class="main-section">
          <div class="section">分割代码时的输出</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          如果把源码中<code>main.js</code>修改为：<br>
          <div v-html="webpack3"></div>
          重新构建后会输出两个文件，分别是执行入口文件<code>bundle.js</code>和异步加载文件<code>0.bundle.js</code> <br>
          其中<code>0.bundle.js</code>内容如下：
          <div v-html="webpack4"></div>
          这里的<code>bundle.js</code>和上文的<code>bundle.js</code>是有区别的
          <dl>
            <dd>多了一个 <code> __webpack_require__.e </code>用于加载被分割出去的，需要异步加载的 Chunk 对应的文件</dd>
            <dd>多了一个<code> webpackJsonp </code>函数用于从异步加载的文件中安装模块</dd>
          </dl>
          在使用了 CommonsChunkPlugin 去提取公共代码时输出的文件和使用了异步加载时输出的文件是一样的，都会有 <code> __webpack_require__.e </code> 和 <code> webpackJsonp </code> ,原因在于提取公共代码和异步加载本质上都是代码分割
        </div>
        <div class="main-section">
          <div class="section">编写Loader</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
        </div>
        <div class="section-container-short">
          Loader 就像是一个翻译员，能把源文件经过转化后输出新的结果，并且一个文件还可以链式的经过多个翻译员翻译 <br>
          以处理SCSS文件为例：<br>
          <dl>
            <dd>SCSS 源代码会先交给 <code>sass-loader</code> 把 SCSS 转换成 CSS</dd>
            <dd>把  <code>sass-loader</code>  输出的 CSS 交给 <code>css-loader</code> 处理，找出 CSS 中依赖的资源、压缩 CSS 等</dd>
            <dd>把 <code>css-loader</code> 输出的 CSS 交给 <code>style-loader</code> 处理，转换成通过脚本加载的 JavaScript 代码</dd>
          </dl>
          可以看出以上处理过程需要有顺序的链式执行，先<code>sass-loader</code>再<code>css-loader</code>再<code>style-loader</code>  
          </div>

      
      <div class="main-section">
          <div class="section">Loader的职责</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        由上面的例子可以看出：一个 Loader 的职责是单一的，只需要完成一种转换。 如果一个源文件需要经历多步转换才能正常使用，就通过多个 Loader 去转换。 在调用多个 Loader 去转换一个文件时，每个 Loader 会链式的顺序执行， 第一个 Loader 将会拿到需处理的原内容，上一个 Loader 处理后的结果会传给下一个接着处理，最后的 Loader 将处理后的最终结果返回给 Webpack <br>

所以，在你开发一个 Loader 时，请保持其职责的单一性，你只需关心输入和输出
      </div>
      <div class="main-section">
          <div class="section">Loader基础</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        由于 Webpack 是运行在 Node.js 之上的，一个 Loader 其实就是一个 Node.js 模块，这个模块需要导出一个函数。 这个导出的函数的工作就是获得处理前的原内容，对原内容执行处理后，返回处理后的内容 <br>
        一个最简单的Loader的源码如下：
        <div v-html="webpack5"></div>
        由于 Loader 运行在 Node.js 中，你可以调用任何 Node.js 自带的 API，或者安装第三方模块进行调用：
        <div v-html="webpack6"></div>
      </div>
      <div class="main-section">
          <div class="section">Loader进阶</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        以上只是个最简单的 Loader，Webpack 还提供一些 API 供 Loader 调用，下面来一一介绍
      <dl>
        <dt>获得 Loader 的 <code>options</code></dt>
        <dd>在最上面处理 SCSS 文件的 Webpack 配置中，给<code>css-loader</code>传了 <code>options</code>参数，以控制<code>css-loader</code>。 如何在自己编写的 Loader 中获取到用户传入的 options 呢？需要这样做：
        <div v-html="webpack7"></div></dd>
        <dt>返回其它结果</dt>
        <dd>上面的 Loader 都只是返回了原内容转换后的内容，但有些场景下还需要返回除了内容之外的东西<br>
        例如以用 <code>babel-loader</code> 转换 ES6 代码为例，它还需要输出转换后的 ES5 代码对应的 Source Map，以方便调试源码。 为了把 Source Map 也一起随着 ES5 代码返回给 Webpack，可以这样写：
        <div v-html="webpack8"></div>
        其中的 <code>this.callback</code> 是 Webpack 给 Loader 注入的 API，以方便 Loader 和 Webpack 之间通信。 <code>this.callback</code> 的详细使用方法如下：
        <div v-html="webpack9"></div>
        Source Map 的生成很耗时，通常在开发环境下才会生成 Source Map，其它环境下不用生成，以加速构建。 为此 Webpack 为 Loader 提供了 <code>this.sourceMap</code> API 去告诉 Loader 当前构建环境下用户是否需要 Source Map。 如果你编写的 Loader 会生成 Source Map，请考虑到这点
        </dd>
      </dl>
      </div>
      <div class="main-section">
          <div class="section">同步与异步</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        Loader 有同步和异步之分，上面介绍的 Loader 都是同步的 Loader，因为它们的转换流程都是同步的，转换完成后再返回结果。 但在有些场景下转换的步骤只能是异步完成的，例如你需要通过网络请求才能得出结果，如果采用同步的方式网络请求就会阻塞整个构建，导致构建非常缓慢<br>
        在转换步骤是异步时，你可以这样：
        <div v-html="webpack10"></div>
      </div>
      <div class="main-section">
          <div class="section">处理二进制数据</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        在默认的情况下，Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串。 但有些场景下 Loader 不是处理文本文件，而是处理二进制文件，例如 <code>file-loader</code> ，就需要 Webpack 给 Loader 传入二进制格式的数据。 为此，你需要这样编写 Loader：
        <div v-html="webpack11"></div>
        以上代码中最关键的代码是最后一行 <code>module.exports.raw = true</code>;，没有该行 Loader 只能拿到字符串
      </div>
      <div class="main-section">
          <div class="section">缓存加速</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        在有些情况下，有些转换操作需要大量计算非常耗时，如果每次构建都重新执行重复的转换操作，构建将会变得非常缓慢。 为此，Webpack 会默认缓存所有 Loader 的处理结果，也就是说在需要被处理的文件或者其依赖的文件没有发生变化时， 是不会重新调用对应的 Loader 去执行转换操作的 <br>
        如果你想让 Webpack 不缓存该 Loader 的处理结果，可以这样：
        <div v-html="webpack12"></div>
      </div>
      <div class="main-section">
          <div class="section">加载本地 Loader</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        在开发 Loader 的过程中，为了测试编写的 Loader 是否能正常工作，需要把它配置到 Webpack 中后，才可能会调用该 Loader。 在前面的章节中，使用的 Loader 都是通过 Npm 安装的，要使用 Loader 时会直接使用 Loader 的名称，代码如下：
        <div v-html="webpack13"></div>
      </div>
      <div class="main-section">
          <div class="section">原理总结</div>
          <font-awesome-icon class="section-icon" :icon="['fas','cannabis']" />
      </div>
      <div class="section-container-short">
        Webpack 是一个庞大的 Node.js 应用，如果你阅读过它的源码，你会发现实现一个完整的 Webpack 需要编写非常多的代码。 但你无需了解所有的细节，只需了解其整体架构和部分细节即可。 <br>

对 Webpack 的使用者来说，它是一个简单强大的工具； 对 Webpack 的开发者来说，它是一个扩展性的高系统。 <br>

Webpack 之所以能成功，在于它把复杂的实现隐藏了起来，给用户暴露出的只是一个简单的工具，让用户能快速达成目的。 同时整体架构设计合理，扩展性高，开发扩展难度不高，通过社区补足了大量缺失的功能，让 Webpack 几乎能胜任任何场景
      </div>
      </div>
    </re-article>
  </div>
</template>

<script>
import reArticle from "../components/article";
import "highlight.js/styles/monokai-sublime.css";
import webpack1 from "../public/Artical/webpack0/webpack1.md";
import webpack2 from "../public/Artical/webpack0/webpack2.md";
import webpack3 from "../public/Artical/webpack0/webpack3.md";
import webpack4 from "../public/Artical/webpack0/webpack4.md";
import webpack5 from "../public/Artical/webpack0/webpack5.md";
import webpack6 from "../public/Artical/webpack0/webpack6.md";
import webpack7 from "../public/Artical/webpack0/webpack7.md";
import webpack8 from "../public/Artical/webpack0/webpack8.md";
import webpack9 from "../public/Artical/webpack0/webpack9.md";
import webpack10 from "../public/Artical/webpack0/webpack10.md";
import webpack11 from "../public/Artical/webpack0/webpack11.md";
import webpack12 from "../public/Artical/webpack0/webpack12.md";
import webpack13 from "../public/Artical/webpack0/webpack13.md";
import webpack14 from "../public/Artical/webpack0/webpack14.md";

export default {
  data() {
    return {};
  },
  computed: {
    webpack1() {
      return webpack1;
    },
    webpack2() {
      return webpack2;
    },
    webpack3() {
      return webpack3;
    },
    webpack4() {
      return webpack4;
    },
    webpack5() {
      return webpack5;
    },
    webpack6() {
      return webpack6;
    },
    webpack7() {
      return webpack7;
    },
    webpack8() {
      return webpack8;
    },
    webpack9() {
      return webpack9;
    },
    webpack10() {
      return webpack10;
    },
    webpack11() {
      return webpack11;
    },
    webpack12() {
      return webpack12;
    },
    webpack13() {
      return webpack13;
    },
    webpack14() {
      return webpack14;
    }
  },
  components: {
    reArticle
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.header {
  background-image: url("../assets/resource/14.jpg");
}
</style>