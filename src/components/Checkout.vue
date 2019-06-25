<template>
  <div class="checkout-container mw7 center pb4">
    <h2 class="tracked ttu gray flex justify-between">
      Checkout
    </h2>
    <ul class="w-100 list-reset ma0 pv0 ph4">
      <li v-for="item of checkout.live.line_items" :key="item.id">
        <checkout-item :item="item"/>
      </li>
    </ul>
    <form
      @submit.prevent="captureOrder"
    >
      <!--
        in real-world app it is best to check conditionals
        in order to know what information to collect for order
      -->
      <h4 class="tracked ttu gray flex justify-between">
        Customer Details
      </h4>

      <input class="db mb1" type="text" name="customerFirstName" v-model="customerFirstName" placeholder="First Name" />

      <input class="db mb1" type="text" name="customerLastName" v-model="customerLastName" placeholder="Last Name" />

      <input class="db mb1" type="email" name="customerEmail" v-model="customerEmail" placeholder="Email" />

      <h4 class="tracked ttu gray flex justify-between">
        shipping address
      </h4>

      <input class="db mb1" type="text" name="shippingFullName" v-model="shippingFullName" placeholder="Name" />

      <input class="db mb1" type="text" name="streetAddress" v-model="streetAddress" placeholder="Street Address" />

      <input class="db mb1" type="text" name="city" v-model="city" placeholder="City" />

      <input class="db mb1" type="text" name="postalZipcode" v-model="postalZipcode" placeholder="Postal/Zip Code" />

      <select v-model="country" name="country" class="db mb2">
        <option value="" disabled>Country</option>
        <option v-for="(countryName, countryCode, index) of countries" :value="countryCode" :key="index">{{countryName}}</option>
      </select>

      <select v-model="provinceRegionState" name="provinceRegionState" class="db mb2" placeholder="Province/Region/State">
        <option value="" disabled>Province/Region/State</option>
        <option v-for="(subdivisionName, subdivisionCode, index) of subdivisions" :value="subdivisionCode" :key="subdivisionCode+index">{{subdivisionName}}</option>
      </select>

      <h4 class="tracked ttu gray flex justify-between">
        choose a shipping method
      </h4>


      <select v-if="shippingOptions.length > 0" v-model="shippingOption" name="shippingOption" class="db mb2">
        <option value="" disabled>Choose a shipping method</option>
        <option v-for="option of shippingOptions" :value="option.id" :key="option.id">{{ `${option.description} - $${option.price.formatted_with_code}` }}</option>
      </select>
      <p v-else>
        There are no shipping options available for the selected country
      </p>

      <h4 class="tracked ttu gray flex justify-between">
        Payment
      </h4>

      <input class="db mb1" type="text" name="cardNumber" v-model="cardNumber" placeholder="Card Number" />

      <input class="db mb1" type="text" name="expMonth" v-model="expMonth" placeholder="Exp Month" />

      <input class="db mb1" type="text" name="expYear" v-model="expYear" placeholder="Exp Year" />

      <input class="db mb1" type="text" name="ccv" v-model="ccv" placeholder="Security Code (CCV)" />

      <input class="db mb1" type="text" name="billingPostalZipcode" v-model="billingPostalZipcode" placeholder="Billing Postal/Zip Code" />

      <p>
       Subtotal: {{checkout.live.total_due.formatted_with_code}}
      </p>
      <p>
       Shipping: {{ selectedShippingPrice }}
      </p>

      <button
        :disabled="!shippingOptions.length"
        class="dim b1 outline-0 pointer pa2 mt2 db w-100 ttc"
        :class="[!shippingOptions.length ? 'b--light-gray' : 'b--mid-gray']">
        complete order
      </button>
    </form>
    <span class="db tracked ttu tc mv2">or</span>
    <button
      class="dim b1  b--mid-gray outline-0 pointer pa2 mt2 db w-100 ttc"
      @click="$emit('cancel-checkout')">
      continue shopping
    </button>
  </div>
</template>
<script>
/* eslint-disable */
import CheckoutItem from './CheckoutItem'
export default {
  name: 'Checkout',
  components: {
    CheckoutItem
  },
  data: function() {
    return {
      customerFirstName: '',
      customerLastName: '',
      customerEmail: '',
      country: 'US',
      shippingFullName: '',
      streetAddress: '',
      city: '',
      provinceRegionState: '',
      postalZipcode: '',
      shippingOption: '',
      shippingOptions: [],
      shippingOptionsById: {},
      cardNumber: '4242 4242 4242 4242',
      expMonth: '01',
      expYear: '2021',
      ccv: '123',
      billingPostalZipcode: '32825',
      countries: {},
      subdivisions: {}
    }
  },
  props: [
    'commerce',
    'checkout'
  ],
  created: function() {
    this.getAllCountries()
    this.getRegions(this.country)
    this.getShippingOptions(this.checkout.id, this.country)
  },
  watch: {
    country: function(newCountry, oldCountry) {
      if (newCountry !== oldCountry) {
        this.getRegions(newCountry)
        this.getShippingOptions(this.checkout.id, newCountry)
      }
    }
  },
  methods: {
    getAllCountries() {
      this.commerce.Services.localeListShippingCountries(this.checkout.id,(resp) => {
        this.countries = resp.countries
      },
      error => console.log(error)
      )
    },
    getRegions(countryCode) {
      this.commerce.Services.localeListSubdivisions(countryCode, (resp) => {
        this.subdivisions = resp.subdivisions
      },
      error => console.log(error)
      )
    },
    getShippingOptions(checkoutId, country) {
      this.commerce.Checkout.getShippingOptions(checkoutId, { country }, (resp) => {
        if (!resp.error) {
          this.shippingOptions = resp;
          this.shippingOptionsById = resp.reduce((obj, option) => {
           obj[option.id] = option
           return obj
          }, {})
        } else {
          this.shippingOptions = [];
          this.shippingOptionsById = {};
        }
      })
    },
    captureOrder(){
      // no need to invoke e.preventDefault as Vue modifier '.prevent' has done it for us
      const lineItems = this.checkout.live.line_items.reduce((obj, lineItem) => {
        obj[lineItem.id] = {
          quantity: lineItem.quantity
        }
        return obj
      }, {})
      const newOrder = {
        line_items: lineItems,
        customer: {
          firstname: this.customerFirstName,
          lastname: this.customerLastName,
          email: this.customerEmail
        },
        shipping: {
          name: this.shippingFullName,
          country: this.country,
          street: this.streetAddress,
          town_city: this.city,
          county_state: this.provinceRegionState,
          postal_zip_code: this.postalZipcode
        },
        fulfillment: {
          shipping_method: this.shippingOption
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: this.cardNumber,
            expiry_month: this.expMonth,
            expiry_year: this.expYear,
            cvc: this.ccv,
            postal_zip_code: this.billingPostalZipcode
          }
        }
      }
      this.$emit('capture-order', this.checkout.id, newOrder)
    }
  },
  computed: {
    selectedShippingPrice() {
      return ( this.shippingOptionsById[this.shippingOption] && this.shippingOptionsById[this.shippingOption].price.formatted_with_code ) || '----'
    }
  }
}
</script>
