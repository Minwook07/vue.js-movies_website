<template>
    <section>
        <div class="container">
            <div class="row">
                <CommentVideo />
                <div class="col-12 col-lg-4 order-1 order-lg-2">
                    <div class="p-4" style="background: rgba(0, 0, 0, 0.3); border-radius: 20px;">
                        <!-- Header -->
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h5 class="text-light mb-0 fw-bold">
                                <i class="fas fa-fire text-danger me-2"></i>Popular Series
                            </h5>
                            <span class="badge bg-danger">Trending</span>
                        </div>

                        <!-- Tab Navigation -->
                        <ul class="nav nav-pills mb-4 bg-secondary rounded-3" style="padding: 4px;">
                            <li class="nav-item flex-fill">
                                <button
                                    :class="['nav-link', 'text-center', 'fw-semibold', 'custom-tab', { 'active-tab': activeTab === 'weekly' }]"
                                    @click="setActiveTab('weekly')">Weekly</button>
                            </li>
                            <li class="nav-item flex-fill">
                                <button
                                    :class="['nav-link', 'text-center', 'fw-semibold', 'custom-tab', { 'active-tab': activeTab === 'monthly' }]"
                                    @click="setActiveTab('monthly')">Monthly</button>
                            </li>
                            <li class="nav-item flex-fill">
                                <button
                                    :class="['nav-link', 'text-center', 'fw-semibold', 'custom-tab', { 'active-tab': activeTab === 'all' }]"
                                    @click="setActiveTab('all')">All Time</button>
                            </li>
                        </ul>

                        <!-- Tab Content -->
                        <div class="tab-content">
                            <div class="series-list" style="max-height: 600px; overflow-y: auto;">
                                <div v-for="(series, index) in seriesData[activeTab]" :key="series.id"
                                    class="series-item d-flex align-items-start p-3 rounded-3 mb-3 bg-secondary bg-opacity-25 border border-secondary border-opacity-25 hover-effect">

                                    <!-- Ranking Number -->
                                    <div class="ranking-number me-3 d-flex align-items-center justify-content-center bg-warning text-white rounded-circle fw-bold flex-shrink-0"
                                        style="width: 30px; height: 30px;">{{ index + 1 }}</div>

                                    <!-- Series Image -->
                                    <div class="series-image me-3 flex-shrink-0" style="width: 80px;">
                                        <a href="#" class="d-block position-relative overflow-hidden rounded-2">
                                            <img :src="series.image" :alt="series.title" class="img-fluid w-100"
                                                style="height: 110px; object-fit: cover;">
                                        </a>
                                    </div>

                                    <!-- Series Info -->
                                    <div class="series-info flex-grow-1">
                                        <h6 class="series-title mb-2 fw-bold">
                                            <a href="#" class="text-light text-decoration-none">{{ series.title }}</a>
                                        </h6>
                                        <div class="series-meta mb-2">
                                            <small class="text-light">
                                                <i class="fas fa-calendar-alt me-1"></i>{{ series.year }}
                                                <span class="mx-2">•</span>
                                                <i class="fas fa-film me-1"></i>N/A
                                            </small>
                                        </div>
                                        <div class="series-genres mb-2">
                                            <small class="text-light">
                                                <strong>Genre:</strong>
                                                <template v-for="(genre, genreIndex) in series.genres" :key="genre">
                                                    <a href="#" class="text-info text-decoration-none">{{ genre }}</a>
                                                    <span v-if="genreIndex < series.genres.length - 1">, </span>
                                                </template>
                                            </small>
                                        </div>
                                        <div class="series-rating d-flex align-items-center">
                                            <div class="stars me-2">
                                                <template v-for="n in renderStars(series.rating).fullStars"
                                                    :key="`full-${n}`">
                                                    <i class="fas fa-star text-warning"></i>
                                                </template>
                                                <template v-if="renderStars(series.rating).hasHalfStar">
                                                    <i class="fas fa-star-half-alt text-warning"></i>
                                                </template>
                                                <template v-for="n in renderStars(series.rating).emptyStars"
                                                    :key="`empty-${n}`">
                                                    <i class="far fa-star text-warning"></i>
                                                </template>
                                            </div>
                                            <small class="text-warning fw-semibold">{{ series.rating }}/5</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- View All Button -->
                        <div class="text-center mt-4">
                            <button class="btn btn-outline-warning btn-sm px-4">
                                <i class="fas fa-plus me-2"></i>View All Series
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import tmdb from '@/tmdb-api'
import CommentVideo from './CommentVideo.vue'

const activeTab = ref('weekly')
const seriesData = ref({ weekly: [], monthly: [], all: [] })
const genreMap = ref({})

const fetchGenres = async () => {
    try {
        const res = await tmdb.get('/genre/movie/list')
        res.data.genres.forEach(g => {
            genreMap.value[g.id] = g.name
        })
    } catch (err) {
        console.error('Failed to fetch genres:', err)
    }
}

const fetchPopularSeries = async () => {
    try {
        const { data } = await tmdb.get('/movie/popular')
        const movies = data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/300x450?text=No+Image',
            genres: movie.genre_ids.map(id => genreMap.value[id] || 'Unknown'),
            rating: (movie.vote_average / 2).toFixed(1), // convert to 5 stars
            year: movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'
        }))

        seriesData.value.weekly = movies.slice(0, 5)
        seriesData.value.monthly = movies.slice(5, 10)
        seriesData.value.all = movies
    } catch (err) {
        console.error('Failed to fetch popular movies:', err)
    }
}

const setActiveTab = (tab) => {
    activeTab.value = tab
}

const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    return { fullStars, hasHalfStar, emptyStars }
}

onMounted(async () => {
    await fetchGenres()
    await fetchPopularSeries()
})
</script>


<style scoped>
/* Custom Tab Styles - Fixed Active State */
.custom-tab {
    border: none !important;
    background: transparent !important;
    color: #adb5bd !important;
    border-radius: 0.375rem !important;
    margin: 0 2px !important;
    padding: 8px 12px !important;
    transition: all 0.3s ease !important;
    font-size: 0.875rem !important;
}

.custom-tab:hover {
    background-color: rgba(255, 193, 7, 0.094) !important;
    color: #ffc107 !important;
}

.active-tab {
    background-color: #ffc107 !important;
    color: #ffffff !important;
    box-shadow: 0 2px 4px rgba(255, 193, 7, 0.246) !important;
}

.active-tab:hover {
    background-color: #d6a103 !important;
    color: #ffffff !important;
}

/* Series Item Hover Effects */
.hover-effect:hover {
    background-color: rgba(108, 117, 125, 0.3) !important;
    border-color: rgba(255, 193, 7, 0.442) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hover-zoom:hover {
    transform: scale(1.05);
}

.hover-effect:hover .overlay {
    opacity: 1 !important;
}

.hover-text-danger:hover {
    color: #ffc107 !important;
}

.hover-text-light:hover {
    color: #f8f9fa !important;
}

.transition-opacity {
    transition: opacity 0.3s ease;
}

/* Scrollbar Styles */
.series-list::-webkit-scrollbar {
    width: 0px;
}

@media (min-width: 821px) and (max-width: 1199px) {
    .series-item {
        flex-direction: column !important;
        align-items: flex-start !important;
        text-align: left !important;
    }

    .series-image {
        width: 100% !important;
        min-width: 0 !important;
        margin-bottom: 0.75rem !important;
    }

    .series-image img {
        width: 100% !important;
        height: 200px !important;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    .ranking-number {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 2;
    }

    .series-info {
        width: 100% !important;
    }

    .series-title {
        font-size: 1rem !important;
        margin-bottom: 0.5rem !important;
    }

    .series-meta small,
    .series-genres small {
        font-size: 0.85rem !important;
    }

    .series-rating {
        margin-top: 0.5rem !important;
    }
}


/* Responsive Design - Maintain Card Layout */
@media (max-width: 991.98px) {

    /* Large tablets and small desktops */
    .series-item {
        padding: 2.5rem 1rem !important;
    }

    .series-image {
        width: 70px !important;
        min-width: 70px !important;
    }

    .series-image img {
        height: 95px !important;
    }
}

@media (max-width: 767.98px) {

    /* Mobile devices - Keep horizontal layout */
    .series-item {
        padding: 1rem !important;
        flex-direction: row !important;
        /* Force horizontal layout */
        text-align: left !important;
        /* Keep text aligned left */
    }

    .ranking-number {
        width: 25px !important;
        height: 25px !important;
        min-width: 25px !important;
        font-size: 0.7rem !important;
        margin-bottom: 0 !important;
        /* Remove bottom margin */
        margin-right: 0.75rem !important;
    }

    .series-image {
        width: 60px !important;
        min-width: 60px !important;
        margin-bottom: 0 !important;
        /* Remove bottom margin */
        margin-right: 0.75rem !important;
    }

    .series-image img {
        height: 80px !important;
    }

    .series-info {
        flex: 1 !important;
        min-width: 0 !important;
        /* Allow text to wrap properly */
    }

    .series-title {
        font-size: 0.9rem !important;
        line-height: 1.3 !important;
        margin-bottom: 0.5rem !important;
    }

    .series-meta,
    .series-genres {
        margin-bottom: 0.4rem !important;
    }

    .series-meta small,
    .series-genres small {
        font-size: 0.75rem !important;
    }

    .series-rating {
        margin-top: 0.3rem !important;
    }

    .stars i {
        font-size: 0.8rem !important;
    }

    /* Tab adjustments for mobile */
    .custom-tab {
        padding: 6px 8px !important;
        font-size: 0.8rem !important;
    }
}

@media (max-width: 575.98px) {

    /* Extra small devices */
    .series-item {
        padding: 0.75rem !important;
    }

    .ranking-number {
        width: 22px !important;
        height: 22px !important;
        min-width: 22px !important;
        font-size: 0.65rem !important;
    }

    .series-image {
        width: 50px !important;
        min-width: 50px !important;
    }

    .series-image img {
        height: 70px !important;
    }

    .series-title {
        font-size: 0.85rem !important;
    }

    .custom-tab {
        padding: 5px 6px !important;
        font-size: 0.75rem !important;
    }
}

/* Utility class for text overflow */
.min-width-0 {
    min-width: 0;
}

/* Flex utilities */
.flex-shrink-0 {
    flex-shrink: 0;
}
</style>