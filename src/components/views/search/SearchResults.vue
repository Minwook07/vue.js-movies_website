<template>
    <section class="py-5">
        <div class="container">
            <h2 class="mb-4 text-light">
                Search Results for: <span class="text-success">"{{ searchQuery }}"</span>
            </h2>

            <div v-if="loading" class="text-center text-light py-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div v-else-if="movies.length === 0" class="text-center text-light py-5">
                <p class="fs-4">No movies found for "{{ searchQuery }}"</p>
                <p class="text-secondary">Try searching with different keywords</p>
            </div>

            <div v-else>
                <p class="text-light mb-4">Found {{ totalResults }} results</p>
                <div class="row g-3">
                    <div v-for="movie in movies" :key="movie.id" class="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div class="card-content position-relative rounded-3">
                            <RouterLink :to="`/movie/${movie.id}`">
                                <div class="card-content-img">
                                    <img v-if="movie.poster_path"
                                        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                                        :alt="movie.title || movie.original_title"
                                        class="card-content-img w-100 rounded" />
                                    <div v-else
                                        class="no-poster d-flex align-items-center justify-content-center bg-secondary text-white">
                                        {{ movie.title || movie.original_title }}
                                    </div>
                                </div>
                                <div class="play-video"></div>
                                <div v-if="movie.original_language" class="card-languages bg-success">
                                    {{ movie.original_language.toUpperCase() }}
                                </div>
                                <div class="overlay"></div>
                            </RouterLink>
                            <div class="mt-2 text-start">
                                <span class="btn p-0 border-0 fw-medium text-success">
                                    ★ {{ movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A' }}
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
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import tmdb from '@/tmdb-api'

const route = useRoute()
const movies = ref([])
const searchQuery = ref('')
const loading = ref(true)
const currentPage = ref(1)
const totalResults = ref(0)
const hasMore = ref(true)

// Search movies
const searchMovies = async (query, page = 1) => {
    try {
        loading.value = true
        const res = await tmdb.get('/search/movie', {
            params: {
                query: query,
                page: page
            }
        })

        if (page === 1) {
            movies.value = res.data.results || []
        } else {
            movies.value = [...movies.value, ...(res.data.results || [])]
        }

        totalResults.value = res.data.total_results
        hasMore.value = res.data.page < res.data.total_pages
        currentPage.value = page
    } catch (err) {
        console.error('Failed to search movies:', err)
    } finally {
        loading.value = false
    }
}

// Load more results
const loadMore = () => {
    if (searchQuery.value) {
        searchMovies(searchQuery.value, currentPage.value + 1)
    }
}

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
    if (newQuery) {
        searchQuery.value = newQuery
        currentPage.value = 1
        searchMovies(newQuery, 1)
    }
}, { immediate: true })

onMounted(() => {
    const query = route.query.q
    if (query) {
        searchQuery.value = query
        searchMovies(query, 1)
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

.no-poster {
    height: 300px;
    font-size: 14px;
    padding: 1rem;
    text-align: center;
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