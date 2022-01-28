import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticatedUser: null
  },
  mutations: {
    SET_USER_DATA(state, user) {
      state.authenticatedUser = user;
      localStorage.setItem('authenticatedUser', JSON.stringify({ username: user.username }));
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('authenticatedUser');
      location.reload();
    }
  },
  actions: {
    async register({ commit }, credentials) {
      const apiUrl = process.env.VUE_APP_API_SERVER + 'users/'

      return await axios
        .post(apiUrl, credentials)
        .then(({ data }) => {
          credentials.auth_token = data.auth_token;
          commit('SET_USER_DATA', credentials);
        });
    },
    async login({ commit }, credentials) {
      const apiUrl = process.env.VUE_APP_API_SERVER + 'token/login/';

      return await axios
        .post(apiUrl, credentials)
        .then(({ data }) => {
          credentials.auth_token = data.auth_token;
          commit('SET_USER_DATA', credentials);
        });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    }
  },
  modules: {
  },
  getters: {
    loggedIn(state) {
      // Use a getter for added readability and flexibility
      return !!state.authenticatedUser
    }
  }
})
