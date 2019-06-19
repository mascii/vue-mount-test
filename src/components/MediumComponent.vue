<template>
  <div>
    <h3>MediumComponent!</h3>
    <SmallComponent class="small-comp" />
  </div>
</template>

<script>
import Vue from 'vue';
import SmallComponent from './SmallComponent.vue';

export default Vue.extend({
  name: 'MediumComponent',
  components: {
    SmallComponent,
  },
});
</script>

<style scoped>
.small-comp {
  border: 1px dotted gray;
  border-radius: 10px;
}
</style>
