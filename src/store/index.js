import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
    authenticatedUser: {
      username: '',
      password: ''
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');
        state.isAuthenticated = true;
      } else {
        state.token = '';
        state.isAuthenticated = false;
      }
    },
    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    removeToken(state) {
      state.token = '';
      state.isAuthenticated = false;
    },
    setAuthenticatedUser(state, user) {
      state.authenticatedUser.username = user.username;
      state.authenticatedUser.password = user.password;
    }
  },
  actions: {
  },
  modules: {
  }
})
