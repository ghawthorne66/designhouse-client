<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{ form.errors.get('message') }}
          <nuxt-link :to="{ name: 'verification.resend' }"
          >Resend verification email</nuxt-link
          >
        </alert-error>
        <div class="form-group">
          <input
            type="text"
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Email"
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            :form="form"
            field="password"
            inputType="password"
            v-model="form.password"
            placeholder="Password"
          >
        </div>
        <div class="mt-4 mb-4 clearfix">
          <nuxt-link
            to="/password/email"
            class="forgot-pass color-blue font-14 fw-400"
          >
            Forgot password?
          </nuxt-link>
        </div>
        <div class="text-right">
          <button :loading="form.busy">
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link :to="{ name: 'register' }" class="color-blue">
            Create an account
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>


<script>
export default {

    // middleware: ['guest'],
    data() {
      return {
        form: this.$vform({
          email: '',
          password: ''
        })
      }
    },
      methods: {
        submit(){
          this.$auth
            .loginWith('local', {
              data: this.form
            })
            .then(res => {
              console.log(res);
            })
            .catch(e => {
              this.form.errors.set(e.response.data.errors);
            });
        }
      }
    };
</script>

<style>

</style>
