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
import categories from '../categories.js'
import questions from '../questions.js'

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

      if (!params.topics) {
        this.$router.push({
          path: '/quiz/'
        })
      } else {
        let selectedTopics = []
        let selectedDifficulty = []
        let selectedCategories = []

        if (!params.topics.filter) {
          params.topics = [params.topics]
        }
        
        selectedTopics = categories.topics.filter(t => params.topics.filter(p => p === t.key).length > 0)

        if (params.difficulty) {
          if (!params.difficulty.filter) {
            params.difficulty = [params.difficulty]
          }

          selectedDifficulty = categories.difficultyRatings.filter(t => params.difficulty.filter(p => p === t.key).length > 0)
        }

        if (params.categories) {
          if (!params.categories.filter) {
            params.categories = [params.categories]
          }

          selectedCategories = categories.categories.filter(t => params.categories.filter(p => p === t.key).length > 0)
        }

        let state = this

        questions.getRandomQuestion({
          topics: selectedTopics,
          categories: selectedCategories,
          difficulty: selectedDifficulty,
        })
        .then(result => {
          if (result && result.url) {
            window.quiz.push(result)
            state.$router.push({
              path: result.url,
              query: state.getParameters()
            })
          }
        })
        .catch(error => {
          console.debug(error)
          // TODO handle no results
          // state.noResults = true
        })
      }
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