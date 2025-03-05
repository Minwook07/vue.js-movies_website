<template>
    <section class="py-5">
        <div class="container">
            <h5 class="mb-5"><span class="text-light bg-success rounded-1 py-2 px-4 fw-normal">Japanese Movies</span>
            </h5>
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

            <!-- Pagination Controls -->
            <div class="text-center mt-4">
                <button class="btn btn-outline-success me-2" @click="goToFirstPage" :disabled="currentPage === 1">
                    First
                </button>

                <button v-for="page in totalPages" :key="page" @click="currentPage = page" class="btn mx-2"
                    :class="{ 'btn-success': page === currentPage, 'btn-outline-success': page !== currentPage }"
                    style="width: 40px;">
                    {{ page }}
                </button>

                <button class="btn btn-outline-success ms-2" @click="goToLastPage"
                    :disabled="currentPage === totalPages">
                    Last
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDramaStore } from '@/stores/dramaStore';

const dramaStore = useDramaStore();
const perPage = 12;
const currentPage = ref(1);

// Get ongoing dramas
const countryDramas = computed(() =>
    dramaStore.drama_lists.filter(drama => drama.country === 'japanese')
);

// Calculate total pages
const totalPages = computed(() =>
    Math.ceil(countryDramas.value.length / perPage)
);

// Get paginated dramas for the current page
const paginatedDramas = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return countryDramas.value.slice(start, start + perPage);
});

// Jump to first page
const goToFirstPage = () => {
    currentPage.value = 1;
};

// Jump to last page
const goToLastPage = () => {
    currentPage.value = totalPages.value;
};
</script>
