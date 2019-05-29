<template>
  <div>
    <h3>Page B</h3>
    Go To <router-link to="/">Page A</router-link><br>
    Go To <router-link to="/c">Page C</router-link><br>
    <button type="button" @click="sendMessage">Change message</button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PageB',
  methods: {
    sendMessage() {
      this.$store.dispatch('doUpdate', 'Hello!!');
    }
  }
});
</script>

<style scoped>
</style>
