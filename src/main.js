import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import collection from './collection';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const elementsShouldBeMounted = document.querySelectorAll('div[data-props]');

  for (const el of elementsShouldBeMounted) {
    const props = JSON.parse(el.getAttribute('data-props') || '{}');
    const getVueInstance = collection[el.id];
    if (getVueInstance) {
      getVueInstance(props).$mount('#' + el.id);
    }
  }
});
