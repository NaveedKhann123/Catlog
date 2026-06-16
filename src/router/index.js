import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Video from '../pages/Video.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router