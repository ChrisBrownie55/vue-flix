<template>
  <div class='results'>
    <p>Results</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    movies: {
      type: Array,
      requird: true
    }
  }
};
</script>

<style scoped>
</style>