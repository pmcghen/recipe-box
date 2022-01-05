<template>
  <main class="wrapper">
    <h1>Welcome!</h1>
    <p>Here you'll find a collection of my go-to recipes for breads, pastas, sides, and more!</p>
    <FeaturedRecipes :featuredRecipes="featuredRecipes" />
    <LatestRecipes :recipes="recipes" />
  </main>
</template>

<script>
import FeaturedRecipes from '@/components/FeaturedRecipes.vue';
import LatestRecipes from '@/components/LatestRecipes.vue';

export default {
  name: 'Home',
  components: {
    FeaturedRecipes,
    LatestRecipes,
  },
  data() {
    return {
      recipes: [],
      featuredRecipes: [],
    }
  },
  async mounted() {
    this.$store.commit('setIsLoading', true);

    const apiUrl = 'https://pmcg-recipe-box.herokuapp.com/api/recipes';
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
        console.error(error.response);
      });

    this.$store.commit('setIsLoading', false);
  }
}
</script>
