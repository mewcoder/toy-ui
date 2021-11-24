import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css' //样式文件

// import xjUi from 'xj-ui' // 要编写对应的文档的包
// import 'xj-ui/dist/xj-ui.css'
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue
}) => {
  Vue.use(Element);
  // Vue.use(xjUi)
}