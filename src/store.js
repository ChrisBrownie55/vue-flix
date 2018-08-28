import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const movieAPI = Axios.create({
  baseURL:
    'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    saveMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async search({ commit }, search) {
      const data = await movieAPI.get(search);
      commit('saveMovies', data.data.results);
    }
  }
});
