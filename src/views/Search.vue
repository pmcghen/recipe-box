<template>
  <main class="wrapper">
    <h1>Search</h1>
    <Card v-for="recipe in recipes" :recipe="recipe" :key="recipe.id"/>
  </main>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      recipes: [],
      query: ''
    }
  },
  methods: {
    async getResults(searchQuery = {}) {
      this.$store.commit('setIsLoading', true);

      const apiUrl = process.env.VUE_APP_API_SERVER + 'search/'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchQuery)
      });

      this.$store.commit('setIsLoading', false);

      return response.json();
    }
  },
  mounted() {
    document.title = 'Search | The Recipe Box';

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if (params.get('query')) {
      this.query = params.get('query');
      this.getResults({ query: this.query })
        .then(data => {
          this.recipes = data
        });
    }

  }
}
</script>
