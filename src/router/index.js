import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Video from '../pages/video.vue'
import Contact from '../pages/contact.vue'

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