import Vue from 'vue';

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

/* Export */
export default collection;