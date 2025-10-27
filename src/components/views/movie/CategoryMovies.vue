<template>
    <section class="py-5">
        <div class="container">
            <h2 class="mb-4 text-light">{{ genreName }}</h2>

            <div v-if="loading" class="text-center text-light py-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div v-else-if="movies.length === 0" class="text-center text-light py-5">
                <p>No movies found in this category.</p>
            </div>

            <div v-else class="row g-3">
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
                            <div class="overlay"></div>
                        </RouterLink>
                        <div class="mt-2 text-start">
                            <span class="btn p-0 border-0 fw-medium text-success">
                                ★ {{ movie.vote_average.toFixed(1) }}
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

            <!-- Load More Button -->
            <div v-if="hasMore && !loading" class="text-center mt-4">
                <button @click="loadMore" class="btn btn-success">
                    Load More
                </button>
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
const genreName = ref('Movies')
const loading = ref(true)
const currentPage = ref(1)
const hasMore = ref(true)

const genreId = route.params.id

// Fetch genre name
const fetchGenreName = async () => {
    try {
        const res = await tmdb.get('/genre/movie/list')
        const genres = res.data.genres || []
        const genre = genres.find(g => g.id === parseInt(genreId))
        if (genre) {
            genreName.value = genre.name
        }
    } catch (err) {
        console.error('Failed to fetch genre name:', err)
    }
}

// Fetch movies by genre
const fetchMoviesByGenre = async (page = 1) => {
    try {
        loading.value = true
        const res = await tmdb.get('/discover/movie', {
            params: {
                with_genres: genreId,
                sort_by: 'popularity.desc',
                page: page
            }
        })

        if (page === 1) {
            movies.value = res.data.results || []
        } else {
            movies.value = [...movies.value, ...(res.data.results || [])]
        }

        hasMore.value = res.data.page < res.data.total_pages
        currentPage.value = page
    } catch (err) {
        console.error('Failed to fetch movies:', err)
    } finally {
        loading.value = false
    }
}

// Load more movies
const loadMore = () => {
    fetchMoviesByGenre(currentPage.value + 1)
}

onMounted(async () => {
    await fetchGenreName()
    await fetchMoviesByGenre(1)
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

.spinner-border {
    width: 3rem;
    height: 3rem;
}
</style>