<script setup>
import CommentVideo from './CommentVideo.vue';
</script>

<template>
    <!-- Similar Movie/Drama -->
    <section>
        <div class="container">
            <div class="row">
                <CommentVideo />
                <div class="col-12 col-lg-4">
                    <div class="container-server">
                        <h5 class="text-light">Popular Series</h5>
                        <ul class="nav nav-pills mb-3 d-flex justify-content-between bg-danger p-2 rounded-3"
                            id="pills-tab" role="tablist">
                            <li class="nav-item" style="width: 30%;" role="presentation">
                                <button class="nav-link d-flex justify-content-center active" style="width: 100%;"
                                    id="pills-weekly-tab" data-bs-toggle="pill" data-bs-target="#pills-weekly"
                                    type="button" role="tab" aria-controls="pills-weekly"
                                    aria-selected="true">Weekly</button>
                            </li>
                            <li class="nav-item" style="width: 30%;" role="presentation">
                                <button class="nav-link d-flex justify-content-center" style="width: 100%;"
                                    id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly"
                                    type="button" role="tab" aria-controls="pills-monthly"
                                    aria-selected="false">Monthly</button>
                            </li>
                            <li class="nav-item" style="width: 30%;" role="presentation">
                                <button class="nav-link d-flex justify-content-center" style="width: 100%;"
                                    id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button"
                                    role="tab" aria-controls="pills-all" aria-selected="false">All</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-weekly" role="tabpanel"
                                aria-labelledby="pills-weekly-tab" tabindex="0">
                                <div class="wrap-items">
                                    <ul class="list-unstyled">
                                        <li class="d-flex align-items-center border-bt-customize">
                                            <div class="items-image w-25 me-3">
                                                <a href="#">
                                                    <img src="@/assets/img/Crash_Landing_on_You_main_poster.jpg"
                                                        class="img-fluid" alt="thumnail">
                                                </a>
                                            </div>
                                            <div class="items-text-series">
                                                <h4 class="fs-6 fw-semibold"><a href="#">Battle Through The Heavens
                                                        Season 5</a>
                                                </h4>
                                                <span class="fs-7">
                                                    <b>Genre</b>:
                                                    <a class="comma-items" href="#">Action</a>
                                                    <a class="comma-items" href="#">Adventure</a>
                                                    <a class="comma-items" href="#">Martial Art</a>
                                                    <a class="comma-items" href="#">Romance</a>
                                                </span>
                                                <div class="text-primary-kam">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex align-items-center border-bt-customize">
                                            <div class="items-image w-25 me-3">
                                                <a href="#">
                                                    <img src="@/assets/img/Crash_Landing_on_You_main_poster.jpg"
                                                        class="img-fluid" alt="thumnail">
                                                </a>
                                            </div>
                                            <div class="items-text-series">
                                                <h4 class="fs-6 fw-semibold"><a href="#">Battle Through The Heavens
                                                        Season 5</a>
                                                </h4>
                                                <span class="fs-7">
                                                    <b>Genre</b>:
                                                    <a class="comma-items" href="#">Action</a>
                                                    <a class="comma-items" href="#">Adventure</a>
                                                    <a class="comma-items" href="#">Martial Art</a>
                                                    <a class="comma-items" href="#">Romance</a>
                                                </span>
                                                <div class="text-primary-kam">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex align-items-center border-bt-customize">
                                            <div class="items-image w-25 me-3">
                                                <a href="#">
                                                    <img src="@/assets/img/Crash_Landing_on_You_main_poster.jpg"
                                                        class="img-fluid" alt="thumnail">
                                                </a>
                                            </div>
                                            <div class="items-text-series">
                                                <h4 class="fs-6 fw-semibold"><a href="#">Battle Through The Heavens
                                                        Season 5</a>
                                                </h4>
                                                <span class="fs-7">
                                                    <b>Genre</b>:
                                                    <a class="comma-items" href="#">Action</a>
                                                    <a class="comma-items" href="#">Adventure</a>
                                                    <a class="comma-items" href="#">Martial Art</a>
                                                    <a class="comma-items" href="#">Romance</a>
                                                </span>
                                                <div class="text-primary-kam">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex align-items-center border-bt-customize">
                                            <div class="items-image w-25 me-3">
                                                <a href="#">
                                                    <img src="@/assets/img/Crash_Landing_on_You_main_poster.jpg"
                                                        class="img-fluid" alt="thumnail">
                                                </a>
                                            </div>
                                            <div class="items-text-series">
                                                <h4 class="fs-6 fw-semibold"><a href="#">Battle Through The Heavens
                                                        Season 5</a>
                                                </h4>
                                                <span class="fs-7">
                                                    <b>Genre</b>:
                                                    <a class="comma-items" href="#">Action</a>
                                                    <a class="comma-items" href="#">Adventure</a>
                                                    <a class="comma-items" href="#">Martial Art</a>
                                                    <a class="comma-items" href="#">Romance</a>
                                                </span>
                                                <div class="text-primary-kam">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex align-items-center border-bt-customize">
                                            <div class="items-image w-25 me-3">
                                                <a href="#">
                                                    <img src="@/assets/img/Crash_Landing_on_You_main_poster.jpg"
                                                        class="img-fluid" alt="thumnail">
                                                </a>
                                            </div>
                                            <div class="items-text-series">
                                                <h4 class="fs-6 fw-semibold"><a href="#">Battle Through The Heavens
                                                        Season 5</a>
                                                </h4>
                                                <span class="fs-7">
                                                    <b>Genre</b>:
                                                    <a class="comma-items" href="#">Action</a>
                                                    <a class="comma-items" href="#">Adventure</a>
                                                    <a class="comma-items" href="#">Martial Art</a>
                                                    <a class="comma-items" href="#">Romance</a>
                                                </span>
                                                <div class="text-primary-kam">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-monthly" role="tabpanel"
                                aria-labelledby="pills-monthly-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab"
                                tabindex="0">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>