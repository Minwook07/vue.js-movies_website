import { defineStore } from 'pinia'

export const useDramaStore = defineStore('views/drama', {
    state: () => ({
        drama_lists: [
            { id: 1, title: "May It Please the Court", genre: "Drama", language: "KH Dub", status: "Ongoing", category: "Mystery", sub_dub: "Dub", progress: "100%", description: null, image: "/img/Abyss.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 2, title: "Crash Landing on You", genre: "Romance", language: "KH Dub", status: "Completed", category: "Romantic Comedy", sub_dub: "Sub", progress: "100%", description: null, image: "/img/All-of-Us-are-Dead.webp", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 3, title: "Goblin", genre: "Fantasy", language: "KH Dub", status: "Completed", category: "Fantasy Romance", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Awaken_2020.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 4, title: "Itaewon Class", genre: "Drama", language: "KH Dub", status: "Ongoing", category: "Revenge", sub_dub: "Dub", progress: "100%", description: null, image: "/img/business-proposal.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 5, title: "Hotel Del Luna", genre: "Fantasy", language: "KH Dub", status: "Ongoing", category: "Mystery", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Cheo_Yong_Drama_Series_2014.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 6, title: "Descendants of the Sun", genre: "Action", language: "KH Dub", status: "Ongoing", category: "Military Romance", sub_dub: "Dub", progress: "100%", description: null, image: "/img/Crash_Landing_on_You_main_poster.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 7, title: "What's Wrong with Secretary Kim", genre: "Romance", language: "KH Dub", status: "Ongoing", category: "Office Romance", sub_dub: "Sub", progress: "100%", description: null, image: "/img/DoctorStranger2014.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 8, title: "Reply 1988", genre: "Comedy", language: "KH Dub", status: "Ongoing", category: "Family", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Doom_at_your_service.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 9, title: "Kingdom", genre: "Thriller", language: "Eng Sub", status: "Ongoing", category: "Historical Zombie", sub_dub: "Dub", progress: "100%", description: null, image: "/img/happyending.png", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 10, title: "Strong Woman Do Bong Soon", genre: "Romance", language: "Eng Sub", status: "Completed", category: "Superhero", sub_dub: "Sub", progress: "100%", description: null, image: "/img/IRIS_II.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 11, title: "Extraordinary Attorney Woo", genre: "Mystery", language: "Eng Sub", status: "Ongoing", category: "Mystery Drama", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Lovely Runner.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 12, title: "Squid Game", genre: "Thriller", language: "Eng Sub", status: "Completed", category: "Survival", sub_dub: "Dub", progress: "100%", description: null, image: "/img/May_It_Please_the_Court_2022.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 13, title: "Hometown Cha-Cha-Cha", genre: "Romance", language: "Eng Sub", status: "Completed", category: "Healing", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Mouse.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 14, title: "Vincenzo", genre: "Action", language: "Eng Sub", status: "Completed", category: "Dark Comedy", sub_dub: "Dub", progress: "100%", description: null, image: "/img/Moving.png", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 15, title: "My Mister", genre: "Drama", language: "Eng Sub", status: "Ongoing", category: "Slice of Life", sub_dub: "Sub", progress: "100%", description: null, image: "/img/Vincenzo_2021.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 16, title: "Mr. Sunshine", genre: "Historical", language: "Eng Sub", status: "Ongoing", category: "Melodrama", sub_dub: "Dub", progress: "100%", description: null, image: "/img/Remember_2015.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 17, title: "The King: Eternal Monarch", genre: "Fantasy", language: "Eng Sub", status: "Ongoing", category: "Parallel Universe", sub_dub: "Sub", progress: "100%", description: null, image: "/img/SheWasPretty.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 18, title: "Signal", genre: "Thriller", language: "Eng Sub", status: "Completed", category: "Crime", sub_dub: "Dub", progress: "100%", description: null, image: "/img/StartUp.webp", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 19, title: "It's Okay to Not Be Okay", genre: "Romance", language: "Eng Sub", status: "Completed", category: "Psychological", sub_dub: "Sub", progress: "100%", description: null, image: "/img/tales_of_demons and gods.jpg", created_at: "2025-02-20", updated_at: "2025-02-20" },
            { id: 20, title: "Battle Through The Heavens 5", genre: "Anime", language: "Eng Sub", status: "Ongoing", category: "Martial Arts", sub_dub: "Dub", progress: null, description: null, image: "/img/battle_through_the_heavens2.jpg", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 21, title: "Tales of Demons and Gods Season 8", genre: "Anime", language: "KH Dub", status: "Completed", category: "Cultivation", sub_dub: "Dub", progress: null, description: null, image: "/img/tales_of_demons and gods.jpg", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 22, title: "Spirit Sword Sovereign 4", genre: "Anime", language: "Eng Sub", status: "Ongoing", category: "Cultivation", sub_dub: "Dub", progress: null, description: null, image: "/img/Spirit-Sword-Sovereign.webp", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 23, title: "Legend of Xianwu", genre: "Anime", language: "Eng Sub", status: "Completed", category: "Martial Arts", sub_dub: "Dub", progress: null, description: null, image: "/img/Legend_of_xianwu.jpg", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 24, title: "Spy x Family", genre: "Anime", language: "KH Dub", status: "Ongoing", category: "Shonen", sub_dub: "Dub", progress: null, description: null, image: "/img/spyxfamily.webp", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 25, title: "The Devil Is a Part-Timer 1", genre: "Anime", language: "Eng Sub", status: "Ongoing", category: "Supernatural", sub_dub: "Dub", progress: null, description: null, image: "/img/The_Devil_Is_a_Part-TimerS1.png", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 26, title: "BUCCHIGIRI?!", genre: "Anime", language: "KH Dub", status: "Completed", category: "Supernatural", sub_dub: "Dub", progress: "100%", description: null, image: "/img/Bucchigiri_!_anime_key_visual.jpg", created_at: "2025-02-24", updated_at: "2025-02-24" },
            { id: 27, title: "Moving", genre: "Sci-Fi", language: "Eng Sub", status: "Ongoing", category: "Superpower", sub_dub: "Dub", progress: null, description: null, image: "/img/Moving.png", created_at: "2025-02-24", updated_at: "2025-02-24" }

        ]
    }),
    actions: {
        // onLoadDramaLists(){
        //     axios.get()
        // }
    }
})
