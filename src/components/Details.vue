<template>
  <div class='details' v-if='movieDetails.poster_path && movieDetails.overview'>
    <img class='poster' :src='"https://image.tmdb.org/t/p/w500"+movieDetails.poster_path' alt='Movie poster' />
    <svg class='close' @click='close' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
    <p class='content'>{{movieDetails.overview}}</p>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    movieDetails: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang='scss'>
.details {
  margin: 1rem 2rem 0 0;
  max-height: 100%;
  position: relative;

  .poster {
    width: 25rem;
    max-width: 100%;
    border-radius: 0.1rem;
    object-fit: cover;
  }
  .close {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    fill: #35495e;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(150%);
    }
    cursor: pointer;
    background-color: white;
    border-radius: 0.1rem;
  }
  .content {
    width: 25rem;
  }
}
</style>