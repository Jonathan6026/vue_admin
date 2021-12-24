import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('../views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  publicRoutes
})

export default router
