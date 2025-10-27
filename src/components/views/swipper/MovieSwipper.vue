<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all d-flex justify-content-between align-items-center mb-3">
                <RouterLink :to="routeLink" class="card-type-catagories text-secondary-kam">
                    {{ title }}
                </RouterLink>

                <div class="d-flex gap-2">
                    <button type="button" class="btn btn-outline-success btn-previous" :data-swiper-id="swiperId">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button type="button" class="btn btn-success btn-next" :data-swiper-id="swiperId">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>

            <div class="swiper" :class="`swiper-${type}`" :data-swiper-id="swiperId">
                <div class="swiper-wrapper">
                    <div v-for="item in items" :key="item.id || item.name" class="swiper-slide bg-transparent">
                        <!-- Movie Card -->
                        <template v-if="type !== 'category'">
                            <div class="card-content position-relative rounded-3">
                                <RouterLink :to="`/movie/${item.id}`">
                                    <div class="card-content-img">
                                        <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
                                            :alt="item.title || item.original_title" class="card-content-img" />
                                    </div>
                                    <div class="play-video"></div>
                                    <div class="card-languages bg-success">
                                        {{ item.original_language.toUpperCase() }}
                                    </div>
                                    <div class="card-trending-fire"></div>
                                    <div class="overlay"></div>
                                </RouterLink>
                            </div>
                            <div class="mt-2 text-start">
                                <span class="btn p-0 border-0 fw-medium text-success">★ {{ item.vote_average }}</span>
                                <br />
                                <RouterLink :to="`/movie/${item.id}`"
                                    class="text-start btn p-0 border-0 fw-medium text-secondary-kam">
                                    {{ item.title || item.original_title }}
                                </RouterLink>
                            </div>
                        </template>

                        <!-- Category Card -->
                        <template v-else>
                            <div class="category-card bg-light p-2 rounded text-center">
                                <RouterLink :to="`/category/${item.id}`">
                                    {{ item.name }}
                                </RouterLink>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useSwiperStore } from '@/stores/swiperStore'
import tmdb from '@/tmdb-api'

const props = defineProps({
    title: { type: String, required: true },
    apiUrl: { type: String, required: true },
    routeLink: { type: String, required: true },
    swiperId: { type: String, required: true },
    type: { type: String, default: 'drama' } // 'drama' or 'category'
})

const items = ref([])
const swiperStore = useSwiperStore()

onMounted(async () => {
    try {
        const response = await tmdb.get(props.apiUrl)
        items.value = response.data.results

        await nextTick()
        swiperStore.initAll(props.type)
    } catch (error) {
        console.error('Failed to fetch data:', error)
    }
})
</script>
