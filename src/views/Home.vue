<template>
  <div class='home'>
    <!-- SearchBar -->
    <form @submit.prevent='search' class='search text-input-wrapper'>
      <input type='text' v-model='query' placeholder='Moana' class='text-input' />
      <button type='submit' class='btn btn-submit'>Search</button>
    </form>
    <Results :movieData='movies' />
    <Details />
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
      query: ''
    };
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
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
.search {
  position: relative;
  width: 15rem;
  margin: 1rem auto;
  input {
    padding: 0.25rem;
    width: calc(100% - 0.5rem);
    outline: none;
  }
  input + button {
    opacity: 0;
    transform: translate(-50%);
    transition: transform 0.2s, opacity 0.2s;
    position: absolute;
    left: calc(100% + 1rem);
    height: 100%;
  }
  input:focus + button,
  button:focus,
  button:active,
  button:hover {
    opacity: 1;
    transform: translate(0);
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
}
</style>