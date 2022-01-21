<template>
  <div class="card">
    <router-link :to="recipeUrl" data-test="recipe-link">
      <img v-if="recipe.image" :src="recipe.image" alt="" class="img-responsive">
      <p class="card-heading">{{ recipe.name }}</p>
      <div class="card-details">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      name: String,
      image: String,
      slug: String
    }
  },
  computed: {
    recipeUrl() {
      return `/recipe/${this.recipe.slug}`;
    }
  }
}
</script>
