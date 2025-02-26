<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all">
                <a href="./@/assets/pages/allcategories.html"
                    class="card-type-catagories text-secondary-kam">Trending
                    Movies</a>
                <div class="d-flex gap-3">
                    <button type="button" data-swiper-id="1" class="btn btn-outline-success btn-previous"><i
                            class="fa-solid fa-angle-left"></i></button>
                    <button type="button" data-swiper-id="1" class="btn btn-success btn-next"><i
                            class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            <div class="swiper mySwiper" data-swiper-id="1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-transparent" v-for="drama in dramaStore.drama_lists" :key="drama.id">
                        <div class="card-content position-relative rounded-3">
                            <RouterLink to="/">
                                <div class="card-content-img">
                                    <img :src="drama.image" :alt="drama.altText" class="card-content-img">
                                </div>
                                <div class="play-video"></div>
                                <div class="card-languages"
                                    :class="drama.language == 'Sub' ? `bg-dager` : `bg-success`">
                                    {{ drama.language }}
                                </div>
                                <div class="card-trending-fire"></div>
                                <div class="overlay"></div>
                            </RouterLink>
                        </div>
                        <div class="mt-2 text-start">
                            <a href="#" class="btn p-0 border-0 fw-medium"
                                :class="drama.status == 'Ongoing' ? `text-danger` : `text-success`">{{ drama.status
                                }}</a>
                            <br>
                            <a href="#" class="text-start btn p-0 border-0 fw-medium text-secondary-kam">{{ drama.title
                            }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useDramaStore } from '@/stores/dramaStore';

// Access the drama store
const dramaStore = useDramaStore();
</script>