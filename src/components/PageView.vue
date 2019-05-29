<template>
  <div>
    PageView (name: {{ name }})
    Message: {{ message }}<br>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'PageView',
  props: {
    name: String,
  },
  computed: {
    ...mapGetters(['message'])
  },
});
</script>

<style scoped>
</style>
