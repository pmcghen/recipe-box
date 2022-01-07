<template>
  <main class="wrapper">
    <h1>About</h1>
    <p>I built this to practice my Django and Vue skills.</p>
    <p>Source code is available on <a href="https://github.com/pmcghen/recipe-box">GitHub</a>.</p>
    <p>The recipes found here are my own, and you're free to use and distribute them under CC Attribution-ShareAlike 4.0 license.</p>
  </main>
</template>

<script>
export default {
  mounted() {
    document.title = 'About | The Recipe Box';
  }
}
</script>
