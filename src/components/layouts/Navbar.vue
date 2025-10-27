<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <button class="navbar-toggler shadow-none border-0 p-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="text-light fs-2"><i class="fa-solid fa-bars"></i></span>
            </button>
            <RouterLink class="navbar-brand m-auto text-success fw-bold fs-2" to="/">
                <img src="/img/3kam_logo.png" width="100px" alt="">
            </RouterLink>
            <button class="btn text-light border-0 d-block d-lg-none p-0"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-0 gap-lg-5">
                    <li class="nav-item">
                        <RouterLink class="nav-link pc-1 active" aria-current="page" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown pc-1" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Movies
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/">Chinese Movies</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/">Korean Movies</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/">Khmer Movies</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-paragrap-default" to="/">Japanese Movies
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link pc-1" aria-current="page" to="/">Trending</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link pc-1" aria-current="page" to="#">About us</RouterLink>
                    </li>
                </ul>
                <form class="d-flex align-items-center position-relative" role="search">
                    <input class="form-control position-relative shadow-none border-0 d-none d-xl-flex" type="text"
                        id="searchBar" placeholder="Search" aria-label="Search" style="padding: 0.5rem 1rem;">
                    <button class="btn btn-search border-0 position-absolute end-0" type="button"><i
                            class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <RouterLink to="/login" class="btn btn-outline-success px-4 ms-0 ms-lg-4">Sign In</RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>