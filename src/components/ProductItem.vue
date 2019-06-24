<template>
  <div class="products-container__product fl w-third pa1 flex flex-column justify-center">
    <div
      class="aspect-ratio aspect-ratio--5x8 bg-black-50"
      :style="{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundImage: `url(${product.media.source})`
      }"
    />
    <p class="tracked f7 flex justify-between items-center">
     {{ product.name }}
     <span>
     {{ product.price.formatted_with_code }}
     </span>
    </p>
    <button class="dim b1 b--mid-gray outline-0 pointer pa2" :disabled="product.is.sold_out" @click="$emit('add-product-to-cart', product.id)">
     {{ product.is.sold_out ? 'Sold Out' : 'Add to Cart' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
