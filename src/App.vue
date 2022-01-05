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
        <template v-if="$store.state.isAuthenticated">
          <router-link to="/">My Recipe Box</router-link>
        </template>
        <template v-else>
          <router-link to="/log-in">Log in</router-link>
        </template>
      </nav>
    </div>
  </header>
  <img src="./assets/hero.jpg" alt="" class="img-responsive">
  <router-view :key="$route.fullPath" />
  <footer class="page-footer">
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
      <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
    </a>
    <br />
    This work is licensed under a
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
      Creative Commons Attribution-ShareAlike 4.0 International License
    </a>
  </footer>
</template>

<style lang="scss">
  @import 'styles/style.scss';
</style>
