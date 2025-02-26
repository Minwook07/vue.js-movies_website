<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';
</script>
