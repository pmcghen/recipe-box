<template>
  <header class="page-header">
    <div class="wrapper flex between">
      <div class="logo">
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'cookie-bite']" class="icon" />
          The Recipe Box
        </router-link>
      </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
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
