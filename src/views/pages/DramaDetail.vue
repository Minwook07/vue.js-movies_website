<template>
    <BannerHeroPlay />

    <!-- Only show if data is ready -->
    <section class="my-4" v-if="movie">
        <div class="container">
            <div class="card border-0" style="background: rgba(0, 0, 0, 0.3); border-radius: 20px;">
                <div class="card-body p-4 p-md-5">
                    <div class="row g-4">
                        <div class="col-lg-7">
                            <div class="d-flex flex-column flex-md-row gap-4">
                                <!-- Poster Image -->
                                <div class="poster-container position-relative" style="min-width: 180px;">
                                    <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : '/img/fallback.jpg'"
                                        :alt="movie.title" class="img-fluid rounded-3"
                                        style="width: 180px; height: 240px; object-fit: cover;" />

                                    <!-- Action Buttons -->
                                    <div class="row mt-4">
                                        <div class="col-12">
                                            <div class="d-flex flex-wrap gap-3 justify-content-md-start">
                                                <button
                                                    class="btn btn-info btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill">
                                                    <Plus :size="18" />
                                                </button>
                                                <button
                                                    class="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill">
                                                    <Heart :size="18" />
                                                </button>
                                                <button
                                                    class="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill">
                                                    <Share2 :size="18" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Main Info -->
                                <div class="content-section flex-grow-1">
                                    <div class="mb-3">
                                        <h1 class="display-5 fw-bold text-white mb-3">{{ movie.title }}</h1>
                                        <div class="d-flex flex-wrap align-items-center gap-3">
                                            <span
                                                class="badge bg-warning text-dark px-3 py-2 rounded-pill fs-6 fw-semibold">
                                                {{ movie.genres?.[0]?.name || 'Unknown' }}
                                            </span>
                                            <h5 class="text-white-50 mb-0 fw-normal">Season: 1</h5>
                                        </div>
                                    </div>

                                    <div class="plot-section mt-4">
                                        <h4 class="text-white fw-semibold mb-3 d-flex align-items-center">
                                            <i class="bi bi-book me-2"></i>
                                            Plot Summary
                                        </h4>
                                        <p class="text-white-50 lh-lg" style="font-size: 0.95rem;">
                                            {{ movie.overview || 'No description available.' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Detail Section -->
                        <div class="col-lg-5">
                            <div class="details-card bg-dark bg-opacity-25 rounded-3 p-4 h-100">
                                <h3 class="text-white fw-semibold mb-4 d-flex align-items-center">
                                    <i class="bi bi-info-circle me-2"></i>
                                    Details
                                </h3>

                                <div class="details-list">
                                    <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                        style="background: rgba(255,255,255,0.05);">
                                        <Globe class="me-3 text-info" :size="18" />
                                        <span class="text-white-50">Type: <span
                                                class="text-warning fw-semibold">Movie</span></span>
                                    </div>

                                    <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                        style="background: rgba(255,255,255,0.05);">
                                        <User class="me-3 text-info" :size="18" />
                                        <span class="text-white-50">Studio: <span class="text-warning fw-semibold">{{
                                            movie.production_companies?.[0]?.name || 'Unknown' }}</span></span>
                                    </div>

                                    <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                        style="background: rgba(255,255,255,0.05);">
                                        <Calendar class="me-3 text-info" :size="18" />
                                        <span class="text-white-50">Date aired: <span class="text-white fw-semibold">{{
                                            movie.release_date }}</span></span>
                                    </div>

                                    <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                        style="background: rgba(255,255,255,0.05);">
                                        <Clock class="me-3 text-info" :size="18" />
                                        <span class="text-white-50">Status: <span class="text-success fw-semibold">{{
                                            movie.status }}</span></span>
                                    </div>
                                </div>

                                <h3 class="text-white fw-semibold mb-2 mt-4 d-flex align-items-center">
                                    <i class="bi bi-info-circle me-2"></i>
                                    Additional Info
                                </h3>

                                <div class="info-list">
                                    <div class="info-item mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                                        <small class="text-white-50 d-block">Genre</small>
                                        <span class="text-white fw-normal">
                                            {{movie.genres?.map(g => g.name).join(', ') || 'Unknown'}}
                                        </span>
                                    </div>

                                    <div
                                        class="d-flex justify-content-between info-item border-bottom border-secondary border-opacity-25 mb-3">
                                        <div class="pb-2">
                                            <small class="text-white-50 d-block">Country</small>
                                            <span class="text-white fw-normal">{{ movie.production_countries?.[0]?.name
                                                || 'N/A' }}</span>
                                        </div>
                                        <div class="pb-2">
                                            <small class="text-white-50 d-block">Premiered</small>
                                            <span class="text-white fw-normal">{{ movie.release_date }}</span>
                                        </div>
                                        <div class="pb-2">
                                            <small class="text-white-50 d-block">Duration</small>
                                            <span class="text-white fw-normal">{{ movie.runtime }} min</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between info-item border-bottom border-secondary border-opacity-25">
                                        <div>
                                            <small class="text-white-50 d-block">Views</small>
                                            <span class="text-white fw-normal">{{ movie.popularity }}</span>
                                        </div>
                                        <div class="pb-2">
                                            <small class="text-white-50 d-block">Scores</small>
                                            <div class="d-flex align-items-center gap-2">
                                                <span class="text-warning fw-bold">{{ movie.vote_average }}</span>
                                                <small class="text-white-50">by {{ movie.vote_count }} reviews</small>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Casting />
    <SimilarVideo />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import tmdb from '@/tmdb-api'

import BannerHeroPlay from '@/components/views/dramadetail/BannerHeroPlay.vue'
import Casting from '@/components/views/dramadetail/Casting.vue'
import SimilarVideo from '@/components/views/dramadetail/SimilarVideo.vue'
import { Calendar, Clock, Globe, Heart, Plus, Share2, User } from 'lucide-vue-next'

const route = useRoute()
const movie = ref(null)

onMounted(async () => {
    try {
        const { data } = await tmdb.get(`/movie/${route.params.id}`)
        movie.value = data
    } catch (err) {
        console.error('Failed to load movie details:', err)
    }
})
</script>

<style scoped>
.poster-container {
    transition: transform 0.3s ease;
}

.poster-container:hover {
    transform: translateY(-5px);
}

.detail-item,
.info-item {
    transition: all 0.2s ease;
}

.detail-item:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    transform: translateX(5px);
}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>