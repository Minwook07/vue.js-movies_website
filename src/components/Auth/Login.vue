<template>
    <section class="fixed-top">
        <div class="container">
            <a class="navbar-brand m-auto text-success fw-bold fs-2" href="/index.html">
                <img src="../img/3kam_logo.png" width="100px" alt="">
            </a>
        </div>
    </section>
    <section>
        <div class="d-flex justify-content-center align-items-center flex-wrap login-cusomize">
            <div class="wrap-login-form bg-white">
                <form action="#!">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-5">
                                <h2 class="display-5 fw-bold text-center">Sign in</h2>
                                <p class="text-center m-0">Don't have an account? <a href="#!">Sign up</a></p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control shadow-none rounded-2" name="email" id="email"
                                    placeholder="name@example.com" required>
                                <label for="email" class="form-label label-floating">Email</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control shadow-none rounded-2" name="password"
                                    id="password" value="" placeholder="Password" required>
                                <label for="password" class="form-label label-floating">Password</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row justify-content-between mt-4">
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input shadow-none" type="checkbox" value=""
                                            name="remember_me" id="remember_me">
                                        <label class="form-check-label text-secondary" for="remember_me">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text-end">
                                        <a href="#!" class="link-secondary text-decoration-none">Forgot
                                            password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-3">
                            <div class="d-grid">
                                <button class="btn btn-primary btn-lg" type="submit">Log in</button>
                            </div>
                        </div>
                        <div class="col-12 text-center mt-5">
                            <p>--Or Sign in with--</p>
                        </div>
                        <div class="col-6">
                            <a href="#!" class="btn btn-lg btn-danger social-btn py-3">
                                <img src="../../assets/img/google-brands-solid.svg" style="width: 20px;" alt="">
                                <span class="ms-2 fs-6 d-none d-sm-flex">Google</span>
                            </a>
                        </div>
                        <div class="col-6">
                            <a href="#!" class="btn btn-lg btn-primary social-btn py-3">
                                <img src="../../assets/img/facebook-f-brands-solid.svg" style="width: 12px;" alt="">
                                <span class="ms-2 fs-6 d-none d-sm-flex">Facebook</span>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>