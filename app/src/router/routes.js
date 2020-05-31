





export default [
  // 首页路由组件
  {
    path: '/',
    component: ()=>import('../pages/home/home.vue')
  },
  {
    path: '/class',
    component: ()=>import('../pages/class/class.vue')
  },
  {
    path: '/buy',
    component: ()=>import('../pages/buy/buy.vue')
  },
  {
    path: '/shopping',
    component: ()=>import('../pages/shopping/shopping.vue')
  },
  {
    path: '/center',
    component: ()=>import('../pages/center/center.vue')
  },
  // 重定向
  {
    path: '/',
    redirect: '/'
  }
]