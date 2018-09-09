<template lang='pug'>
  span(
    v-html='text'
    v-bind:data-key='name'
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
    'name'
  ],
  computed: {
    text: function () {
      if (this.name && categories.categoryText[this.name]) {
        return categories.categoryText[this.name]
      }
    }
  }
}
</script>
