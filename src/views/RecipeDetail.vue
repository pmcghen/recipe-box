<template>
  <main class="wrapper">
    <h1>{{ recipe.name }}</h1>
    <div class="flex">
      <div>
        <h2>Ingredients</h2>
        <p>{{ recipe.ingredients }}</p>
      </div>
      <div>
        <h2>Directions</h2>
        <p>{{ recipe.directions }}</p>
      </div>
    </div>
    <div v-if="recipe.notes">
      {{ recipe.notes }}
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
}
</script>
