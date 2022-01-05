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
export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipe: {}
    }
  },
  mounted() {
    fetch('https://pmcg-recipe-box.herokuapp.com/api/recipes/')
      .then(response => response.json())
      .then(data => {
        for (const recipe of data) {
          if (recipe.slug === this.slug)
          this.recipe = recipe;
        }
      })
      .catch(error => {
        console.error(error.response);
      });
  },
  computed: {
    ingredients() {
      if (this.recipe.ingredients) {
        return this.recipe.ingredients.replace(/(?:\r\n|\r|\n)/g, '<br>');
      } else {
        return false;
      }
    },
    directions() {
      if (this.recipe.directions) {
        return this.recipe.directions.replace(/(?:\r\n|\r|\n)/g, '<br>');
      } else {
        return false;
      }
    },
    notes() {
      if (this.recipe.notes) {
        return this.recipe.notes.replace(/(?:\r\n|\r|\n)/g, '<br>');
      } else {
        return false;
      }
    }
  }
}
</script>
