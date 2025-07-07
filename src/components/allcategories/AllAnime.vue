<template>
    <section class="py-5">
        <div class="container">
            <!-- Modern Filter Header -->
            <div class="filter-header mb-5">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5 class="mb-0">
                        <span class="text-light bg-success rounded-1 py-2 px-4 fw-normal">Popular Anime</span>
                    </h5>
                    <button class="btn btn-outline-success btn-sm" @click="clearAllFilters">
                        <i class="bi bi-arrow-clockwise me-1"></i>Clear Filters
                    </button>
                </div>

                <!-- Filter Controls -->
                <div class="row g-3 mb-4">
                    <!-- Search Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Search</label>
                            <div class="input-group">
                                <span class="input-group-text bg-light border-end-0">
                                    <i class="bi bi-search text-muted"></i>
                                </span>
                                <input type="text" class="form-control border-start-0 bg-light"
                                    placeholder="Search anime..." v-model="filters.search">
                            </div>
                        </div>
                    </div>

                    <!-- Category Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Category</label>
                            <select class="form-select bg-light" v-model="filters.category">
                                <option value="">All Categories</option>
                                <option v-for="category in availableCategories" :key="category" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Year Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Year</label>
                            <select class="form-select bg-light" v-model="filters.year">
                                <option value="">All Years</option>
                                <option v-for="year in availableYears" :key="year" :value="year">
                                    {{ year }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Status Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Status</label>
                            <select class="form-select bg-light" v-model="filters.status">
                                <option value="">All Status</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Advanced Filters Toggle -->
                <div class="text-center mb-3">
                    <button class="btn btn-link text-success p-0 text-decoration-none small"
                        @click="showAdvancedFilters = !showAdvancedFilters">
                        <i class="bi" :class="showAdvancedFilters ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
                        {{ showAdvancedFilters ? 'Hide' : 'Show' }} Advanced Filters
                    </button>
                </div>

                <!-- Advanced Filters -->
                <div v-show="showAdvancedFilters" class="row g-3 mb-4 border-top pt-4">
                    <!-- Language Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Language</label>
                            <select class="form-select bg-light" v-model="filters.language">
                                <option value="">All Languages</option>
                                <option value="Eng Sub">English Sub</option>
                                <option value="Eng Dub">English Dub</option>
                                <option value="Raw">Raw</option>
                            </select>
                        </div>
                    </div>

                    <!-- Rating Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Min Rating</label>
                            <select class="form-select bg-light" v-model="filters.rating">
                                <option value="">Any Rating</option>
                                <option value="9">9+ Stars</option>
                                <option value="8">8+ Stars</option>
                                <option value="7">7+ Stars</option>
                                <option value="6">6+ Stars</option>
                            </select>
                        </div>
                    </div>

                    <!-- Sort By -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Sort By</label>
                            <select class="form-select bg-light" v-model="filters.sortBy">
                                <option value="title">Title A-Z</option>
                                <option value="year">Year (Newest)</option>
                                <option value="rating">Rating (Highest)</option>
                                <option value="popularity">Popularity</option>
                            </select>
                        </div>
                    </div>

                    <!-- Episodes Filter -->
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="filter-group">
                            <label class="form-label text-muted small fw-medium">Episodes</label>
                            <select class="form-select bg-light" v-model="filters.episodes">
                                <option value="">Any Length</option>
                                <option value="short">Short (1-12 episodes)</option>
                                <option value="medium">Medium (13-26 episodes)</option>
                                <option value="long">Long (27+ episodes)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Active Filters Display -->
                <div v-if="activeFiltersCount > 0" class="mb-3">
                    <div class="d-flex flex-wrap gap-2 align-items-center">
                        <small class="text-muted fw-medium">Active filters:</small>
                        <span v-if="filters.search"
                            class="badge bg-success-subtle text-success border border-success-subtle">
                            Search: "{{ filters.search }}"
                            <button class="btn-close btn-close-sm ms-1" @click="filters.search = ''"></button>
                        </span>
                        <span v-if="filters.category"
                            class="badge bg-success-subtle text-success border border-success-subtle">
                            Category: {{ filters.category }}
                            <button class="btn-close btn-close-sm ms-1" @click="filters.category = ''"></button>
                        </span>
                        <span v-if="filters.year"
                            class="badge bg-success-subtle text-success border border-success-subtle">
                            Year: {{ filters.year }}
                            <button class="btn-close btn-close-sm ms-1" @click="filters.year = ''"></button>
                        </span>
                        <span v-if="filters.status"
                            class="badge bg-success-subtle text-success border border-success-subtle">
                            Status: {{ filters.status }}
                            <button class="btn-close btn-close-sm ms-1" @click="filters.status = ''"></button>
                        </span>
                        <span v-if="filters.language"
                            class="badge bg-success-subtle text-success border border-success-subtle">
                            Language: {{ filters.language }}
                            <button class="btn-close btn-close-sm ms-1" @click="filters.language = ''"></button>
                        </span>
                    </div>
                </div>

                <!-- Results Count -->
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">
                        Showing {{ paginatedDramas.length }} of {{ filteredDramas.length }} results
                    </small>
                    <div class="d-flex align-items-center gap-2">
                        <small class="text-muted">Items per page:</small>
                        <select class="form-select form-select-sm" style="width: auto;" v-model="perPage">
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="48">48</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Anime Grid -->
            <div class="row">
                <div v-for="drama in paginatedDramas" :key="drama.id" class="col-6 col-md-2 mb-4">
                    <div class="card-content position-relative rounded-3">
                        <RouterLink to="/drama_details">
                            <div class="card-content-img">
                                <img :src="drama.image" :alt="drama.title" class="card-content-img">
                            </div>
                            <div class="play-video"></div>
                            <div class="card-languages"
                                :class="drama.language == 'Eng Sub' ? 'bg-danger' : 'bg-success'">
                                {{ drama.language }}
                            </div>
                            <div class="card-trending-fire"></div>
                            <div class="overlay"></div>
                        </RouterLink>
                    </div>
                    <div class="mt-2 text-start">
                        <RouterLink to="/ongoing" class="btn p-0 border-0 fw-medium"
                            :class="drama.status == 'Ongoing' ? 'text-success' : 'text-danger'">
                            {{ drama.status }}
                        </RouterLink>
                        <br>
                        <RouterLink to="/drama_details"
                            class="text-start btn p-0 border-0 fw-medium text-secondary-kam">
                            {{ drama.title }}
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- No Results Message -->
            <div v-if="filteredDramas.length === 0" class="text-center py-5">
                <div class="mb-3">
                    <i class="bi bi-search display-1 text-muted"></i>
                </div>
                <h5 class="text-muted">No anime found</h5>
                <p class="text-muted">Try adjusting your filters or search terms</p>
                <button class="btn btn-success" @click="clearAllFilters">Clear All Filters</button>
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
import { ref, computed, watch } from 'vue';
import { useDramaStore } from '@/stores/dramaStore';

const dramaStore = useDramaStore();
const perPage = ref(12);
const currentPage = ref(1);
const showAdvancedFilters = ref(false);

// Filter state
const filters = ref({
    search: '',
    category: '',
    year: '',
    status: '',
    language: '',
    rating: '',
    sortBy: 'title',
    episodes: ''
});

// Get anime dramas
const animeDramas = computed(() =>
    dramaStore.drama_lists.filter(drama => drama.genre === 'Anime')
);

// Available filter options
const availableCategories = computed(() => {
    const categories = [...new Set(animeDramas.value.map(drama => drama.category).filter(Boolean))];
    return categories.sort();
});

const availableYears = computed(() => {
    const years = [...new Set(animeDramas.value.map(drama => drama.year).filter(Boolean))];
    return years.sort((a, b) => b - a);
});

// Active filters count
const activeFiltersCount = computed(() => {
    return Object.values(filters.value).filter(value => value !== '').length;
});

// Filtered dramas
const filteredDramas = computed(() => {
    let result = [...animeDramas.value];

    // Apply search filter
    if (filters.value.search) {
        const searchTerm = filters.value.search.toLowerCase();
        result = result.filter(drama =>
            drama.title.toLowerCase().includes(searchTerm) ||
            (drama.description && drama.description.toLowerCase().includes(searchTerm))
        );
    }

    // Apply category filter
    if (filters.value.category) {
        result = result.filter(drama => drama.category === filters.value.category);
    }

    // Apply year filter
    if (filters.value.year) {
        result = result.filter(drama => drama.year == filters.value.year);
    }

    // Apply status filter
    if (filters.value.status) {
        result = result.filter(drama => drama.status === filters.value.status);
    }

    // Apply language filter
    if (filters.value.language) {
        result = result.filter(drama => drama.language === filters.value.language);
    }

    // Apply rating filter
    if (filters.value.rating) {
        result = result.filter(drama => drama.rating >= parseFloat(filters.value.rating));
    }

    // Apply episodes filter
    if (filters.value.episodes) {
        result = result.filter(drama => {
            const episodeCount = drama.episodes || 0;
            switch (filters.value.episodes) {
                case 'short': return episodeCount <= 12;
                case 'medium': return episodeCount >= 13 && episodeCount <= 26;
                case 'long': return episodeCount >= 27;
                default: return true;
            }
        });
    }

    // Apply sorting
    switch (filters.value.sortBy) {
        case 'title':
            result.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'year':
            result.sort((a, b) => (b.year || 0) - (a.year || 0));
            break;
        case 'rating':
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        case 'popularity':
            result.sort((a, b) => (b.views || 0) - (a.views || 0));
            break;
    }

    return result;
});

// Calculate total pages
const totalPages = computed(() =>
    Math.ceil(filteredDramas.value.length / perPage.value)
);

// Get paginated dramas for the current page
const paginatedDramas = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    return filteredDramas.value.slice(start, start + perPage.value);
});

// Visible pagination pages
const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const delta = 2;

    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);

    if (end - start < 4) {
        if (start === 1) {
            end = Math.min(total, start + 4);
        } else {
            start = Math.max(1, end - 4);
        }
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
});

// Reset to first page when filters change
watch(filters, () => {
    currentPage.value = 1;
}, { deep: true });

// Reset to first page when perPage changes
watch(perPage, () => {
    currentPage.value = 1;
});

// Navigation functions
const goToFirstPage = () => {
    currentPage.value = 1;
};

const goToLastPage = () => {
    currentPage.value = totalPages.value;
};

const clearAllFilters = () => {
    filters.value = {
        search: '',
        category: '',
        year: '',
        status: '',
        language: '',
        rating: '',
        sortBy: 'title',
        episodes: ''
    };
    showAdvancedFilters.value = false;
};
</script>

<style scoped>
.filter-header {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid #dee2e6;
}

.filter-group {
    position: relative;
}

.filter-group .form-label {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.form-control:focus,
.form-select:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
}

.input-group-text {
    border-color: #ced4da;
}

.badge {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
}

.btn-close-sm {
    font-size: 0.7rem;
    padding: 0.1rem;
}

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
    .filter-header {
        padding: 1rem;
    }

    .d-flex.justify-content-between {
        flex-direction: column;
        gap: 1rem;
    }

    .pagination {
        flex-wrap: wrap;
        gap: 0.25rem;
    }
}
</style>
