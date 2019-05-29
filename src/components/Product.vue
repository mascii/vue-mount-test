<template>
  <div>
    Product Name: {{ name }}<br>
    Color: {{ color }}
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Product',
  props: {
    name: String,
    color: String,
  }
});
</script>

<style scoped>
</style>
