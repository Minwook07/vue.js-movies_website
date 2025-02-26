<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all">
                <RouterLink to="/all_anime" class="card-type-catagories text-secondary-kam">
                    The Most Popular Anime
                </RouterLink>
                <div class="d-flex gap-3">
                    <button type="button" data-swiper-id="6" class="btn btn-outline-success btn-previous">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button type="button" data-swiper-id="6" class="btn btn-success btn-next">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div class="swiper mySwiper" data-swiper-id="6">
                <div class="swiper-wrapper">
                    <div 
                        class="swiper-slide bg-transparent" 
                        v-for="drama in dramaStore.drama_lists.filter(drama => drama.genre === 'Anime')" 
                        :key="drama.id"
                    >
                        <div class="card-content position-relative rounded-3">
                            <RouterLink to="/drama_details">
                                <div class="card-content-img">
                                    <img :src="drama.image" :alt="drama.title" class="card-content-img">
                                </div>
                                <div class="play-video"></div>
                                <div class="card-languages"
                                    :class="drama.language == 'Eng Sub' ? `bg-danger` : `bg-success`">
                                    {{ drama.language }}
                                </div>
                                <div class="card-trending-fire"></div>
                                <div class="overlay"></div>
                            </RouterLink>
                        </div>
                        <div class="mt-2 text-start">
                            <RouterLink to="/ongoing" class="btn p-0 border-0 fw-medium"
                                :class="drama.status == 'Ongoing' ? `text-success` : `text-danger`">
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
            </div>
        </div>
    </section>
</template>

<script setup>
import { useDramaStore } from '@/stores/dramaStore';

const dramaStore = useDramaStore();
</script>
