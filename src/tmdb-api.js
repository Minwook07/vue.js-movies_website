// src/tmdb.js
import axios from 'axios'

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVhZDBkMDVjMjVmMGE0OTEyNjE3NGJkYTIzYzA5MiIsIm5iZiI6MTc1MzIzNjk2OS4xNzUsInN1YiI6IjY4ODA0NWU5NWE4NTliZTlkNWY3NzVkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlwGO_tBfpkWuX3b8rkXHmI8nr5NAlM9glv20Wdm-cw';
const baseURL = 'https://api.themoviedb.org/3'

const tmdb = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  params: {
    language: 'en-US',
  },
})

export default tmdb
