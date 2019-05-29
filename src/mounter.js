import collection from './collection';

const elementsShoudMount = document.querySelectorAll('div[data-props]');

for (const node of elementsShoudMount) {
  const props = JSON.parse(node.getAttribute('data-props'));
  const vueInstance = collection[node.id];
  if (vueInstance) {
    vueInstance(props).$mount('#' + node.id);
  }
}