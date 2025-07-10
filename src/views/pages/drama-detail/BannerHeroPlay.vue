<template>
    <!-- HeroPlay -->
    <section>
        <div class="container">
            <div class="row g-4">
                <!-- Video Player Section -->
                <div class="col-12 col-lg-8">
                    <div class="video-wrapper">
                        <div class="video-container">
                            <video ref="videoRef" class="video-js vjs-default-skin" controls preload="auto" width="640"
                                height="264" data-setup="{}">
                                <!-- <source src="/mp4/모모랜드(MOMOLAND)-BAAM(EDMRemix)[MusicVideo].mp4"
                                    type="video/mp4" /> -->
                                <track kind="subtitles" src="https://yourdomain.com/subtitles-en.vtt" srclang="en"
                                    label="English" default />
                                <track kind="subtitles" src="https://yourdomain.com/subtitles-ko.vtt" srclang="ko"
                                    label="Korean" />
                            </video>
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
                                <small class="text-light">Multi Sub</small>
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
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoRef = ref(null)
let player = null

const currentEpisode = ref(1)

const episodes = computed(() =>
    Array.from({ length: 16 }, (_, i) => ({
        number: i + 1,
        title: `Episode ${String(i + 1).padStart(2, '0')}`,
        src: `/mp4/episode-${String(i + 1).padStart(2, '0')}.mp4`,
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

onMounted(() => {
    if (videoRef.value) {
        player = videojs(videoRef.value)
        player.src({ type: 'video/mp4', src: episodes.value[currentEpisode.value - 1].src })
    }
})

watch(currentEpisode, (newVal) => {
  if (player && episodes.value[newVal - 1]) {
    player.src({ type: 'video/mp4', src: episodes.value[newVal - 1].src })
    player.load()
    player.play() // optional: auto play new episode
  }
})

onBeforeUnmount(() => {
    if (player) {
        player.dispose()
    }
})
</script>