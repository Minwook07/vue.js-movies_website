<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all">
                <RouterLink to="/all_anime" class="card-type-catagories text-secondary-kam">
                    Upcoming
                </RouterLink>
                <div class="d-flex gap-3">
                    <button type="button" data-swiper-id="8" class="btn btn-outline-success btn-previous">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button type="button" data-swiper-id="8" class="btn btn-success btn-next">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div class="swiper mySwiper" data-swiper-id="8">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-transparent" v-for="movie in movies" :key="movie.id">
                        <div class="card-content position-relative rounded-3">
                            <RouterLink :to="`/movie/${movie.id}`">
                                <div class="card-content-img">
                                    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                                        :alt="movie.title || movie.original_title" class="card-content-img" />
                                </div>
                                <div class="play-video"></div>
                                <div class="card-languages bg-success">
                                    {{ movie.original_language.toUpperCase() }}
                                </div>
                                <div class="card-trending-fire"></div>
                                <div class="overlay"></div>
                            </RouterLink>
                        </div>
                        <div class="mt-2 text-start">
                            <span class="btn p-0 border-0 fw-medium text-success">★ {{ movie.vote_average }}</span>
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
import { useDramaStore } from '@/stores/dramaStore';
import { onMounted, ref } from 'vue'
import tmdb from '@/tmdb-api'

const movies = ref([])

onMounted(async () => {
    try {
        const res = await tmdb.get('/movie/upcoming')
        movies.value = res.data.results
    } catch (error) {
        console.error('Failed to fetch movies:', error)
    }
})
const dramaStore = useDramaStore();
</script>
