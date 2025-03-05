<template>
  <Navbar v-if="!['login'].includes(route.name)" />
  <RouterView />
  <Footer v-if="!['login'].includes(route.name)" />
</template>

<script setup>
import { useRoute, RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';

const route = useRoute();
</script>
