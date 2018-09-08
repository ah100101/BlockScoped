<template lang='pug'>
.answer
  p(class='toggle')
    a(
      v-on:click='showAnswer = !showAnswer'
      v-html='toggleText'
      )
  transition(name='fade')
    .answer-text(v-show='showAnswer')
      h2(class='answer') Answer
      slot
      router-link(to='/') Find another question
</template>  

<script>
export default {
  data () {
    return { 
      showAnswer: false
    }
  },
  computed: {
    toggleText: function () {
      if (this.showAnswer) {
        return 'Hide Answer ↑'
      }
      return 'Show Answer ↓'
    }
  }
}
</script>

<style lang="scss">
.answer {
  a {
    cursor: pointer;
  }
  
  .toggle {
    font-size: 1.35rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>