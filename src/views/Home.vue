<template>
  <div class='home'>
    <!-- SearchBar -->
    <header class='search-header'>
      <form @submit.prevent='search' class='search text-input-wrapper'>
        <label for='search'>Search</label>
        <input id='search' type='text' v-model='query' placeholder='Moana' class='text-input' />
        <button type='submit' class='btn btn-submit'>Search</button>
      </form>
    </header>
    <section class='content'>
      <section class='results'>
        <Results v-for='(movie, index) in movies' :key='index' :movieData='movie' v-on:viewDetails='setActiveMovie' />
      </section>
      <Details :movieDetails='activeMovie' v-on:close='setActiveMovie({})' />
    </section>
  </div>
</template>

<script>
import Results from '@/components/Results';
import Details from '@/components/Details';

export default {
  components: {
    Results,
    Details
  },
  data() {
    return {
      query: '',
      activeMovie: {}
    };
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
    },
    setActiveMovie(movie) {
      this.activeMovie = movie;
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
}

.search-header {
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.search {
  display: flex;
  position: relative;
  width: 15rem;
  margin: 0 auto;
  label {
    position: absolute;
    right: calc(100% + 0.5rem);
    top: 50%;
    transform: translateY(-50%);
  }
  input {
    font-size: 1rem;
    padding: 0.25rem;
    width: calc(100% - 0.5rem);
    outline: none;
  }
  input + button {
    opacity: 0;
    transform: translate(-50%, -50%);
    position: absolute;
    left: calc(100% + 1rem);
    top: 50%;
    font-size: 1rem;
  }
  input:focus + button,
  button:focus,
  button:active,
  button:hover {
    opacity: 1;
    transform: translate(0, -50%);
  }
}

.text-input-wrapper {
  &::after {
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    height: 1px;
    background-color: #42b883;
    transition: width 0.2s;
  }
  &:focus-within::after {
    width: 100%;
  }
}
.text-input {
  border: 0;
  border-bottom: solid 1px #35495e;
  color: #35495e;
}

.btn {
  border: none;
  background: none;
  color: #35495e;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
  border-radius: 0.1rem;
}
.btn-submit {
  &:hover {
    background-color: #42b883;
    color: white;
  }
}

.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>