import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import ArticlesComponentVue from '../components/ArticlesComponent.vue';
import AdvocatesComponent from '../components/AdvocatesComponent.vue'
import BlogComponent from '../components/BlogsComponent.vue'
import StoryComponent from '../components/StoryComponent.vue'
import WomenComponent from '../components/WomenComponent.vue'
import AdminLogin from '../views/AdminLogin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/articles/:type/:id',
      name: 'Articles',
      component : ArticlesComponentVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path : '/advocates',
      name : 'Advocates',
      component : AdvocatesComponent
    },
    {
      path : '/blog',
      name : 'Blog',
      component : BlogComponent
    },
    {
      path : '/story',
      name : 'Story',
      component : StoryComponent
    },
    {
      path : '/login',
      component : AdminLogin
    },
    {
      path : '/women',
      component : WomenComponent
    }
  ]
})

export default router
