import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'
import api from '@/api/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
Vue.prototype.api = api;

import jsonJs from '@/libs/json'
Vue.prototype.jsonJs = jsonJs;

import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
  ops: {
    onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
    background: "#F5F5F5",//滚动条颜色
    opacity: 0.5,//滚动条透明度
    "overflow-x": "hidden"
  }, // 在这里设置全局默认配置
  name: 'vueScroll' // 在这里自定义组件名字，默认是vueScroll
});


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')