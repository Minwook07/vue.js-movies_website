<template>
	<section class="py-5">
		<div class="container">
			<h2 class="mb-4">{{ title }}</h2>

			<div class="row g-3">
				<div v-for="movie in movies" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2">
					<div class="card-content position-relative rounded-3">
						<RouterLink :to="`/movie/${movie.id}`">
							<div class="card-content-img">
								<img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
									:alt="movie.title || movie.original_title" class="card-content-img w-100 rounded" />
							</div>
							<div class="play-video"></div>
							<div class="card-languages bg-success">
								{{ movie.original_language.toUpperCase() }}
							</div>
							<div class="card-trending-fire"></div>
							<div class="overlay"></div>
						</RouterLink>

						<div class="mt-2 text-start">
							<span class="btn p-0 border-0 fw-medium"
								:class="movie.release_date && new Date(movie.release_date) > new Date() ? 'text-danger' : 'text-success'">
								{{ movie.release_date && new Date(movie.release_date) > new Date() ? 'Upcoming' :
								'Released' }}
							</span>
							<br />
							<RouterLink :to="`/movie/${movie.id}`"
								class="text-start btn p-0 border-0 fw-medium text-secondary-kam">
								{{ movie.title || movie.original_title }}
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import tmdb from '@/tmdb-api'

const route = useRoute()
const movies = ref([])

// Map route param to API and title
const typeMap = {
	upcoming: { api: '/movie/upcoming', title: 'Upcoming Movies' },
	now_playing: { api: '/movie/now_playing', title: 'Now Playing' },
	popular: { api: '/movie/popular', title: 'Trending Movies' },
	top_rated: { api: '/movie/top_rated', title: 'Top Rated' }
}

const type = route.params.type
const { api, title } = typeMap[type] || { api: '/movie/popular', title: 'Trending Movies' }

onMounted(async () => {
	try {
		const res = await tmdb.get(api)
		movies.value = res.data.results
	} catch (err) {
		console.error('Failed to fetch movies:', err)
	}
})
</script>

<style scoped>
.card-content {
	cursor: pointer;
	transition: transform 0.2s;
}

.card-content:hover {
	transform: scale(1.03);
}

.card-content-img {
	position: relative;
	overflow: hidden;
	height: 300px;
}

.card-content-img img {
	object-fit: cover;
	height: 100%;
	width: 100%;
}

.play-video {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* placeholder for play button */
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.7);
}

.card-languages {
	position: absolute;
	top: 10px;
	left: 10px;
	padding: 2px 6px;
	font-size: 12px;
	color: #fff;
}

.overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}
</style>
