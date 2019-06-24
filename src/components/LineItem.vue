<template>
  <div class="cart-container__line-item w-100 flex items-center justify-between pb2">
    <div class="w-auto pr1">
      <p class="tracked ttc f7">
        {{ `${item.name} - ${item.quantity} ${item.line_total.formatted_with_code}` }}
      </p>
    </div>
    <button class="dim b1 b--mid-gray outline-0 pointer pa2" @click="$emit('remove-item-from-cart', item.id)">
      Remove from Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "LineItem",
  props: [
    'item'
  ]
}
</script>
