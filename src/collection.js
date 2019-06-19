import Vue from 'vue';
import VueRouter from 'vue-router';

const collection = {};

/* Product */
import Product from './components/Product.vue';

collection['product'] = (props) => new Vue({
  render: h => h(Product, { props }),
});

/* Fruit */
import Fruit from './components/Fruit.vue';

collection['fruit'] = (props) => new Vue({
  render: h => h(Fruit, { props }),
});

/* PageView */
import PageView from './components/PageView.vue';
import pageStore from './stores/pageStore.js';
import pageRoutes from './routes/pageRoutes.js';

collection['page-view'] = (props) => {
  const router = new VueRouter({
    routes: pageRoutes
  });

  return new Vue({
    store: pageStore,
    router,
    render: h => h(PageView, { props }),
  });
};

/* LargeComponent */
import LargeComponent from './components/LargeComponent.vue';

collection['large-comp'] = (props) => new Vue({
  render: h => h(LargeComponent, { props }),
});

/* Export */
export default collection;