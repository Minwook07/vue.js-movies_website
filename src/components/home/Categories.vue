<template>
    <section class="py-5">
        <div class="container">
            <div class="card-type-all">
                <a href="#" class="card-type-catagories text-secondary-kam">Categories</a>
                <div class="d-flex gap-3">
                    <button type="button" data-swiper-id="3" class="btn btn-outline-success btn-previous"><i
                            class="fa-solid fa-angle-left"></i></button>
                    <button type="button" data-swiper-id="3" class="btn btn-success btn-next"><i
                            class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            <div class="swiper swiper1 mySwiper" data-swiper-id="3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-transparent" v-for="drama in dramaStore.drama_lists" :key="drama.id">
                        <a href="drama-detail.html">
                            <div class="card-content position-relative rounded-3">
                                <div class="card-content-img">
                                    <img class="card-content-img" src="../../assets/img/Mouse.jpg" alt="Mouse.jpg">
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <button
                                class="text-start btn p-0 border-0 fw-medium text-secondary-kam fs-5 mt-2">{{ drama.type }}</button>
                        </a>
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