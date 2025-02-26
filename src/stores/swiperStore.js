// stores/swiperStore.js
import { defineStore } from 'pinia'
import Swiper from 'swiper'
import 'swiper/css'

export const useSwiperStore = defineStore('swiper', {
  state: () => ({
    swipers: new Map()
  }),
  
  actions: {
    initDramaList() {
      document.querySelectorAll('.swiper').forEach(container => {
        const swiperId = container.getAttribute('data-swiper-id')
        
        const swiper = new Swiper(container, {
          slidesPerView: 6,
          spaceBetween: 25,
          loop: false,
          navigation: {
            nextEl: `.btn-next[data-swiper-id="${swiperId}"]`,
            prevEl: `.btn-previous[data-swiper-id="${swiperId}"]`,
          },
          breakpoints: {
            1200: { slidesPerView: 6 },
            1020: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 2 }
          }
        })
        
        this.swipers.set(`drama-${swiperId}`, swiper)
      })
    },

    initCategoriesList() {
      document.querySelectorAll('.swiper1').forEach(container => {
        const swiperId = container.getAttribute('data-swiper-id')
        
        const swiper = new Swiper(container, {
          slidesPerView: 6,
          spaceBetween: 25,
          loop: false,
          navigation: {
            nextEl: `.btn-next[data-swiper-id="${swiperId}"]`,
            prevEl: `.btn-previous[data-swiper-id="${swiperId}"]`,
          },
          breakpoints: {
            1200: { slidesPerView: 3 },
            1020: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }
        })
        
        this.swipers.set(`category-${swiperId}`, swiper)
      })
    },

    // Optional: Cleanup method
    destroyAll() {
      this.swipers.forEach(swiper => {
        swiper.destroy()
      })
      this.swipers.clear()
    }
  }
})