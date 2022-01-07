<template>
  <h2>Latest</h2>
  <div class="flex card-row">
    <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  components: {
    RecipeCard
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
};
</script>
