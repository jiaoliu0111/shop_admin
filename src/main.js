// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由实例
import router from './router'

// 导入ElemetnUI
import ElementUI from 'element-ui'
// 导入elementUI样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'
// 安装插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  // components: { App: App },
  template: '<App/>',
  //  4- 将路由实例与vue实例关联到一起
  router
})
