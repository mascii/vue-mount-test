import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import collection from './collection';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false

const elementsShoudMount = document.querySelectorAll('div[data-props]');

for (const node of elementsShoudMount) {
  const props = JSON.parse(node.getAttribute('data-props'));
  const vueInstance = collection[node.id];
  if (vueInstance) {
    vueInstance(props).$mount('#' + node.id);
  }
}
