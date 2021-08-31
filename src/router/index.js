import { createRouter, createWebHashHistory } from 'vue-router'

// 定义当前项目路由
const routes = [
  {
    path: '/',
    name: 'Home',
    // 异步加载路由器
    component: () => import(/* webpackChunkName: "home" */ '../views/home')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/register'),
    beforeEnter: (to, from, next) => {
      // 在进入register这个路由前，先进入这个回调函数，根据函数执行结果跳转路由
      const { isLogin } = window.localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login'),
    beforeEnter: (to, from, next) => {
      // 在进入login这个路由前，先进入这个回调函数，根据函数执行结果跳转路由
      const { isLogin } = window.localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫，没有登陆，先去登录
/**
 * to: 去哪个路由
 * form: 从哪个路由来
 * next: 允许路由跳转
 */

router.beforeEach((to, form, next) => {
  const { isLogin } = window.localStorage
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register'
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })
})
export default router
