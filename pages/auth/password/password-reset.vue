<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          {{ status }}
          <p>
            <nuxt-link to="/login">Proceed to login</nuxt-link>
          </p>
        </alert-success>
        <div class="form-group">
          <input
            :form="form"
            :readonly="true"
            field="email"
            v-model="form.email"
            placeholder="Email"
          />
        </div>

        <div class="form-group">
          <input
            :form="form"
            inputType="password"
            field="password"
            v-model="form.email"
            placeholder="New Password"
          />
        </div>

        <div class="form-group">
          <input
            :form="form"
            inputType="password"
            field="password_confirmation"
            v-model="form.password_confirmation"
            placeholder="Confirm New Password"
          />
        </div>

        <div class="text-right">
          <button :loading="form.busy">
            Reset Password
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
      status: '',
      form: this.$vform({
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      })
    };
  },
  methods: {
    submit() {
      this.form
        .post('/password/reset')
        .then(res => {
          this.status = res.data.status;
          this.form.reset();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token;
  }
};
</script>

<style>

</style>
