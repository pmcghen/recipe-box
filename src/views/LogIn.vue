<template>
  <main class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Log in!</legend>
        <div v-if="error" class="notice-box">
          <p class="notice">Oops!</p>
          <p>{{ error }}</p>
        </div>
        <ol>
          <li>
            <label for="username">User name:</label>
            <input type="text" name="username" v-model="username">
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" name="password" v-model="password">
          </li>
        </ol>
        <button>Log in!</button>
      </fieldset>
      <p>Don't have an account? <router-link to="/sign-up">Sign up</router-link>.</p>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  mounted() {
    document.title = 'Log in | The Recipe Box';
  },
  methods: {
    submitForm() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.$router.push({ name: 'profile' });
      })
      .catch(err => {
        this.error = err.response.data.non_field_errors[0];
      });
    }
  }
}
</script>
