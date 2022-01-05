<template>
  <section class="features">
    <h2>Featured</h2>
    <div class="flex card-row">
      <RecipeCard v-for="feature in featuredRecipes" :key="feature.id" :recipe="feature" />
    </div>
  </section>
</template>
<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  components: {
    RecipeCard
  },
  props: {
    featuredRecipes: {
      type: Array,
      required: true,
    }
  }
}
</script>
