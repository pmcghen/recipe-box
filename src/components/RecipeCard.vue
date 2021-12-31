<template>
  <div class="card">
    <router-link :to="recipeUrl">
      <p class="card-heading">{{ recipe.name }}</p>
      <div class="card-details">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {}
  },
  computed: {
    recipeUrl() {
      return `/recipe/${this.recipe.slug}`;
    }
  }
}
</script>
