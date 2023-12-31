import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import BoxView from '@/views/management/BoxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      component: LoginView,
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/boxes',
      component: BoxView
    }
  ]
})

export default router
