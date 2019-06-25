<template>
  <div class="App ph2 pv4">
    <div v-if="order" class="mw7 center">
      <h2 class="tracked ttu green">
        Thank you for shopping!
      </h2>
      <h4 class="tracked ttu gray flex justify-between">
        Your order number is #{{order.id}}
      </h4>
    </div>
    <div v-if="!checkout">
      <cart
        :cart="cart"
        @remove-item-from-cart="removeProductFromCart"
        @create-checkout="createCheckout"/>
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
    <checkout
      v-else
      :checkout="checkout"
      :commerce="commerce"
      @capture-order="captureOrder"
      @cancel-checkout="cancelCheckout" />
  </div>
</template>

<script>
/* eslint-disable */
// components
import ProductItem from './components/ProductItem'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
// application stylesheet
import './styles/application.scss'

export default {
  name: 'app',
  components: {
    ProductItem,
    Cart,
    Checkout
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
    },
    refreshCart(){
      this.commerce.Cart.refresh(
      (resp) => {
        // successful
      },
      error => console.log(error))
    },
    // checkout methods
    createCheckout() {
      if (this.cart.total_items > 0) {
        this.commerce.Checkout
          .generateToken(this.cart.id, { type: 'cart' },
            (checkout) => {
              this.checkout = checkout;
            },
            function(error) {
              console.log('Error:', error)
            })
      }
    },
    cancelCheckout() {
      this.checkout = null;
    },
    captureOrder(checkoutId, order) {
      console.log(arguments)
      // upon successful capturing of order, refresh cart, and clear checkout state, then set order state
      this.commerce.Checkout.capture(checkoutId, order,
        (resp) => {
          this.refreshCart()
          this.checkout = null;
          this.order = resp;
        },
        (error) => console.log(error)
      )
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
