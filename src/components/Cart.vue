<template>
  <div class="mw7 center">
    <div v-if="cart" class="cart-container center">
        <h2 class="tracked ttu gray flex justify-between">
          Cart ({{cart.total_items}})
          <span class="flex flex-column f7">
            <span>
              subtotal: ${{cart.subtotal.formatted_with_code}}
            </span>
          </span>
        </h2>
        <ul v-if="cart.total_items > 0" class="w-100 list-reset ma0 pv0 ph4">
          <line-item v-for="item of cart.line_items" :item="item" @remove-item-from-cart="$emit('remove-item-from-cart', $event)"/>
        </ul>
        <p v-else class="f7 tracked">Your cart is empty</p>
    </div>
    <p v-else class="center">
      Loading Cart...
    </p>
  </div>
</template>

<script>
import LineItem from './LineItem'
export default {
  name: 'cart',
  props: ['cart'],
  components: {
    LineItem
  }
}
</script>
