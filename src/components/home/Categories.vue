<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all">
                <a href="#" class="card-type-catagories text-secondary-kam">Categories</a>
                <div class="d-flex gap-3">
                    <button type="button" data-swiper-id="3" class="btn btn-outline-success btn-previous"><i
                            class="fa-solid fa-angle-left"></i></button>
                    <button type="button" data-swiper-id="3" class="btn btn-success btn-next"><i
                            class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            <div class="swiper swiper1 mySwiper" data-swiper-id="3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-transparent" v-for="movie in movies" :key="movie.id">
                        <RouterLink :to="`/genre/movie/list`">
                            <div class="card-content position-relative rounded-3">
                                <div class="card-content-img">
                                    <img class="card-content-img"
                                        :src="movie.poster_url || require('@/assets/img/Mouse.jpg')"
                                        :alt="movie.name" />
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <button class="text-start btn p-0 border-0 fw-medium text-secondary-kam fs-5 mt-2">{{
                                movie.name }}</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import tmdb from '@/tmdb-api'
import { RouterLink } from 'vue-router'

const movies = ref([])

onMounted(async () => {
    try {
        const res = await tmdb.get('/genre/movie/list')
        const genres = res.data.genres

        // Fetch poster for each genre
        const genresWithImages = await Promise.all(genres.map(async (genre) => {
            try {
                const discoverRes = await tmdb.get('/discover/movie', {
                    params: {
                        with_genres: genre.id,
                        sort_by: 'popularity.desc',
                        page: 1
                    }
                })

                const firstMovie = discoverRes.data.results[0]
                const posterUrl = firstMovie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`
                    : null

                return {
                    ...genre,
                    poster_url: posterUrl
                }
            } catch (e) {
                console.error(`Error fetching movie for genre ${genre.name}`, e)
                return {
                    ...genre,
                    poster_url: null
                }
            }
        }))

        movies.value = genresWithImages
    } catch (error) {
        console.error('Failed to fetch genres:', error)
    }
})

</script>