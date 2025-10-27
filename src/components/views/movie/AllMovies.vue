<template>
	<section class="py-5">
		<div class="container">
			<h2 class="mb-4 text-light">{{ title }}</h2>

			<!-- Show categories grid if type is 'categories' -->
			<template v-if="type === 'categories'">
				<div class="row g-3">
					<div v-for="category in categories" :key="category.id" class="col-6 col-sm-4 col-md-3 col-lg-2">
						<RouterLink :to="`/category/${category.id}`" class="text-decoration-none">
							<div class="category-card position-relative rounded-3 overflow-hidden">
								<img v-if="category.posterPath"
									:src="'https://image.tmdb.org/t/p/w500' + category.posterPath" :alt="category.name"
									class="w-100 h-100 object-fit-cover" />
								<div v-else class="bg-secondary d-flex align-items-center justify-content-center"
									style="height: 300px;">
									<span class="text-white fs-5">{{ category.name }}</span>
								</div>
								<div class="overlay"></div>
								<div
									class="category-name position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 text-center fw-medium">
									{{ category.name }}
								</div>
							</div>
						</RouterLink>
					</div>
				</div>
			</template>

			<!-- Show movies grid for all other types -->
			<template v-else>
				<div class="row g-3">
					<div v-for="movie in movies" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2">
						<div class="card-content position-relative rounded-3">
							<RouterLink :to="`/movie/${movie.id}`">
								<div class="card-content-img">
									<img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
										:alt="movie.title || movie.original_title"
										class="card-content-img w-100 rounded" />
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
			</template>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import tmdb from '@/tmdb-api'

const route = useRoute()
const movies = ref([])
const categories = ref([])

// Map route param to API and title
const typeMap = {
	upcoming: { api: '/movie/upcoming', title: 'Upcoming Movies' },
	now_playing: { api: '/movie/now_playing', title: 'Now Playing' },
	popular: { api: '/movie/popular', title: 'Trending Movies' },
	top_rated: { api: '/movie/top_rated', title: 'Top Rated' },
	categories: { api: '/genre/movie/list', title: 'All Categories' }
}

const type = route.params.type
const { api, title } = typeMap[type] || { api: '/movie/popular', title: 'Trending Movies' }

// Fetch a movie poster for a specific genre
const fetchGenrePoster = async (genreId) => {
	try {
		const response = await tmdb.get('/discover/movie', {
			params: {
				with_genres: genreId,
				sort_by: 'popularity.desc',
				page: 1
			}
		})
		const movies = response.data.results || []
		return movies.length > 0 ? movies[0].poster_path : null
	} catch (error) {
		console.error(`Failed to fetch poster for genre ${genreId}:`, error)
		return null
	}
}

onMounted(async () => {
	try {
		if (type === 'categories') {
			// Fetch categories/genres
			const res = await tmdb.get(api)
			const genres = res.data.genres || []

			// Fetch poster for each genre
			const genresWithPosters = await Promise.all(
				genres.map(async (genre) => {
					const posterPath = await fetchGenrePoster(genre.id)
					return {
						...genre,
						posterPath
					}
				})
			)

			categories.value = genresWithPosters
		} else {
			// Fetch movies
			const res = await tmdb.get(api)
			movies.value = res.data.results
		}
	} catch (err) {
		console.error('Failed to fetch data:', err)
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

.category-card {
	height: 300px;
	cursor: pointer;
	transition: transform 0.2s;
	overflow: hidden;
}

.category-card:hover {
	transform: scale(1.03);
}

.play-video {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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