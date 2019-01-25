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
    .find-options
      span(class='num-answered' v-html='countText')
    .find-options
      a(class='find' v-on:click='findMore()') Find another question
      a(class='find' v-on:click='startOver()') Start Over
</template>

<script>
import categories from '../categories.js'
import questions from '../questions.js'
import countText from '../countText.js'

export default {
  data() {
    return {
      showAnswer: false,
      quizCount: 0
    };
  },
  mounted: function () {
    if (!window.quiz) {
      window.quiz = []
    }

    this.quizCount = window.quiz.length
  },
  computed: {
    toggleText: function() {
      if (this.showAnswer) {
        return 'Hide Answer ↑'
      }
      return 'Show Answer ↓'
    },
    countText: function () {
      return countText.getCountText(this.quizCount)
    }
  },
  methods: {
    startOver() {
      window.quiz = []
      this.$router.push({
        path: '/quiz/'
      })
    },
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

        selectedTopics = categories.topics
          .filter(t => params.topics.filter(p => p === t.key).length > 0)
          .map(t => t.key)

        if (params.difficulty) {
          if (!params.difficulty.filter) {
            params.difficulty = [params.difficulty]
          }

          selectedDifficulty = categories.difficultyRatings
            .filter(t => params.difficulty.filter(p => p === t.key).length > 0)
            .map(t => t.key)
        }

        if (params.categories) {
          if (!params.categories.filter) {
            params.categories = [params.categories];
          }

          selectedCategories = categories.categories.filter(
            t => params.categories.filter(p => p === t.key).length > 0
          )
        }

        let state = this

        if (!window.quiz) {
          window.quiz = []
        }

        questions
          .getRandomQuestion({
            topics: selectedTopics,
            categories: selectedCategories,
            difficulty: selectedDifficulty
          })
          .then(result => {
            if (result && result.url) {
              window.quiz.push(result);
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
    },
    getParameters() {
      return {
        topics: this.$route.query.topics,
        difficulty: this.$route.query.difficulty,
        categories: this.$route.query.categories
      }
    }
  }
};
</script>

<style lang="scss">
// this sucks adding it here - need to add to global styles
.page-edit {
  margin-bottom: 3rem;
}

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
    padding: 0.5rem;
    background: #fff;
    border-top: 1px solid #eaecef;
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
    margin: .25rem;
  }

  a.find:hover {
    text-decoration: none;
    background-color: #60bece;
  }

  .find-options {
    width: fit-content;
    margin: 0 auto;
    padding: .25rem;
  }

  .num-answered {
    padding: 0 0.5rem;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>