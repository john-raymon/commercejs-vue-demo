<template>
  <div class="cart-container__line-item w-100 flex items-center justify-between pb2">
    <div class="w-auto pr1">
      <p class="tracked ttc f7">
        {{item.product_name}} - ({{item.quantity}})
      </p>
    </div>
    <p class="pa0 ma0">
      ${{item.line_total.formatted_with_code}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'CheckoutItem',
  props: [
    'item'
  ]
}
</script>
