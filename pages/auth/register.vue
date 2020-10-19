<template>
    <!-- Section Cards -->
    <section class="authentication">
      <div class="auth-body">
        <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
          Register
        </h1>
        <form class="auth-form">
          <div class="form-group">
            <input
              type="text"
              v-model.trim="form.name"
              name="name"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model.trim="form.username"
              name="username"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model.trim="form.email"
              name="email"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              v-model.trim="form.password"
              type="password"
              name="password"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <input
              v-model.trim="form.password_confirmation"
              type="password"
              name="password_confirmation"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Confirm Password"
            />
          </div>

          <div class="text-right">
            <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
              Register
            </button>
          </div>
          <p class="font-14 fw-400 text-center mt-4">
            Already have an account?
            <a class="color-blue" href="#"> Login</a>
          </p>
        </form>
      </div>
    </section>
    <!-- End Cards -->

</template>

<script>
export default {
  data() {
    return {
  form: this.$vform({
    username: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>

</style>
