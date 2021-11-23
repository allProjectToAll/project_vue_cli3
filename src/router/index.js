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
      component: ()=>import('@/views/index'),
      children:[
        {path: '/',name:'默认首页',component: ()=>import('@/views/home')},
        //用户管理
        // {path: '/demo',name:'demo',component: ()=>import('@/pages/test/demo')},
        //test
        // {path: '/echarts',name:'图标',component: ()=>import('@/pages/test/Echarts')},
        // {path: '/err',name:'err',component:  ()=>import('@/pages/test/error') },
        // {path: '/test',name:'测试模块',component: ()=>import('@/pages/test/Test') },
        // {path: '/dragView',name:'拖拽生成页面',component: ()=>import('@/components/common/dragView') },
      ]
    },
    

  ]
})

