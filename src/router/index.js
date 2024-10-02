import { createRouter, createWebHistory } from 'vue-router'
import Home from '../assets/pages/Home.vue'
import About from '../assets/pages/About.vue'
import Blog from '../assets/pages/Blog.vue'
import Contacts from '../assets/pages/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
  ]
})

export default router
