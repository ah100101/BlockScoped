<template lang='pug'>
.difficulty
 p
  strong Difficulty
 p(v-html='text')
  
</template>

<script>
const ratings = {
  easy: '😅 Easy',
  medium: '🤔 Medium',
  hard: '😨 Hard',
  impossible: '☠️ Impossible',
  unknown: '😵 Not so sure about this one'
}

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
      if (ratings[this.rating]) {
        return ratings[this.rating]
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