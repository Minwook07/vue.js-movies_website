import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/views/auth/Login.vue'
import AllMovies from '@/components/views/movie/AllMovies.vue'
import DramaDetail from '@/views/pages/DramaDetail.vue'
import FullCast from '@/components/views/dramadetail/FullCast.vue'

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
			path: '/all/:type',
			name: 'allmovies',
			component: AllMovies
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
	],
})

export default router
