<template lang='pug'>
.difficulty
 p
  strong Difficulty
 p(
   class='rating'
   v-bind:data-key='rating' 
   v-html='text'
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
    'rating'
  ],
  computed: {
    text: function () {
      if (categories.difficultyRatingText[this.rating]) {
        return categories.difficultyRatingText[this.rating]
      }
      return '😵 Not so sure about this one'
    }
  }
}
</script>

<style lang="scss">
.difficulty {
  
}
</style>