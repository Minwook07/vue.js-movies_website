<template>
	<main>
		<HomeToView />
		<ContinueWatch />
		<MovieSwipper title="Upcoming Movies" apiUrl="/movie/upcoming" swiperId="8" routeLink="/all/upcoming" />
		<MovieSwipper title="Trending Movies" apiUrl="/movie/popular" swiperId="1" routeLink="/all/trending" />
		<MovieSwipper title="Now Playing" apiUrl="/movie/now_playing" swiperId="9" routeLink="/all/nowplaying" />
		<MovieSwipper title="Categories" apiUrl="/genre/movie/list" swiperId="20" routeLink="/all/categories"
			type="category" />
		<MovieSwipper title="Top Rated" apiUrl="/movie/top_rated" swiperId="10" routeLink="/all/top_rated" />
	</main>
</template>

<script setup>
import HomeToView from '@/components/views/home/HomeToView.vue'
import ContinueWatch from '@/components/views/home/ContinueWatch.vue'
import MovieSwipper from '@/components/views/swipper/MovieSwipper.vue';
</script>
