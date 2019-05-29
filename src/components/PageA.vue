<template>
  <div>
    <h3>Page A</h3>
    Go To <router-link to="/b">Page B</router-link><br>
    Go To <router-link to="/c">Page C</router-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PageA',
});
</script>

<style scoped>
</style>
