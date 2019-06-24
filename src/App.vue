<template>
  <div class="App ph2 pv4">
    <fragment v-if="!checkout">
      <div class="products-container mw7 center cf">
        <h2 class="tracked ttu gray">
          All Products
        </h2>
        <fragment v-if="products.length">
          <product-item v-for="product of products" :product="product" :key="product.id">
          </product-item>
        </fragment>
        <p v-else>There no products available right now</p>
      </div>
    </fragment>
  </div>
</template>

<script>
// components
import ProductItem from './components/ProductItem'
// vue-fragment
import { Fragment } from 'vue-fragment'
import './styles/application.scss'

export default {
  name: 'app',
  components: {
    Fragment,
    ProductItem
  },
  props: {
    commerce: {
      required: true,
      type: Object
    }
  },
  created: function() {
    if (this.commerce !== undefined && typeof this.commerce !== 'undefined') {
      // invoke commerce products method to get all products
      this.commerce.Products.list(
        (resp) => {
          //Success
          this.products = resp.data;
        },
        (error) => {
          // handle error properly in real-world
        }
      );
      window.addEventListener("Commercejs.Cart.Ready", function () {
      // invoke commerce cart method to retrieve cart in session
        this.commerce.Cart.retrieve((cart) => {
          if (!cart.error) {
            this.cart = cart
          }
        });
      }.bind(this))
    }
  },
  data: function() {
    return {
      products: [],
      cart: null,
      checkout: null,
      order: null
    }
  }
}
</script>
