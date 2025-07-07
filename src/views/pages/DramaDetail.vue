<template>
    <BannerHeroPlay />

    <!-- Server -->
    <section class="my-4">
        <div class="container">
            <div class="container-server">
                <div class="row g-lg-0 g-4 align-items-center">
                    <div class="col-lg-3 d-flex align-items-center">
                        <p class="fs-paragrap-default m-0 text-light">You're watching <span
                                class="text-primary-kam">Episode
                                1</span>. <br><span class="opacity-75">If current servers doesn't work, please try other
                                servers.</span></p>
                    </div>
                    <div class="col-12 col-lg-6 d-flex align-items-center block-border-left">
                        <div class="gap-3 d-flex flex-column ms-3">
                            <div class="d-flex align-items-center">
                                <h5 class="text-primary-kam m-0 me-3">SUB</h5>
                                <div class="d-flex gap-3 justify-content-md-end">
                                    <button class="btn btn-success active" type="button">Server1</button>
                                    <button class="btn btn-info" type="button">Server 2</button>
                                    <button class="btn btn-info" type="button">Server 3</button>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <h5 class="active m-0 me-3 text-light">DUB</h5>
                                <div class="d-flex gap-3 justify-content-md-end">
                                    <button class="btn btn-success active" type="button">Server1</button>
                                    <button class="btn btn-info" type="button">Server 2</button>
                                    <button class="btn btn-info" type="button">Server 3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Detail Description -->
    <section class="my-4">
        <div class="container">
            <div class="card border-0" style="background: rgba(0, 0, 0, 0.3); border-radius: 20px;">
                <div class="card-body p-4 p-md-5">
                    <div class="row g-4">
                        <!-- Main Content -->
                        <div class="col-lg-7">
                            <div class="d-flex flex-column flex-md-row gap-4">
                                <!-- Poster Image -->
                                <div class="poster-container position-relative" style="min-width: 180px;">
                                    <img src="/public/img/Abyss.jpg" alt="Spy x Family Poster"
                                        class="img-fluid rounded-3"
                                        style="width: 180px; height: 240px; object-fit: cover;">
                                    <!-- Action Buttons -->
                                    <div class="row mt-4">
                                        <div class="col-12">
                                            <div class="d-flex flex-wrap gap-3 justify-content-md-start">
                                                <!-- Watch now Button -->
                                                <button type="button"
                                                    class="btn btn-primary btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    title="Add to List">
                                                    <Plus :size="18" />
                                                </button>

                                                <!-- Favorite Button -->
                                                <button type="button"
                                                    class="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill"
                                                    data-bs-toggle="tooltip" data-bs-placement="top" title="Favorite">
                                                    <Heart :size="18" />
                                                </button>

                                                <!-- Add to List Button -->
                                                <button type="button"
                                                    class="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center px-2 py-2 rounded-pill"
                                                    data-bs-toggle="tooltip" data-bs-placement="top" title="Share">
                                                    <Share2 :size="18" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Content -->
                                <div class="content-section flex-grow-1">
                                    <div class="mb-3">
                                        <h1 class="display-5 fw-bold text-white mb-3">Spy x Family</h1>
                                        <div class="d-flex flex-wrap align-items-center gap-3">
                                            <span
                                                class="badge bg-warning text-dark px-3 py-2 rounded-pill fs-6 fw-semibold">
                                                Drama
                                            </span>
                                            <h5 class="text-white-50 mb-0 fw-normal">Season 06</h5>
                                        </div>
                                    </div>

                                    <div class="plot-section mt-4">
                                        <h4 class="text-white fw-semibold mb-3 d-flex align-items-center">
                                            <i class="bi bi-book me-2"></i>
                                            Plot Summary
                                        </h4>
                                        <p class="text-white-50 lh-lg" style="font-size: 0.95rem;">
                                            Zen Luo, who is now a menial slave, used to be a young
                                            master of a big family.
                                            Owing to the decline of his family, his sister is imprisoned
                                            by a strong force,
                                            he has no choice but to be at others service. However, every
                                            cloud has a silver lining.
                                            The ancient book left by his father actually conceals the
                                            magical spell, which can change
                                            a human into an instrument! What is the mysterious power
                                            behind all these?
                                            This is a contest with fate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Details Section -->
                        <div class="col-lg-5">
                            <div class="row g-4">
                                <!-- Main Details -->
                                <div class="col-md-7 col-lg-12">
                                    <div class="details-card bg-dark bg-opacity-25 rounded-3 p-4 h-100">
                                        <h3 class="text-white fw-semibold mb-4 d-flex align-items-center">
                                            <i class="bi bi-info-circle me-2"></i>
                                            Details
                                        </h3>

                                        <div class="details-list">
                                            <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                                style="background: rgba(255,255,255,0.05);">
                                                <Globe class="me-3 text-info" :size="18" />
                                                <span class="text-white-50">
                                                    Type: <span class="text-warning fw-semibold">TV</span>
                                                </span>
                                            </div>

                                            <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                                style="background: rgba(255,255,255,0.05);">
                                                <User class="me-3 text-info" :size="18" />
                                                <span class="text-white-50">
                                                    Studio: <span class="text-warning fw-semibold">tvN</span>
                                                </span>
                                            </div>

                                            <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                                style="background: rgba(255,255,255,0.05);">
                                                <Calendar class="me-3 text-info" :size="18" />
                                                <span class="text-white-50">
                                                    Date aired: <span class="text-white fw-semibold">Jan
                                                        18, 2023</span>
                                                </span>
                                            </div>

                                            <div class="detail-item d-flex align-items-center mb-3 p-2 rounded-2"
                                                style="background: rgba(255,255,255,0.05);">
                                                <Clock class="me-3 text-info" :size="18" />
                                                <span class="text-white-50">
                                                    Status: <span class="text-success fw-semibold">Completed</span>
                                                </span>
                                            </div>
                                        </div>

                                        <h3 class="text-white fw-semibold mb-2 mt-4 d-flex align-items-center">
                                            <i class="bi bi-info-circle me-2"></i>
                                            Additional Info
                                        </h3>
                                        <div class="info-list">
                                            <div
                                                class="info-item mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                                                <small class="text-white-50 d-block">Genre</small>
                                                <span class="text-white fw-normal">Action, School,
                                                    Power</span>
                                            </div>

                                            <div
                                                class="d-flex justify-content-between info-item border-bottom border-secondary border-opacity-25 mb-3">
                                                <div class="pb-2">
                                                    <small class="text-white-50 d-block">Country</small>
                                                    <span class="text-white fw-normal">Japan</span>
                                                </div>

                                                <div class="pb-2">
                                                    <small class="text-white-50 d-block">Premiered</small>
                                                    <span class="text-white fw-normal">Winter 2024</span>
                                                </div>

                                                <div class="pb-2">
                                                    <small class="text-white-50 d-block">Duration</small>
                                                    <span class="text-white fw-normal">30 min</span>
                                                </div>
                                            </div>
                                            <div
                                                class="d-flex justify-content-between info-item border-bottom border-secondary border-opacity-25">
                                                <div>
                                                    <small class="text-white-50 d-block">Views</small>
                                                    <span class="text-white fw-normal">14,332</span>
                                                </div>
                                                <div class="pb-2">
                                                    <small class="text-white-50 d-block">Scores</small>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="text-warning fw-bold">2.64</span>
                                                        <small class="text-white-50">by 5,500
                                                            reviews</small>
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
            </div>
        </div>
    </section>

    <Casting />
    <SimilarVideo />
</template>

<script setup>
import BannerHeroPlay from './movie-detail/BannerHeroPlay.vue';
import Casting from './movie-detail/Casting.vue';
import SimilarVideo from './movie-detail/SimilarVideo.vue';
import { Calendar, Clock, Globe, Heart, Plus, Share2, User } from 'lucide-vue-next'
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