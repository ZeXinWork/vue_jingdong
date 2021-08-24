import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
