<template>
  <div>
    <!-- SearchBar -->
    <Results></Results>
    <Details></Details>
  </div>
</template>

<script>
import Results from '@/components/Results';
import Details from '@/components/Details';

export default {
  components: {
    Results,
    Details
  }
};
</script>

<style scoped>
</style>