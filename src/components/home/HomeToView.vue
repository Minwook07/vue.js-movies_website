<template>
    <section class="pb-5">
        <div class="container">
            <Splide :options="options" aria-label="Splide Basic HTML Example" class="splide rounded-4 overflow-hidden">
                <SplideSlide>
                    <img src="@/assets/img/my-sassy-girl-mr-sunshine.avif" class="w-100 h-100 object-fit-cover"
                        alt="...">
                </SplideSlide>
                <SplideSlide>
                    <img src="@/assets/img/happyending.png" class="w-100 h-100 object-fit-cover" alt="...">
                </SplideSlide>
                <SplideSlide>
                    <img src="@/assets/img/jangokjung.jpg" class="w-100 h-100 object-fit-cover" alt="...">
                </SplideSlide>
                <SplideSlide>
                    <img src="@/assets/img/marry-my-husband.jfif" class="w-100 h-100 object-fit-cover" alt="...">
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
    type: 'fade',
    rewind: true,
};
</script>