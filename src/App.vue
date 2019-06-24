<template>
  <div class="App ph2 pv4">
    <div v-if="!checkout">
      <cart
        :cart="cart"
        @remove-item-from-cart="removeProductFromCart"/>
      <div class="products-container mw7 center cf">
        <h2 class="tracked ttu gray">
          All Products
        </h2>
        <div v-if="products.length">
          <product-item
            v-for="product of products"
            :product="product"
            :key="product.id"
            @add-product-to-cart="addProductToCart">
          </product-item>
        </div>
        <p v-else>There no products available right now</p>
      </div>
    </div>
  </div>
</template>

<script>
// components
import ProductItem from './components/ProductItem'
import Cart from './components/Cart'
// application stylesheet
import './styles/application.scss'

export default {
  name: 'app',
  components: {
    ProductItem,
    Cart
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
          /* eslint-disable-next-line */
          console.log(error)
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
  methods: {
    // product methods
    addProductToCart(productId) {
      this.commerce.Cart.add({
        id: productId,
      }, (resp) => {
        // if successful update Cart
        if (!resp.error) {
          this.cart = resp.cart;
        }
      });
    },
    // cart methods
    removeProductFromCart(lineItemId) {
      this.commerce.Cart.remove(lineItemId, (resp) => {
        // if successful update Cart
        if (!resp.error) {
          this.cart = resp.cart
        }
      });
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
