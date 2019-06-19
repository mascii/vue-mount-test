<template>
  <div>
    <h2>LargeComponent!</h2>
    <MediumComponent class="medium-comp" />
    <MediumComponent class="medium-comp ma_t-20" />
    <MediumComponent class="medium-comp ma_t-20" />
  </div>
</template>

<script>
import Vue from 'vue';
import MediumComponent from './MediumComponent.vue';

export default Vue.extend({
  name: 'LargeComponent',
  components: {
    MediumComponent,
  },
});
</script>

<style scoped>
.medium-comp {
  border: 1px solid black;
  border-radius: 10px;
}

/* 実際には都度定義しない */
.ma_t-20 {
  margin-top: 20px;
}
</style>
