import { createRouter, createWebHistory } from 'vue-router'
import Testing from '../views/Testing.vue'
import Names from '../views/Names.vue'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  },
  {
    path: '/names',
    name: 'Names',
    component: Names
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
