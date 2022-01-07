<template>
  <main class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Log in!</legend>
        <div v-if="errors.length" class="notice-box">
          <p class="notice">Oops!</p>
          <p>We found the following errors:</p>
          <ul>
            <li v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
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
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'Log in | The Recipe Box';
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common['Authorization'] = '';

      localStorage.removeItem('token');

      const formData = {
        username: this.username,
        password: this.password
      };

      await axios
        .post('https://pmcg-recipe-box.herokuapp.com/api/token/login/', formData)
        .then(response => {
          const token = response.data.auth_token;

          this.$store.commit('setToken', token);
          this.$store.commit('setAuthenticatedUser', formData)

          axios.defaults.headers.common['Authorization'] = `Token ${token}`;
          localStorage.setItem('token', token);
          this.$store.state.isAuthenticated = true;

          const toPath = this.$route.query.to || '/';

          this.$router.push(toPath)
        })
        .catch(err => {
          if (err.response) {
            for (const property in err.response.data) {
              this.errors.push(`${property}: ${err.response.data[property]}`);
            }
          } else {
            this.errors.push('Unexpected error. Give it another try.');
            console.log(JSON.stringify(err));
          }
        });
    }
  }
}
</script>
