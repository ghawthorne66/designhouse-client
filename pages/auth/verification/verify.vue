<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Email Verification
      </h1>
      <form class="auth-form">


        <div class="form-group">
          <div class="alert alert-success">
            Email successfully verified.
          </div>
          <a href="#">Proceed to Login</a>
        </div>
        <div class="form-group">
          <div class="alert alert-danger">
            An error was encountered.
          </div>
          <a href="#">Resend verification link</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
name: "verify"
}
</script>

<style scoped>

</style>
