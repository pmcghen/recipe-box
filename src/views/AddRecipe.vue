<template>
  <main class="wrapper">
    <h1>Add a Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <ul>
        <li>
          <label for="name">Title:</label>
          <input type="text" name="name" required v-model="recipe.name">
        </li>
        <li>
          <label for="image">Upload image:</label>
          <input type="file" name="image" @change="fileAttached">
        </li>
        <li>
          <fieldset class="flex">
            <legend>Duration</legend>
            <div>
              <label for="inactive-time">Inactive time (in minutes):</label>
              <input type="number" v-model="recipe.inactiveTime">
            </div>
            <div>
              <label for="active-time">Active time (in minutes):</label>
              <input type="number" v-model="recipe.activeTime">
            </div>
          </fieldset>
        </li>
        <li>
          <label for="ingredients">Ingredients:</label>
          <textarea name="ingredients" required v-model="recipe.ingredients"></textarea>
        </li>
        <li>
          <label for="directions">Directions:</label>
          <textarea name="directions" required v-model="recipe.directions"></textarea>
        </li>
        <li>
          <label for="notes">Notes:</label>
          <textarea name="notes" v-model="recipe.notes"></textarea>
        </li>
        <li>
          <label for="private">Private:</label>
          <input type="checkbox" name="private" v-model="recipe.isPriavate">
        </li>
      </ul>
      <button type="submit">Submit!</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios';
import NProgress from 'nprogress';

export default {
  name: 'AddRecipe',
  mounted() {
    document.title = 'Add a Recipe | The Recipe Box';
  },
  props: {
    id: null
  },
  data() {
    return {
      recipe: {
        author: this.id,
        name: '',
        slug: '',
        ingredients: '',
        activeTime: 0,
        inactiveTime: 0,
        directions: '',
        image: null,
        notes: '',
        isFeatured: false,
        rating: 1,
        isPrivate: false
      }
    }
  },
  methods: {
    submitRecipe() {
      NProgress.start();
      const slug = this.recipe.name.toLowerCase().split(' ').join('-');
      this.recipe.slug = slug;
      console.log(this.recipe);

      const formData = new FormData();
      formData.append('author', this.recipe.author);
      formData.append('name', this.recipe.name);
      formData.append('slug', this.recipe.slug);
      formData.append('ingredients', this.recipe.ingredients);
      formData.append('activeTime', this.recipe.activeTime);
      formData.append('inactiveTime', this.recipe.inactiveTime);
      formData.append('directions', this.recipe.directions);
      formData.append('image', this.recipe.image, this.recipe.image.name);
      formData.append('notes', this.recipe.notes);
      formData.append('isFeatured', this.recipe.isFeatured);
      formData.append('rating', this.recipe.rating);
      formData.append('isPrivate', this.recipe.isPrivate);

      const apiUrl = process.env.VUE_APP_API_SERVER + 'recipes/';

      axios.post(apiUrl, formData, {
        auth: {
          username: this.$store.state.authenticatedUser.username,
          password: this.$store.state.authenticatedUser.password,
        },
        header: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response);
          NProgress.done();
        })
        .catch(error => {
          console.log(error);
          NProgress.done();
        });
    },
    fileAttached(event) {
      this.recipe.image = event.target.files[0];
    }
  }
}
</script>
