import { defineStore } from 'pinia'
import Swiper from 'swiper'
import 'swiper/css'

export const useSwiperStore = defineStore('swiper', {
	state: () => ({
		swipers: new Map()
	}),
	actions: {
		initAll(type = 'drama') {
			document.querySelectorAll(`.swiper-${type}`).forEach(container => {
				const swiperId = container.getAttribute('data-swiper-id')
				const swiper = new Swiper(container, {
					slidesPerView: type === 'category' ? 6 : 6,
					slidesPerGroup: type === 'category' ? 6 : 6,
					spaceBetween: 25,
					loop: false,
					navigation: {
						nextEl: `.btn-next[data-swiper-id="${swiperId}"]`,
						prevEl: `.btn-previous[data-swiper-id="${swiperId}"]`
					},
					breakpoints: type === 'category'
						? {
							1200: { slidesPerView: 3, slidesPerGroup: 3 },
							1020: { slidesPerView: 5, slidesPerGroup: 5 },
							768: { slidesPerView: 4, slidesPerGroup: 4 },
							480: { slidesPerView: 2, slidesPerGroup: 2 },
							0: { slidesPerView: 1, slidesPerGroup: 1 }
						}
						: {
							1200: { slidesPerView: 6, slidesPerGroup: 6 },
							1020: { slidesPerView: 5, slidesPerGroup: 5 },
							768: { slidesPerView: 4, slidesPerGroup: 4 },
							480: { slidesPerView: 2, slidesPerGroup: 2 },
							0: { slidesPerView: 2, slidesPerGroup: 2 }
						}
				})
				this.swipers.set(`${type}-${swiperId}`, swiper)
			})
		},
		destroyAll() {
			this.swipers.forEach(swiper => swiper.destroy())
			this.swipers.clear()
		}
	}
})