<template>
  <main class="wrapper">
    <header class="flex between flex-header">
      <h1>Welcome, {{ user.first_name }}!</h1>
      <nav>
        <span>Add a Recipe</span> | <span>My Recipes</span> | <span>My Favorites</span> | <span>Edit Profile</span>
      </nav>
    </header>
    <div v-if="user.avatar" class="flex two-column">
      <div>
        <img :src="user.avatar" :alt="fullName" class="avatar avatar-full">
      </div>
      <div>
        <h2>Your Profile Info</h2>
        <h3>User Name</h3>
        {{ user.username }}
        <h3>Email</h3>
        {{ user.email }}
        <h3>Bio</h3>
        {{ user.bio }}
      </div>
    </div>
    <div v-else>
      {{ user.bio}}
    </div>
    <button @click="logout">Log out</button>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        id: 0,
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        bio: ''
      }
    }
  },
  methods: {
    logout() {
      this.$store.commit('removeToken');
      localStorage.removeItem('token');

      this.$store.state.isAuthenticated = false;

      this.$router.push('/');
    }
  },
  async mounted() {
    document.title = 'My Recipe Box | The Recipe Box'

    await axios.get('https://pmcg-recipe-box.herokuapp.com/api/users/current/', {
      auth: {
        username: this.$store.state.authenticatedUser.username,
        password: this.$store.state.authenticatedUser.password,
      }
    })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    }
  }
}
</script>
