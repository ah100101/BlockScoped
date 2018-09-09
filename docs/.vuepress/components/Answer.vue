<template lang='pug'>
.answer
  p(class='toggle')
    a(
      v-on:click='showAnswer = !showAnswer'
      v-html='toggleText'
      )
  transition(name='fade')
    .answer-text(v-if='showAnswer')
      h2(class='answer') Answer
      slot
      a(v-on:click='findMore()') Find another question
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
  },
  methods: {
    findMore() {
      let params = {}

      if (this.$route.query.language) {
        params.language = this.$route.query.language
      }

      if (this.$route.query.difficulty) {
        params.difficulty = this.$route.query.difficulty
      }

      if (this.$route.query.categories) {
        params.categories = this.$route.query.categories
      }

      this.$router.push({
        path: '/quiz/',
        query: params
      })
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