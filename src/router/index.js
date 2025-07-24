import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Auth/Login.vue'
import DramaDetail from '@/views/pages/DramaDetail.vue'
import OnGoingMovie from '@/components/home/OnGoingMovie.vue'
import AllOngoing from '@/components/allcategories/AllOngoing.vue'
import AllAnime from '@/components/allcategories/AllAnime.vue'
import AllKorean from '@/components/allcategories/AllKorean.vue'
import AllJapanese from '@/components/allcategories/AllJapanese.vue'
import AllChinese from '@/components/allcategories/AllChinese.vue'
import AllTrending from '@/components/allcategories/AllTrending.vue'
import FullCast from '@/views/pages/drama-detail/FullCast.vue'

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
      path: '/movie/:id',
      name: 'DramaDetail',
      component: DramaDetail,
      props: true,
    },
    {
      path: '/movie/:id/cast',
      name: 'FullCast',
      component: FullCast
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
    {
      path: '/all_korean',
      name: 'all_korean',
      component: AllKorean,
    },
    {
      path: '/all_chinese',
      name: 'all_chinese',
      component: AllChinese,
    },
    {
      path: '/all_japanese',
      name: 'all_japanese',
      component: AllJapanese,
    },
    {
      path: '/all_trending',
      name: 'all_trending',
      component: AllTrending,
    },
  ],
})

export default router
