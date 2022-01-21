<template>
  <main class="wrapper">
    <h1>{{ recipe.name }}</h1>
    <div class="flex two-column">
      <div>
        <h2>Ingredients</h2>
        <p v-html="ingredients" />
      </div>
      <div>
        <h2>Directions</h2>
        <p v-html="directions" />
      </div>
    </div>
    <div v-if="recipe.notes">
      <h2>Notes</h2>
      <p v-html="notes" />
    </div>
  </main>
</template>

<script>
import NProgress from 'nprogress';

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipe: {
        name: '',
        ingredients: '',
        directions: '',
        notes: ''
      }
    }
  },
  async mounted() {
    NProgress.start();

    const apiUrl = process.env.VUE_APP_API_SERVER + 'recipes/'

    await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        for (const recipe of data.results) {
          if (recipe.slug === this.slug)
          this.recipe = recipe;
        }
      })
      .catch(error => {
        NProgress.done();
        console.error(error.response);
      });

      document.title = this.recipe.name + ' | The Recipe Box';
      NProgress.done();
  },
  computed: {
    ingredients() {
      return this.recipe.ingredients.replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
    directions() {
      return this.recipe.directions.replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
    notes() {
      return this.recipe.notes.replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
  }
}
</script>
