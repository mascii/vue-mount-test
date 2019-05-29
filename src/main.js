import Vue from 'vue'
import collection from './collection';

Vue.config.productionTip = false

const elementsShoudMount = document.querySelectorAll('div[data-props]');

for (const node of elementsShoudMount) {
  const props = JSON.parse(node.getAttribute('data-props'));
  const vueInstance = collection[node.id];
  if (vueInstance) {
    vueInstance(props).$mount('#' + node.id);
  }
}
