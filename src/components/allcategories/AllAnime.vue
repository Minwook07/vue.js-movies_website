<template>
    <section>
        <div class="container">
            <!-- Use the reusable filter component -->
            <SearchFilter v-model="filters" v-model:per-page="perPage" content-type="anime"
                :available-categories="availableCategories" :available-years="availableYears"
                :available-languages="availableLanguages" :current-results="paginatedDramas.length"
                :total-results="filteredDramas.length" @clear-filters="onClearFilters" />

            <!-- Anime Grid -->
            <div class="row">
                <div v-for="drama in paginatedDramas" :key="drama.id" class="col-6 col-md-2 mb-4">
                    <div class="card-content position-relative rounded-3">
                        <RouterLink :to="{ name: 'drama_details', params: { id: drama.id } }">
                            <div class="card-content-img">
                                <img :src="drama.image" :alt="drama.title" class="card-content-img">
                            </div>
                            <div class="play-video"></div>
                            <div class="card-languages"
                                :class="drama.language == 'Eng Sub' ? 'bg-warning' : 'bg-success'">
                                {{ drama.language }}
                            </div>
                            <div class="card-trending-fire"></div>
                            <div class="overlay"></div>
                        </RouterLink>
                    </div>
                    <div class="mt-2 text-start">
                        <RouterLink :to="{ name: 'ongoing', params: { status: drama.status } }"
                            class="btn p-0 border-0 fw-medium"
                            :class="drama.status == 'Ongoing' ? 'text-success' : 'text-danger'">
                            {{ drama.status }}
                        </RouterLink>
                        <br>
                        <RouterLink :to="{ name: 'drama_details', params: { id: drama.id } }"
                            class="text-start btn p-0 border-0 fw-medium text-secondary-kam">
                            {{ drama.title }}
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- No Results Message -->
            <div v-if="filteredDramas.length === 0" class="text-center py-5">
                <div class="mb-3">
                    <i class="bi bi-search display-1 text-light"></i>
                </div>
                <h5 class="text-light">No anime found</h5>
                <p class="text-light">Try adjusting your filters or search terms</p>
                <button class="btn btn-success" @click="onClearFilters">Clear All Filters</button>
            </div>

            <!-- Pagination Controls -->
            <div v-if="totalPages > 1" class="text-center mt-4">
                <nav aria-label="Anime pagination">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <button class="page-link" @click="goToFirstPage" :disabled="currentPage === 1">
                                <i class="bi bi-chevron-double-left"></i>
                            </button>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <button class="page-link" @click="currentPage--" :disabled="currentPage === 1">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                        </li>
                        <li v-for="page in visiblePages" :key="page" class="page-item"
                            :class="{ active: page === currentPage }">
                            <button class="page-link" @click="currentPage = page">
                                {{ page }}
                            </button>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                            <button class="page-link" @click="currentPage++" :disabled="currentPage === totalPages">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                            <button class="page-link" @click="goToLastPage" :disabled="currentPage === totalPages">
                                <i class="bi bi-chevron-double-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDramaStore } from '@/stores/dramaStore'
import SearchFilter from '../search/SearchFilter.vue'

const dramaStore = useDramaStore()
const perPage = ref(12)
const currentPage = ref(1)

// Filter state
const filters = ref({
    search: '',
    category: '',
    year: '',
    status: '',
    language: '',
    rating: '',
    sortBy: 'title',
    episodes: '',
    country: ''
})

// Get anime dramas
const animeDramas = computed(() =>
    dramaStore.drama_lists.filter(drama => drama.genre === 'Anime')
)

// Available filter options
const availableCategories = computed(() => {
    const categories = [...new Set(animeDramas.value.map(drama => drama.category).filter(Boolean))]
    return categories.sort()
})

const availableYears = computed(() => {
    const years = [...new Set(animeDramas.value.map(drama => drama.year).filter(Boolean))]
    return years.sort((a, b) => b - a)
})

const availableLanguages = computed(() => {
    const languages = [...new Set(animeDramas.value.map(drama => drama.language).filter(Boolean))]
    return languages.sort()
})

// Filtered dramas (same logic as before)
const filteredDramas = computed(() => {
    let result = [...animeDramas.value]

    // Apply search filter
    if (filters.value.search) {
        const searchTerm = filters.value.search.toLowerCase()
        result = result.filter(drama =>
            drama.title.toLowerCase().includes(searchTerm) ||
            (drama.description && drama.description.toLowerCase().includes(searchTerm))
        )
    }

    // Apply category filter
    if (filters.value.category) {
        result = result.filter(drama => drama.category === filters.value.category)
    }

    // Apply year filter
    if (filters.value.year) {
        result = result.filter(drama => drama.year == filters.value.year)
    }

    // Apply status filter
    if (filters.value.status) {
        result = result.filter(drama => drama.status === filters.value.status)
    }

    // Apply language filter
    if (filters.value.language) {
        result = result.filter(drama => drama.language === filters.value.language)
    }

    // Apply rating filter
    if (filters.value.rating) {
        result = result.filter(drama => drama.rating >= parseFloat(filters.value.rating))
    }

    // Apply episodes filter
    if (filters.value.episodes) {
        result = result.filter(drama => {
            const episodeCount = drama.episodes || 0
            switch (filters.value.episodes) {
                case 'short': return episodeCount <= 12
                case 'medium': return episodeCount >= 13 && episodeCount <= 26
                case 'long': return episodeCount >= 27
                default: return true
            }
        })
    }

    // Apply sorting
    switch (filters.value.sortBy) {
        case 'title':
            result.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'year':
            result.sort((a, b) => (b.year || 0) - (a.year || 0))
            break
        case 'rating':
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
            break
        case 'popularity':
            result.sort((a, b) => (b.views || 0) - (a.views || 0))
            break
    }

    return result
})

// Calculate total pages
const totalPages = computed(() =>
    Math.ceil(filteredDramas.value.length / perPage.value)
)

// Get paginated dramas for the current page
const paginatedDramas = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    return filteredDramas.value.slice(start, start + perPage.value)
})

// Visible pagination pages
const visiblePages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const delta = 2
    let start = Math.max(1, current - delta)
    let end = Math.min(total, current + delta)

    if (end - start < 4) {
        if (start === 1) {
            end = Math.min(total, start + 4)
        } else {
            start = Math.max(1, end - 4)
        }
    }

    const pages = []
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    return pages
})

// Reset to first page when filters change
watch(filters, () => {
    currentPage.value = 1
}, { deep: true })

// Reset to first page when perPage changes
watch(perPage, () => {
    currentPage.value = 1
})

// Navigation functions
const goToFirstPage = () => {
    currentPage.value = 1
}

const goToLastPage = () => {
    currentPage.value = totalPages.value
}

const onClearFilters = () => {
    currentPage.value = 1
}
</script>

<style scoped>
.page-link {
    color: #198754;
    border-color: #198754;
}

.page-link:hover {
    color: #fff;
    background-color: #198754;
    border-color: #198754;
}

.page-item.active .page-link {
    background-color: #198754;
    border-color: #198754;
}

@media (max-width: 768px) {
    .pagination {
        flex-wrap: wrap;
        gap: 0.25rem;
    }
}
</style>
