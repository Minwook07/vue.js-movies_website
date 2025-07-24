<template>
    <section class="my-4">
        <div class="container">
            <div class="card border-0" style="background: rgba(0, 0, 0, 0.3); border-radius: 20px;">
                <div class="card-body p-4 p-md-5">
                    <div class="row g-4">
                        <div class="col-lg-12">
                            <h5
                                class="text-light fs-4 fw-semibold mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                                Cast & Characters
                            </h5>

                            <div class="cast-grid">
                                <div v-for="(actor, index) in castMembers.slice(0, 10)" :key="actor.id"
                                    class="cast-card" :style="{ animationDelay: `${index * 0.1}s` }"
                                    @click="viewActorProfile(actor)">
                                    <div class="cast-image-container">
                                        <img :src="actor.image" :alt="`${actor.name} in ${actor.character}`"
                                            :title="`${actor.name} as ${actor.character}`" class="cast-image"
                                            loading="lazy" @error="handleImageError" />
                                        <div class="image-overlay">
                                            <i class="bi bi-eye-fill"></i>
                                        </div>
                                    </div>

                                    <div class="cast-info">
                                        <h5 class="actor-name">{{ actor.name }}</h5>
                                        <p class="character-name">{{ actor.character }}</p>
                                        <span :class="['role-badge', getRoleBadgeClass(actor.roleType)]">
                                            {{ actor.roleType }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-4" v-if="castMembers.length > 10">
                                <button @click="goToFullCastPage" class="btn btn-outline-warning btn-sm load-more-btn">
                                    View All Cast
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tmdb from '@/tmdb-api'

const castMembers = ref([])
const hasMoreCast = ref(false) // Set to true if implementing pagination
const loading = ref(false)

const route = useRoute()
const router = useRouter()

const fetchCast = async () => {
    try {
        const { data } = await tmdb.get(`/movie/${route.params.id}/credits`)
        castMembers.value = data.cast.map(cast => ({
            id: cast.id,
            name: cast.name,
            character: cast.character,
            roleType: cast.order < 5 ? 'Main Role' : 'Support Role',
            image: cast.profile_path
                ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                : '/img/no-cast.jpg'
        }))
    } catch (error) {
        console.error('Failed to fetch cast:', error)
    }
}

const getRoleBadgeClass = (roleType) => {
    switch (roleType) {
        case 'Main Role':
            return 'badge-main'
        case 'Support Role':
            return 'badge-support'
        case 'Guest Role':
            return 'badge-guest'
        default:
            return 'badge-default'
    }
}

const viewActorProfile = (actor) => {
    // You can replace this with your route logic
    alert(`View actor profile: ${actor.name}`)
}

const handleImageError = (event) => {
    event.target.src = '/img/no-cast.jpg'
}

const goToFullCastPage = () => {
  router.push(`/movie/${route.params.id}/cast`)
}

onMounted(() => {
    fetchCast()
})
</script>

<style scoped>
/* Same styles as your existing cast-grid (no change needed) */
.cast-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.cast-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.cast-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
}

.cast-image-container {
    position: relative;
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 3/4;
}

.cast-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.3s ease;
}

.cast-card:hover .cast-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.cast-card:hover .image-overlay {
    opacity: 1;
}

.image-overlay i {
    color: white;
    font-size: 2rem;
}

.cast-info {
    text-align: center;
}

.actor-name {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.character-name {
    color: #a0a9c0;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.role-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-main {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
}

.badge-support {
    background: linear-gradient(45deg, #4834d4, #686de0);
    color: white;
}

.badge-guest {
    background: linear-gradient(45deg, #00d2d3, #54a0ff);
    color: white;
}

.badge-default {
    background: rgba(255, 255, 255, 0.1);
    color: #a0a9c0;
}

.load-more-btn {
    border-radius: 50px;
    padding: 0.75rem 2rem;
    font-weight: 600;
    border: 2px solid;
    transition: all 0.3s ease;
}

.load-more-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 25px rgba(25, 135, 84, 0.3);
}

@media (max-width: 1024px) {
    .cast-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 820px) {
    .cast-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .cast-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
