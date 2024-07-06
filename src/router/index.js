import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles'
    },
    {
      path: '/news',
      name: 'news',
      component: HomeView
    },
    {
      path: '/stats',
      name: 'stats'
    },
    {
      path: '/events',
      name: 'events'
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
