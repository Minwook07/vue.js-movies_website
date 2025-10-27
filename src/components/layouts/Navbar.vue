<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <button class="navbar-toggler shadow-none border-0 p-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="text-light fs-2"><i class="fa-solid fa-bars"></i></span>
            </button>
            <RouterLink class="navbar-brand m-auto text-success fw-bold fs-2" to="/">
                <img src="/img/3kam_logo.png" width="100px" alt="">
            </RouterLink>
            <button class="btn text-light border-0 d-block d-lg-none p-0" @click="toggleMobileSearch">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-0 gap-lg-5">
                    <li class="nav-item">
                        <RouterLink class="nav-link pc-1" aria-current="page" to="/">Home</RouterLink>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown pc-1" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Movies
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="category in categories" :key="category.id">
                                <RouterLink class="dropdown-item fs-paragrap-default" :to="`/category/${category.id}`">
                                    {{ category.name }}
                                </RouterLink>
                            </li>
                            <li v-if="categories.length > 0">
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default fw-bold" to="/all/categories">
                                    View All Categories
                                </RouterLink>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown pc-1" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Trending
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/all/popular">
                                    Popular Movies
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/all/upcoming">
                                    Upcoming Movies
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/all/now_playing">
                                    Now Playing
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/all/top_rated">
                                    Top Rated
                                </RouterLink>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link pc-1" aria-current="page" to="/about">About us</RouterLink>
                    </li>
                </ul>

                <!-- Search Form -->
                <form class="d-flex align-items-center position-relative" role="search" @submit.prevent="handleSearch">
                    <input v-model="searchQuery"
                        class="form-control position-relative shadow-none border-0 d-none d-xl-flex" type="text"
                        id="searchBar" placeholder="Search movies..." aria-label="Search" style="padding: 0.5rem 1rem;">
                    <button class="btn btn-search border-0 position-absolute end-0" type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>

                <RouterLink to="/login" class="btn btn-outline-success px-4 ms-0 ms-lg-4">Sign In</RouterLink>
            </div>
        </div>

        <!-- Mobile Search Bar -->
        <div v-if="showMobileSearch" class="mobile-search-bar container mt-2">
            <form class="d-flex align-items-center position-relative" role="search" @submit.prevent="handleSearch">
                <input v-model="searchQuery" class="form-control shadow-none border-0" type="text"
                    placeholder="Search movies..." aria-label="Search" style="padding: 0.5rem 1rem;">
                <button class="btn btn-search border-0 position-absolute end-0" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import tmdb from '@/tmdb-api'

const router = useRouter()
const categories = ref([])
const searchQuery = ref('')
const showMobileSearch = ref(false)

// Fetch movie categories/genres
const fetchCategories = async () => {
    try {
        const response = await tmdb.get('/genre/movie/list')
        // Get top 8 categories for the dropdown
        categories.value = (response.data.genres || []).slice(0, 8)
    } catch (error) {
        console.error('Failed to fetch categories:', error)
    }
}

// Handle search submission
const handleSearch = () => {
    if (searchQuery.value.trim()) {
        router.push({
            path: '/search',
            query: { q: searchQuery.value.trim() }
        })
        searchQuery.value = ''
        showMobileSearch.value = false
    }
}

// Toggle mobile search bar
const toggleMobileSearch = () => {
    showMobileSearch.value = !showMobileSearch.value
}

onMounted(() => {
    fetchCategories()
})
</script>

<style scoped>
.mobile-search-bar {
    display: block;
    padding-bottom: 1rem;
}

@media (min-width: 1200px) {
    .mobile-search-bar {
        display: none;
    }
}

.dropdown-menu {
    max-height: 400px;
    overflow-y: auto;
}

.nav-link {
    cursor: pointer;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: #198754 !important;
}
</style>