<template>
  <section class="features">
    <h2>Featured</h2>
    <div class="flex">
      <div class="card" v-for="feature in featuredRecipes" :key="feature.id">
        <router-link :to="{ name: 'recipe-detail', params: { slug: feature.slug } }">
          <h3 class="card-heading">{{ feature.name }}</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    featuredRecipes: {
      type: Array,
      required: true,
    }
  }
}
</script>
