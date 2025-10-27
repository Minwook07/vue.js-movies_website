<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all d-flex justify-content-between align-items-center mb-3">
                <RouterLink :to="routeLink" class="card-type-catagories text-secondary-kam">
                    {{ title }}
                </RouterLink>

                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-outline-success btn-previous" :data-swiper-id="swiperId">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button type="button" class="btn btn-success btn-next" :data-swiper-id="swiperId">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>

            <div class="swiper" :class="`swiper-${type}`" :data-swiper-id="swiperId">
                <div class="swiper-wrapper">
                    <div v-for="item in items" :key="item.id || item.name" class="swiper-slide bg-transparent">
                        <!-- Movie Card -->
                        <template v-if="type !== 'category'">
                            <div class="card-content position-relative rounded-3">
                                <RouterLink :to="`/movie/${item.id}`">
                                    <div class="card-content-img">
                                        <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
                                            :alt="item.title || item.original_title" class="card-content-img" />
                                    </div>
                                    <div class="play-video"></div>
                                    <div class="card-languages bg-success">
                                        {{ item.original_language.toUpperCase() }}
                                    </div>
                                    <div class="card-trending-fire"></div>
                                    <div class="overlay"></div>
                                </RouterLink>
                            </div>
                            <div class="mt-2 text-start">
                                <span class="btn p-0 border-0 fw-medium text-success">★ {{ item.vote_average }}</span>
                                <br />
                                <RouterLink :to="`/movie/${item.id}`"
                                    class="text-start btn p-0 border-0 fw-medium text-secondary-kam">
                                    {{ item.title || item.original_title }}
                                </RouterLink>
                            </div>
                        </template>

                        <!-- Category Card -->
                        <template v-else>
                            <div class="card-content position-relative rounded-3">
                                <RouterLink :to="`/category/${item.id}`">
                                    <div class="card-content-img">
                                        <img v-if="item.posterPath"
                                            :src="'https://image.tmdb.org/t/p/w500' + item.posterPath" :alt="item.name"
                                            class="card-content-img" />
                                        <div v-else
                                            class="card-content-img bg-secondary d-flex align-items-center justify-content-center">
                                            <span class="text-white">{{ item.name }}</span>
                                        </div>
                                    </div>
                                    <div class="overlay"></div>
                                    <div
                                        class="category-label position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-2 text-center">
                                        {{ item.name }}
                                    </div>
                                </RouterLink>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useSwiperStore } from '@/stores/swiperStore'
import tmdb from '@/tmdb-api'

const props = defineProps({
    title: { type: String, required: true },
    apiUrl: { type: String, required: true },
    routeLink: { type: String, required: true },
    swiperId: { type: String, required: true },
    type: { type: String, default: 'drama' } // 'drama' or 'category'
})

const items = ref([])
const swiperStore = useSwiperStore()

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
        const response = await tmdb.get(props.apiUrl)

        // Handle different API response structures
        if (props.type === 'category') {
            // Categories API returns { genres: [...] }
            const genres = response.data.genres || []

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

            items.value = genresWithPosters
        } else {
            // Movies API returns { results: [...] }
            items.value = response.data.results || []
        }

        await nextTick()
        swiperStore.initAll(props.type)
    } catch (error) {
        console.error('Failed to fetch data:', error)
    }
})
</script>