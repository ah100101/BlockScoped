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
  .find-question
      a(class='find' v-on:click='findMore()') Find another question
      span(class='num-answered') 11 Questions Answered 🎉
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

      if (this.$route.query.topics) {
        params.topics = this.$route.query.topics
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

  .find-question {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 1;
    padding: .5rem;
    background: #fff;
  }

  .find {
    display: inline-block;
    font-size: 1rem;
    color: #fff;
    background-color: #4eb7c9;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #3badc0;
    font-weight: inherit;
  }
  
  a.find:hover {
    text-decoration: none;
    background-color: #60bece;
  }

  .num-answered {
    padding: 0 .5rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>