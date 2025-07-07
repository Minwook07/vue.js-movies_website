<template>
    <!-- HeroPlay -->
    <section>
        <div class="container">
            <div class="row g-4">
                <!-- Video Player Section -->
                <div class="col-12 col-lg-8">
                    <div class="video-wrapper">
                        <div class="video-container" ref="videoContainerRef">
                            <VideoDBPlayer class="player"
                                streamUrl="https://stream.videodb.io/v3/published/manifests/12df6498-e955-4249-84b8-7568aaf72160.m3u8">
                            </VideoDBPlayer>
                        </div>

                        <!-- Navigation Controls -->
                        <div class="controls-section">
                            <div class="d-flex justify-content-between align-items-center">
                                <button @click="handlePrevious" :disabled="currentEpisode === 1"
                                    class="btn btn-outline-light btn-lg d-flex nav-btn">
                                    <svg class="me-2" width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Previous
                                </button>

                                <div class="text-center">
                                    <h2 class="episode-title">
                                        Episode {{ String(currentEpisode).padStart(2, '0') }}
                                    </h2>
                                    <p class="episode-counter">
                                        {{ currentEpisode }} of {{ episodes.length }}
                                    </p>
                                </div>

                                <button @click="handleNext" :disabled="currentEpisode === episodes.length"
                                    class="btn btn-outline-light btn-lg d-flex nav-btn">
                                    Next
                                    <svg class="ms-2" width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Playlist Section -->
                <div class="col-12 col-lg-4">
                    <div class="playlist-wrapper">
                        <div class="playlist-header d-flex justify-content-between align-items-center mb-4">
                            <h3 class="playlist-title">Playlist</h3>
                            <div class="d-flex align-items-center">
                                <span class="status-dot me-2"></span>
                                <small class="text-light">AI Multi Sub</small>
                            </div>
                        </div>

                        <!-- Episode Grid -->
                        <div class="episode-grid">
                            <button v-for="episode in episodes" :key="episode.number"
                                @click="handleEpisodeSelect(episode.number)" :class="[
                                    'episode-btn',
                                    currentEpisode === episode.number ? 'active' : ''
                                ]">
                                <div class="episode-number">EP{{ String(episode.number).padStart(2, '0') }}</div>
                            </button>
                        </div>

                        <!-- Episode Counter -->
                        <div class="episode-summary">
                            <div class="text-center">
                                <small class="text-light">Showing {{ episodes.length }} episodes</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { VideoDBPlayer } from '@videodb/player-vue'

const currentEpisode = ref(1)

const episodes = computed(() =>
    Array.from({ length: 16 }, (_, i) => ({
        number: i + 1,
        title: `Episode ${String(i + 1).padStart(2, '0')}`,
    }))
)

const handlePrevious = () => {
    if (currentEpisode.value > 1) {
        currentEpisode.value--
    }
}

const handleNext = () => {
    if (currentEpisode.value < episodes.value.length) {
        currentEpisode.value++
    }
}

const handleEpisodeSelect = (episodeNumber) => {
    currentEpisode.value = episodeNumber
}
</script>