<template functional>
  <div>
    Fruit Name: {{ props.name }}<br>
    Color: {{ props.color }}
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Fruit',
  props: {
    name: String,
    color: String,
  }
});
</script>

<style scoped>
</style>
