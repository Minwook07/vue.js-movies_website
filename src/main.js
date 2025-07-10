import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/css/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@splidejs/splide/dist/css/splide.min.css';
import 'swiper/css/bundle';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import Swiper from 'swiper/bundle';
import router from './router'

const swiper = new Swiper();

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueSplide);
app.mount('#app')
