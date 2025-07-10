<template>
    <section class="my-4">
        <div class="container">
            <div class="card border-0" style="background: rgba(0, 0, 0, 0.3); border-radius: 20px;">
                <div class="card-body p-4 p-md-5">
                    <div class="row g-4">
                        <!-- Main Content -->
                        <div class="col-lg-12">
                            <h5
                                class="text-light fs-4 fw-semibold mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                                Cast & Characters</h5>
                            <div class="cast-grid">
                                <div v-for="(actor, index) in castMembers" :key="actor.id" class="cast-card"
                                    :style="{ animationDelay: `${index * 0.1}s` }" @click="viewActorProfile(actor)">
                                    <div class="cast-image-container">
                                        <img :src="actor.image" :alt="`${actor.name} in ${actor.drama}`"
                                            :title="`${actor.name} in ${actor.drama}`" class="cast-image" loading="lazy"
                                            @error="handleImageError" />
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

                            <!-- Load More Button -->
                            <div class="text-center mt-4" v-if="hasMoreCast">
                                <button @click="loadMoreCast" :disabled="loading"
                                    class="btn btn-outline-warning btn-sm load-more-btn">
                                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                                    {{ loading ? 'Loading...' : 'View More Cast' }}
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const hasMoreCast = ref(true)

const castMembers = ref([
    {
        id: 1498,
        name: 'Park Bo Young',
        character: 'Tak Dong Kyung',
        roleType: 'Main Role',
        image: 'https://i.mydramalist.com/vywkBs.jpg',
        profileUrl: '/people/1498-park-bo-young',
        characterUrl: '/character/tak-dong-kyung',
        drama: 'Doom at Your Service Korean Drama (2021)'
    },
    {
        id: 2576,
        name: 'Seo In Guk',
        character: 'Kim Sa Ram / "Myeol Mang"',
        roleType: 'Main Role',
        image: 'https://i.mydramalist.com/j64Ry_5s.jpg',
        profileUrl: '/people/2576-seo-in-guk',
        characterUrl: '/character/kim-sa-ram-myeol-mang',
        drama: 'Doom at Your Service Korean Drama (2021)'
    },
    {
        id: 804,
        name: 'Lee Soo Hyuk',
        character: 'Cha Joo Ik',
        roleType: 'Main Role',
        image: 'https://i.mydramalist.com/k6VbO_5s.jpg',
        profileUrl: '/people/804-lee-soo-hyuk',
        characterUrl: '/character/cha-joo-ik',
        drama: 'Doom at Your Service Korean Drama (2021)'
    },
    {
        id: 6776,
        name: 'Kang Tae Oh',
        character: 'Lee Hyun Gyu',
        roleType: 'Main Role',
        image: 'https://i.mydramalist.com/qv3mz_5s.jpg',
        profileUrl: '/people/6776-kang-tae-oh',
        characterUrl: '/character/lee-hyun-gyu',
        drama: 'Doom at Your Service Korean Drama (2021)'
    },
    {
        id: 18290,
        name: 'Shin Do Hyun',
        character: 'Na Ji Na',
        roleType: 'Main Role',
        image: 'https://i.mydramalist.com/qxx6z_5s.jpg',
        profileUrl: '/people/18290-shin-do-hyun',
        characterUrl: '/character/na-ji-na',
        drama: 'Doom at Your Service Korean Drama (2021)'
    },
    {
        id: 11627,
        name: 'Da Won',
        character: 'Tak Seon Kyung [Dong Kyung\'s younger brother]',
        roleType: 'Support Role',
        image: 'https://i.mydramalist.com/dZRBe_5s.jpg',
        profileUrl: '/people/11627-da-won',
        characterUrl: '/character/tak-seon-kyung',
        drama: 'Doom at Your Service Korean Drama (2021)'
    }
])

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
    console.log('Viewing profile for:', actor.name)
    // Navigate to actor profile
    // router.push(actor.profileUrl)
}

const handleImageError = (event) => {
    event.target.src = '/placeholder.svg?height=200&width=150'
}

const loadMoreCast = async () => {
    loading.value = true

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    router.push('/')
    loading.value = false
    hasMoreCast.value = false // No more cast to load
}

</script>

<style scoped>
.cast-grid {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); */
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
/* Mobile Responsiveness */
@media (max-width: 820px) {
    .cast-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
    }

    .cast-card {
        padding: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .actor-name {
        font-size: 1.1rem;
    }

    .character-name {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .cast-grid {
        grid-template-columns: repeat(2, 1fr);;
    }

    .section-title {
        font-size: 1.8rem;
    }
}
</style>