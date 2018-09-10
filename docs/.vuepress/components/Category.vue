<template lang='pug'>
  span(
    v-html='text'
    v-bind:data-key='slug'
    )
</template>

<script>
import categories from '../categories.js'

export default {
  data () {
    return { 

    }
  },
  props: [
    'slug'
  ],
  computed: {
    text: function () {
      if (this.slug && categories.categoryText[this.slug]) {
        return categories.categoryText[this.slug]
      }
    }
  }
}
</script>
