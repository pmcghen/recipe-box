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
import NProgress from 'nprogress';

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
      this.$store.dispatch('logout');

      this.$router.push('/');
    }
  },
  async mounted() {
    document.title = 'My Recipe Box | The Recipe Box'
    NProgress.start();

    const apiUrl = process.env.VUE_APP_API_SERVER + 'users/current/'

    await axios.get(apiUrl, {
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
        NProgress.done();
      })

      NProgress.done();
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    }
  }
}
</script>
