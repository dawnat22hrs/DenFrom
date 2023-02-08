import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCourse from '../views/AddCourse.vue'
import AddParse from '../views/AddParse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AddCourse',
      name: 'Course',
      component: AddCourse,
    },
    {
      path: '/AddParse',
      name: 'Parse',
      component: AddParse,
    }
  ]
})

export default router
