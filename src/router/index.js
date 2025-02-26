import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Auth/Login.vue'
import DramaDetail from '@/views/pages/DramaDetail.vue'
import OnGoingMovie from '@/components/home/OnGoingMovie.vue'
import AllOngoing from '@/components/allgategories/AllOngoing.vue'
import AllAnime from '@/components/allgategories/AllAnime.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/drama_details',
      name: 'drama_details',
      component: DramaDetail,
    },
    {
      path: '/ongoing',
      name: 'ongoing',
      component: OnGoingMovie,
    },
    {
      path: '/all_ongoing',
      name: 'all_ongoing',
      component: AllOngoing,
    },
    {
      path: '/all_anime',
      name: 'all_anime',
      component: AllAnime,
    },
  ],
})

export default router
