<template>
  <div>
    <h3>Page C</h3>
    Go To <router-link to="/">Page A</router-link><br>
    Go To <router-link to="/b">Page B</router-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PageC',
});
</script>

<style scoped>
</style>
