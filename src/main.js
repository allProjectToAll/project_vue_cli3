import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'
import api from '@/api/index'

import './styles/index.scss'
Vue.prototype.api = api;

import jsonJs from '@/libs/json'
Vue.prototype.jsonJs = jsonJs;

import Adapt from './utils/adapt'
Adapt(window).resize(375,'',480)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')