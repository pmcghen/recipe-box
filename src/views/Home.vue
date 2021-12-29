<template>
  <main class="wrapper">
    <h1>Welcome!</h1>
    <p>Here you'll find a collection of my go-to recipes for breads, pastas, sides, and more!</p>
    <FeaturedRecipes :featuredRecipes="featuredRecipes" />
    <h2>All recipes</h2>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="{ name: 'recipe-detail', params: { slug: recipe.slug } }">
          {{ recipe.name }}
          <font-awesome-icon v-if="recipe.isFeatured" :icon="['fas', 'certificate']" />
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import FeaturedRecipes from '@/components/FeaturedRecipes.vue'

export default {
  name: 'Home',
  components: {
    FeaturedRecipes,
  },
  data() {
    return {
      recipes: [],
      featuredRecipes: [],
    }
  },
  mounted() {
    const apiUrl = 'https://pmcg-recipe-box.herokuapp.com/api/recipes';
    fetch(apiUrl)
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
  }
}
</script>
