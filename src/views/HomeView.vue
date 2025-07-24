<template>
  <main>
    <HomeToView />
    <ContinueWatch />
    <UpcomingMovie />
    <TrendingMovie />
    <OnGoingMovie />
    <Categories />
    <PopularAnime /> 
  </main>
</template>

<script setup>
import HomeToView from '@/components/home/HomeToView.vue';
import ContinueWatch from '@/components/home/ContinueWatch.vue';
import TrendingMovie from '@/components/home/TrendingMovie.vue';
import OnGoingMovie from '@/components/home/OnGoingMovie.vue';
import Categories from '@/components/home/Categories.vue';
import PopularAnime from '@/components/home/PopularAnime.vue';
import { onMounted } from 'vue'
import { useSwiperStore } from '@/stores/swiperStore'
import UpcomingMovie from '@/components/home/UpcomingMovie.vue';

const swiperStore = useSwiperStore()

onMounted(() => {
  swiperStore.initDramaList()
  swiperStore.initCategoriesList()
})
</script>
