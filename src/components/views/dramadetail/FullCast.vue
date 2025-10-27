<template>
    <section class="my-4">
        <div class="container">
            <h3 class="text-light mb-4">Full Cast</h3>
            <div class="cast-grid">
                <div v-for="(actor, index) in castMembers" :key="actor.id" class="cast-card"
                    :style="{ animationDelay: `${index * 0.05}s` }" @click="viewActorProfile(actor)">
                    <div class="cast-image-container">
                        <img :src="actor.image" :alt="`${actor.name} in ${actor.character}`"
                            :title="`${actor.name} as ${actor.character}`" class="cast-image" loading="lazy"
                            @error="handleImageError" />
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
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tmdb from '@/tmdb-api'

const castMembers = ref([])
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
    alert(`View actor profile: ${actor.name}`)
}

const handleImageError = (event) => {
    event.target.src = '/img/no-cast.jpg'
}

onMounted(() => {
    fetchCast()
})
</script>

<style scoped>
/* Reuse your styles for .cast-grid, .cast-card, etc. from Casting.vue */
</style>
