<template>
  <article class='result' @click='viewDetails'>
    <img class='poster' :src='"https://image.tmdb.org/t/p/w500"+movieData.poster_path' alt='Movie poster' />
    <p class='title'>{{movieData.title}}</p>
  </article>
</template>

<script>
export default {
  name: 'Results',
  props: {
    movieData: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewDetails() {
      this.$emit('viewDetails', this.$props.movieData);
    }
  }
};
</script>

<style scoped lang='scss'>
.result {
  width: 16rem;
  height: 16rem;
  position: relative;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .poster {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(50%);
    transition: filter 0.2s;
  }

  &:hover .poster {
    filter: brightness(40%);
  }

  .title {
    position: absolute;
    width: calc(100% - 1rem);
    bottom: 0.5rem;
    left: 0.25rem;
    color: white;
    font-weight: lighter;
    font-size: 1.5rem;
  }
}
</style>