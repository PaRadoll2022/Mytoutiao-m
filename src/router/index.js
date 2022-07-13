import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'

Vue.use(VueRouter)
// 路由页面的懒加载
// 需要哪个页面 就去请求那个页面
const routes = [
  {
    path: '/login',
    // component:Login
    component: () => {
      return import('@/views/Login')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
