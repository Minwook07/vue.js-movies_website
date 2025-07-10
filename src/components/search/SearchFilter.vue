<template>
    <div class="filter-header mb-5">
        <div class="text-end mb-4">
            <button class="btn btn-outline-warning btn-sm" @click="clearAllFilters">
                <i class="bi bi-arrow-clockwise me-1"></i>Clear Filters
            </button>
        </div>
        
        <!-- Filter Controls -->
        <div class="row g-3 mb-4">
            <!-- Search Filter -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Search</label>
                    <div class="input-group">
                        <span class="input-group-text bg-light border-end-0">
                            <i class="bi bi-search text-light"></i>
                        </span>
                        <input 
                            type="text" 
                            class="form-control border-start-0 bg-light"
                            :placeholder="`Search ${contentType}...`" 
                            :value="modelValue.search"
                            @input="updateFilter('search', $event.target.value)"
                        >
                    </div>
                </div>
            </div>
            
            <!-- Category Filter -->
            <div class="col-12 col-md-6 col-lg-3" v-if="availableCategories.length > 0">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Category</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.category"
                        @change="updateFilter('category', $event.target.value)"
                    >
                        <option value="">All Categories</option>
                        <option v-for="category in availableCategories" :key="category" :value="category">
                            {{ category }}
                        </option>
                    </select>
                </div>
            </div>
            
            <!-- Year Filter -->
            <div class="col-12 col-md-6 col-lg-3" v-if="availableYears.length > 0">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Year</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.year"
                        @change="updateFilter('year', $event.target.value)"
                    >
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
                    <label class="form-label text-light small fw-medium">Status</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.status"
                        @change="updateFilter('status', $event.target.value)"
                    >
                        <option value="">All Status</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- Advanced Filters Toggle -->
        <div class="text-center mb-3" v-if="showAdvancedOptions">
            <button 
                class="btn btn-link text-success p-0 text-decoration-none small"
                @click="toggleAdvancedFilters"
            >
                <i class="bi" :class="showAdvanced ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
                {{ showAdvanced ? 'Hide' : 'Show' }} Advanced Filters
            </button>
        </div>
        
        <!-- Advanced Filters -->
        <div v-show="showAdvanced && showAdvancedOptions" class="row g-3 mb-4 border-top pt-4">
            <!-- Language Filter -->
            <div class="col-12 col-md-6 col-lg-3" v-if="availableLanguages.length > 0">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Language</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.language"
                        @change="updateFilter('language', $event.target.value)"
                    >
                        <option value="">All Languages</option>
                        <option v-for="language in availableLanguages" :key="language" :value="language">
                            {{ language }}
                        </option>
                    </select>
                </div>
            </div>
            
            <!-- Rating Filter -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Min Rating</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.rating"
                        @change="updateFilter('rating', $event.target.value)"
                    >
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
                    <label class="form-label text-light small fw-medium">Sort By</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.sortBy"
                        @change="updateFilter('sortBy', $event.target.value)"
                    >
                        <option value="title">Title A-Z</option>
                        <option value="year">Year (Newest)</option>
                        <option value="rating">Rating (Highest)</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
            </div>
            
            <!-- Episodes Filter (for Anime) -->
            <div class="col-12 col-md-6 col-lg-3" v-if="contentType === 'anime'">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Episodes</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.episodes"
                        @change="updateFilter('episodes', $event.target.value)"
                    >
                        <option value="">Any Length</option>
                        <option value="short">Short (1-12 episodes)</option>
                        <option value="medium">Medium (13-26 episodes)</option>
                        <option value="long">Long (27+ episodes)</option>
                    </select>
                </div>
            </div>
            
            <!-- Country Filter (for other dramas) -->
            <div class="col-12 col-md-6 col-lg-3" v-if="contentType !== 'anime' && availableCountries.length > 0">
                <div class="filter-group">
                    <label class="form-label text-light small fw-medium">Country</label>
                    <select 
                        class="form-select bg-light" 
                        :value="modelValue.country"
                        @change="updateFilter('country', $event.target.value)"
                    >
                        <option value="">All Countries</option>
                        <option v-for="country in availableCountries" :key="country" :value="country">
                            {{ country }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- Active Filters Display -->
        <div v-if="activeFiltersCount > 0" class="mb-3">
            <div class="d-flex flex-wrap gap-2 align-items-center">
                <small class="text-light fw-medium">Active filters:</small>
                
                <span v-if="modelValue.search" class="badge bg-success-subtle text-success border border-success-subtle">
                    Search: "{{ modelValue.search }}"
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('search', '')"></button>
                </span>
                
                <span v-if="modelValue.category" class="badge bg-success-subtle text-success border border-success-subtle">
                    Category: {{ modelValue.category }}
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('category', '')"></button>
                </span>
                
                <span v-if="modelValue.year" class="badge bg-success-subtle text-success border border-success-subtle">
                    Year: {{ modelValue.year }}
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('year', '')"></button>
                </span>
                
                <span v-if="modelValue.status" class="badge bg-success-subtle text-success border border-success-subtle">
                    Status: {{ modelValue.status }}
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('status', '')"></button>
                </span>
                
                <span v-if="modelValue.language" class="badge bg-success-subtle text-success border border-success-subtle">
                    Language: {{ modelValue.language }}
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('language', '')"></button>
                </span>
                
                <span v-if="modelValue.country" class="badge bg-success-subtle text-success border border-success-subtle">
                    Country: {{ modelValue.country }}
                    <button class="btn-close btn-close-sm ms-1" @click="updateFilter('country', '')"></button>
                </span>
            </div>
        </div>
        
        <!-- Results Count and Items Per Page -->
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-light">
                Showing {{ currentResults }} of {{ totalResults }} results
            </small>
            <div class="d-flex align-items-center gap-2">
                <small class="text-light">Items per page:</small>
                <select 
                    class="form-select form-select-sm" 
                    style="width: auto;" 
                    :value="perPage"
                    @change="$emit('update:perPage', parseInt($event.target.value))"
                >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    },
    contentType: {
        type: String,
        default: 'drama' // anime, drama, chinese-drama, korean-drama, etc.
    },
    availableCategories: {
        type: Array,
        default: () => []
    },
    availableYears: {
        type: Array,
        default: () => []
    },
    availableLanguages: {
        type: Array,
        default: () => ['Eng Sub', 'Eng Dub', 'Raw']
    },
    availableCountries: {
        type: Array,
        default: () => []
    },
    showAdvancedOptions: {
        type: Boolean,
        default: true
    },
    currentResults: {
        type: Number,
        default: 0
    },
    totalResults: {
        type: Number,
        default: 0
    },
    perPage: {
        type: Number,
        default: 12
    }
})

// Emits
const emit = defineEmits(['update:modelValue', 'update:perPage', 'clear-filters'])

// Local state
const showAdvanced = ref(false)

// Computed
const activeFiltersCount = computed(() => {
    return Object.values(props.modelValue).filter(value => value !== '').length
})

// Methods
const updateFilter = (key, value) => {
    const newFilters = { ...props.modelValue, [key]: value }
    emit('update:modelValue', newFilters)
}

const toggleAdvancedFilters = () => {
    showAdvanced.value = !showAdvanced.value
}

const clearAllFilters = () => {
    const clearedFilters = {
        search: '',
        category: '',
        year: '',
        status: '',
        language: '',
        rating: '',
        sortBy: 'title',
        episodes: '',
        country: ''
    }
    emit('update:modelValue', clearedFilters)
    emit('clear-filters')
    showAdvanced.value = false
}
</script>

<style scoped>
.filter-header {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 1.5rem;
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

@media (max-width: 768px) {
    .filter-header {
        padding: 1rem;
    }
    
    .d-flex.justify-content-between {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
