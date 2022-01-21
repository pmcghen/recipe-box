<template>
  <PageHeader />
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

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  components: {
    PageHeader,
  }
}
</script>

<style lang="scss">
  @import 'styles/style.scss';
</style>
