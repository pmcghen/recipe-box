<template>
  <main class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Sign up!</legend>
        <div class="notice-box" v-if="errors.length">
          <p class="notice">Oops!</p>
          <p>We found the following errors:</p>
          <ul>
            <li v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="notice-box" v-if="error">
          <p class="notice">Oops!</p>
          <p>{{ error }}</p>
        </div>
        <ol class="form-list">
          <li>
            <label for="username">User name:</label>
            <input type="text" name="username" v-model="username">
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" name="password" v-model="password">
          </li>
          <li>
            <label for="verify">Verify password:</label>
            <input type="password" name="verify" v-model="password2">
          </li>
        </ol>
        <button>Sign up!</button>
      </fieldset>
      <p>Already have an account? <router-link to="/log-in">Log in</router-link>.</p>
    </form>
  </main>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      errors: [],
      error: null
    }
  },
  methods: {
    submitForm() {
      this.errors = [];

      if (this.username === '') {
        this.errors.push('Username is required!');
      }

      if (this.password.length < 8) {
        this.errors.push('Your password should be at least 8 characters!');
      }

      if (this.password2 !== this.password) {
        this.errors.push('Your passwords don\'t match!');
      }

      if (!this.errors.length) {
        const userData = {
          username: this.username,
          password: this.password
        };

        this.createUser(userData);
      }
    },
    createUser(userData) {
      this.$store.dispatch('register', userData)
      .then(() => {
        this.$router.push({ name: 'profile' });
      })
      .catch(err => {
        this.error = err.response.data.username[0];
      });
    }
  },
  mounted() {
    document.title = 'Sign up! | The Recipe Box';
  }
}
</script>
