import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/404', hidden: true },
    { path: '/', redirect: '/index', hidden: true },
    { 
      path: '/404', 
      component: ()=>import('@/views/error') 
    },
    { 
      path: '/index', 
      name: 'index',
      component: ()=>import('@/views/index')
    },
    

  ]
})

