import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/pages/Home.vue'
import About from '../assets/pages/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'About',
      component: About
    },
  ]
})

export default router
