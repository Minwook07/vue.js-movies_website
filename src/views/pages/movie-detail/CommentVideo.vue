<template>
    <div class="col-12 col-lg-8">
        <div class="comments-header text-light">
            <h5>Comments</h5>
            <p>We hope you have a good time browsing the comment section!
                Please read our <a href="#">Comment Policy</a> before commenting.</p>
        </div>
        <div class="row align-items-center mb-5">
            <div class="col-2 col-lg-1">
                <a href="#"><img class="border-0 rounded-3 " style="width: 50px;height: 50px; object-fit: cover;"
                        src="@/assets/img/rose-pf.jpg" alt=""></a>
            </div>
            <div class="col-10 col-lg-11">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Join the discussion"
                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <a href="#" class="input-group-text" id="basic-addon2">Post</a>
                </div>
            </div>
        </div>

        <div class="site-comments">
            <div class="row gy-4">
                <div class="col-lg-1 col-2">
                    <a href="#"><img class="border-0 rounded-3 " style="width: 50px;height: 50px; object-fit: cover;"
                            src="@/assets/img/rose-pf.jpg" alt=""></a>
                </div>

                <div class="col-lg-11 col-10">
                    <h5><a href="#">@cr7monarch</a> <b class="fs-6 fw-normal text-light">1 week ago</b>
                    </h5>
                    <p class="text-light">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                    </p>
                    <div class="d-flex align-items-center">
                        <a href="" class="comment-btn comment-like text-light fs-5" role="tooltip"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Like"><i
                                class="fa-solid fa-thumbs-up"></i></a>
                        <span class="fs-7 text-light me-2">2</span>
                        <a href="" class="comment-btn comment-like text-light fs-5" role="tooltip"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Dislike"><i
                                class="fa-solid fa-thumbs-down"></i></a>
                        <button class="accordion-button comment-btn collapsed text-light ms-4 w-auto"
                            data-bs-toggle="collapse" data-bs-target="#reply3" aria-expanded="false">Reply</button>
                    </div>
                    <div id="reply3" class="accordion-collapse collapse mt-2" data-bs-parent="#accordionExample">
                        <div class="card card-body">
                            <div class="d-flex pt-3">
                                <a href="#"><img class="border-0 rounded-3 "
                                        style="width: 50px;height: 50px; object-fit: cover;"
                                        src="@/assets/img/rose-pf.jpg" alt=""></a>
                                <div class="form-floating w-100">
                                    <textarea class="form-control input-reply shadow-none" placeholder="Add a reply"
                                        id="floatingTextarea21"></textarea>
                                    <label for="floatingTextarea21">Add a reply</label>
                                </div>
                            </div>
                            <div class="text-end mt-2">
                                <button class="btn border-0 comment-btn py-2">Cencel</button>
                                <button id="submit-btncomment" class="btn btn-primary border-0 comment-btn py-2 active"
                                    disabled>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1 col-2">
                    <a href="#"><img class="border-0 rounded-3 " style="width: 50px;height: 50px; object-fit: cover;"
                            src="@/assets/img/rose-pf.jpg" alt=""></a>
                </div>

                <div class="col-lg-11 col-10">
                    <h5><a href="#">@cr7monarch</a> <b class="fs-6 fw-normal text-light">1 week ago</b>
                    </h5>
                    <p class="text-light">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.
                    </p>
                    <div class="d-flex align-items-center">
                        <a href="" class="comment-btn comment-like text-light fs-5" role="tooltip"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Like"><i
                                class="fa-solid fa-thumbs-up"></i></a>
                        <span class="fs-7 text-light me-2">2</span>
                        <a href="" class="comment-btn comment-like text-light fs-5" role="tooltip"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Dislike"><i
                                class="fa-solid fa-thumbs-down"></i></a>
                        <button class="accordion-button comment-btn collapsed text-light ms-4 w-auto"
                            data-bs-toggle="collapse" data-bs-target="#reply2" aria-expanded="false">Reply</button>
                    </div>
                    <div id="reply2" class="accordion-collapse collapse mt-2" data-bs-parent="#accordionExample">
                        <div class="card card-body">
                            <div class="d-flex pt-3">
                                <a href="#"><img class="border-0 rounded-3 "
                                        style="width: 50px;height: 50px; object-fit: cover;"
                                        src="@/assets/img/rose-pf.jpg" alt=""></a>
                                <div class="form-floating w-100">
                                    <textarea class="form-control input-reply shadow-none" placeholder="Add a reply"
                                        id="floatingTextarea22"></textarea>
                                    <label for="floatingTextarea22">Add a reply</label>
                                </div>
                            </div>
                            <div class="text-end mt-2">
                                <button class="btn border-0 comment-btn py-2">Cencel</button>
                                <button id="submit-btncomment2" class="btn btn-primary border-0 comment-btn py-2 active"
                                    disabled>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>