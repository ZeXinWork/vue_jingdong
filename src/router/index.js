import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/register'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = window.localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = window.localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫，没有登陆，先去登录
router.beforeEach((to, form, next) => {
  const { isLogin } = window.localStorage
  const { name } = to
  const isLoginOrRegister = name === 'Login' || name === 'Register'
  isLogin || isLoginOrRegister ? next() : next({ name: 'Login' })
})
export default router
