<template>
  <main class="wrapper">
    <h1>Welcome!</h1>
    <p>Here you'll find a collection of my go-to recipes for breads, pastas, sides, and more!</p>
    <section class="features">
      <h2>Featured</h2>
      <div class="flex card-row">
        <Card v-for="feature in featuredRecipes" :key="feature.id" :recipe="feature" />
      </div>
    </section>
    <section class="latest">
      <h2>Latest</h2>
      <div class="flex card-row">
        <Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </section>
  </main>
</template>

<script>
import NProgress from 'nprogress';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      recipes: [],
      featuredRecipes: [],
    }
  },
  async mounted() {
    document.title = 'Home | The Recipe Box';

    NProgress.start();

    const apiUrl = process.env.VUE_APP_API_SERVER + 'recipes';
    await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.recipes = data;

        this.recipes.forEach(recipe => {
          if (recipe.isFeatured) {
            this.featuredRecipes.push(recipe);
          }
        })
      })
      .catch(error => {
        NProgress.done();
        console.error(error.response);
      });

    NProgress.done();
  }
}
</script>
