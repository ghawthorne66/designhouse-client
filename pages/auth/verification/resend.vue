<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification Email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error form="form" v-if="form.errors.has('message')" >
          console.log({{ form.errors.get('message') }})
        </alert-error>
        <alert-success :form="form">
          We have resent the verification email
        </alert-success>
        <div class="form-group">
          <input
            :form="form"
            type="text"
            name="email"
            v-model="form.email"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Email"
          />
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            Resend
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: this.$vform({
        email: ''
      })
    };
  },
  methods: {
    submit() {
      this.form
        .post(`/verification/resend`)
        .then(res => this.form.reset())
        .catch(e => console.log(e));
    }
  }
}

</script>

<style scoped>

</style>
