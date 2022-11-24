import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '../components/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'sign-in',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
