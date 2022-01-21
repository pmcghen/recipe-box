<template>
  <header class="page-header">
    <div class="flex between">
      <div class="logo">
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'cookie-bite']" class="icon" />
          The Recipe Box
        </router-link>
      </div>
      <form action="search" method="get">
        <label class="accessible-text" for="query">Search</label>
        <input name="query" placeholder="Search...">
        <input type="submit" value="Search">
      </form>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <template v-if="loggedIn">
          <router-link to="/profile">My Recipe Box</router-link>
        </template>
        <template v-else>
          <router-link data-test="log-in-link" to="/log-in">Log in</router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script>
import { authComputed } from '@/store/helpers.js';

export default {
  name: 'PageHeader',
  mounted() {
    const userString = localStorage.getItem('authenticatedUser');

    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData);
    }
  },
  computed: {
    ...authComputed
  }
}
</script>
