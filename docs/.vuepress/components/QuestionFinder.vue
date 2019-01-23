<template lang='pug'>
.question-finder
  p
    strong Select a programming topic
  .programming-langs
    .programming-lang-column
      div(v-for='lang in topics.left')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": isTopicSelected(lang.key) }'
          v-on:click='toggleTopic(lang.key)'
          v-html='lang.buttonText'
          ) 
    .programming-lang-column
      div(v-for='lang in topics.center')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": isTopicSelected(lang.key) }'
          v-on:click='toggleTopic(lang.key)'
          v-html='lang.buttonText'
          ) 
    .programming-lang-column
      div(v-for='lang in topics.right')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": isTopicSelected(lang.key) }'
          v-on:click='toggleTopic(lang.key)'
          v-html='lang.buttonText'
          ) 
  p
    a(
      class='toggle'
      v-on:click='ratingsExpanded = !ratingsExpanded'
      v-html='filterRatingsText'
      )
  transition(name='fade')
    .question-categories(v-show='ratingsExpanded')
      .question-category-column
        div(v-for='rating in ratings.left')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": difficultySet(rating.key) }'
            v-on:click='toggleDifficulty(rating.key)'
            v-html='rating.buttonText'
            ) 
      .question-category-column
        div(v-for='rating in ratings.center')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": difficultySet(rating.key) }'
            v-on:click='toggleDifficulty(rating.key)'
            v-html='rating.buttonText'
            ) 
      .question-category-column
        div(v-for='rating in ratings.right')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": difficultySet(rating.key) }'
            v-on:click='toggleDifficulty(rating.key)'
            v-html='rating.buttonText'
            ) 
  p
    a(
      class='toggle'
      v-on:click='categoriesExpanded = !categoriesExpanded'
      v-html='filterCategoriesText'
    )
  transition(name='fade')
    .question-categories(v-show='categoriesExpanded')
      .question-category-column
        div(v-for='category in categories.left')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": categorySet(category.key) }'
            v-on:click='toggleCategory(category.key)'
            v-html='category.buttonText'
            ) 
      .question-category-column
        div(v-for='category in categories.center')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": categorySet(category.key) }'
            v-on:click='toggleCategory(category.key)'
            v-html='category.buttonText'
            ) 
      .question-category-column
        div(v-for='category in categories.right')
          a(
            class='filter-button custom'
            v-bind:class='{ "selected": categorySet(category.key) }'
            v-on:click='toggleCategory(category.key)'
            v-html='category.buttonText'
            )
  .finished
    a.find-button(
      v-bind:class='{ "disabled": !selectionValid }'
      v-on:click='findQuestion'
      ) Get a Question
  transition(name='fade')
    .warning.custom-block(v-show='noResults')
      p(class="custom-block-title")
        p 😭 No questions could be found with those filters 
  
</template>

<script>
import categories from '../categories.js'
import questions from '../questions.js'

const divideArrayInto3 = (arr) => {
  let dividedArray = {
    left: [],
    center: [],
    right: []
  }

  let chunkSize = Math.floor(arr.length / 3)
  let remainder = arr.length - (chunkSize * 3)
  
  dividedArray.left = arr.slice(0, chunkSize)
  dividedArray.center = arr.slice(chunkSize, chunkSize * 2)
  dividedArray.right = arr.slice(chunkSize * 2, chunkSize * 3)

  if (remainder > 0) {
    dividedArray.left.push(arr.slice(chunkSize * 3)[0])

    if (remainder > 1) {
      dividedArray.center.push(arr.slice(chunkSize * 3)[1])
    }
  }

  return dividedArray
}

export default {
  data () {
    return { 
      topics: {},
      difficulties: categories.difficultyRatings,
      allCategories: categories.categories,
      selectedTopics: [],
      selectedDifficulties: [],
      selectedCategories: [],
      ratingsExpanded: false,
      categoriesExpanded: false,
      noResults: false
    }
  },
  mounted: function () {
    this.topics = divideArrayInto3(categories.topics)

    let queryTopics = this.$route.query.topics

    if (!queryTopics) {
      queryTopics = []
    } else if (!queryTopics.filter) {
      queryTopics = [queryTopics]
    }

    if (!!queryTopics && queryTopics.length > 0 
      && categories.topics.filter(l => queryTopics.filter(t => t === l.key).length > 0).length > 0) {
        this.selectedTopics = queryTopics
        this.ratingsExpanded = true
    }

    if (this.$route.query.difficulty) {
      let difficultyParams = this.$route.query.difficulty.split('|')
      if (difficultyParams && difficultyParams.length > 0) {
        let validParams = difficultyParams.filter(rating => categories.isValidDifficulty(rating))

        if (validParams && validParams.length > 0) {
          this.selectedDifficulties = validParams
          this.categoriesExpanded = true
        }
      }
    }

    if (this.$route.query.categories) {
      let categoryParams = this.$route.query.categories.split('|')
      if (categoryParams && categoryParams.length > 0) {
        let validParams = categoryParams.filter(category => categories.isValidCategory(category))

        if (validParams && validParams.length > 0) {
          this.selectedCategories = validParams
        }
      }
    }
  },
  computed: {
    categories: function () {
      return divideArrayInto3(this.allCategories)
    },
    ratings: function () {
      return divideArrayInto3(this.difficulties)
    },
    filterRatingsText: function () {
      let text = 'Filter by question difficulty'
      if (this.ratingsExpanded) {
        return text + ' ↑'
      }
      return text + ' ↓'
    },
    filterCategoriesText: function () {
      let text = 'Filter by question categories'
      if (this.categoriesExpanded) {
        return text + ' ↑'
      }
      return text + ' ↓'
    },
    selectionValid: function () {
      return !!this.selectedTopics && this.selectedTopics.length > 0
    }
  },
  methods: {
    selectTopic(topic) {
      if (this.selectedTopics.filter(t => t === topic) <= 0) {
        this.selectedTopics.push(topic)
        this.ratingsExpanded = true
      }
    },
    deselectTopic(topic) {
      this.selectedTopics = this.selectedTopics.filter(t => t !== topic)
    },
    filterDifficultiesByTopic(topic) {
      let state = this
      questions.getTopicsDifficulties(this.selectedTopics)
        .then(values => {
          state.difficulties = categories.difficultyRatings.filter(d => values.filter(v => v === d.key).length > 0)
        })
        .catch(error => {
          console.debug(error)
          state.difficulties = categories.difficultyRatings
        })
    },
    filterCategoriesByTopic(topic) {
      let state = this
      questions.getTopicsCategories(this.selectedTopics)
        .then(values => {
          state.allCategories = categories.categories.filter(c => values.filter(v => v === c.key).length > 0)
        })
        .catch(error => {
          console.debug(error)
          state.allCategories = categories.categories
        })
    },
    toggleTopic(lang) {
      if (this.isTopicSelected(lang)) {
        this.deselectTopic(lang)
      } else {
        this.selectTopic(lang)
      }
      this.filterDifficultiesByTopic(lang)
      this.filterCategoriesByTopic(lang)
    },
    isTopicSelected(lang) {
      return this.selectedTopics.filter(t => t === lang).length > 0
    },
    toggleDifficulty(rating) {
      if (this.difficultySet(rating)) {
        this.selectedDifficulties = this.selectedDifficulties.filter(r => r !== rating)
      } else {
        this.selectedDifficulties.push(rating)
        this.categoriesExpanded = true
      }
    },
    difficultySet(rating) {
      return this.selectedDifficulties.filter(r => r === rating).length > 0
    },
    toggleCategory(category) {
      if (this.categorySet(category)) {
        this.selectedCategories = this.selectedCategories.filter(r => r !== category)
      } else {
        this.selectedCategories.push(category)
      }
    },
    categorySet(category) {
      return this.selectedCategories.filter(r => r === category).length > 0
    },
    findQuestion() {
      if (!window.quiz) {
        window.quiz = []
      }
      let state = this
      if (this.selectedTopics.length > 0) {
        questions.getRandomQuestion({
          topics: this.selectedTopics,
          categories: this.selectedCategories,
          difficulty: this.selectedDifficulties,
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
          state.noResults = true
        })
      }
    },
    getParameters() {
      let params = {
        topics: this.selectedTopics
      }

      if (this.selectedCategories && this.selectedCategories.length > 0) {
        params.categories = this.selectedCategories.join('|')
      }

      if (this.selectedDifficulties && this.selectedDifficulties.length > 0) {
        params.difficulty = this.selectedDifficulties.join('|')
      }

      return params
    }
  }
}
</script>

<style lang="scss">
.question-finder {
  
  .programming-langs, .question-categories {
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .programming-lang-column, .question-category-column {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    text-align: center;
    
    .filter-button {
      display: inline-block;
      width: 100%;
      color: #fff;
      background-color: #4eb7c9;
      padding: 0.5rem 1.3rem;
      margin: .25rem;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.1s ease;
      box-shadow: 0 2px 0 #3c93a2;
      top: 2px;
    }

    .filter-button.disabled {
      opacity: .5;
      cursor: not-allowed;
      text-decoration: none;
      border-bottom: 0px;
    }

    .filter-button:hover:not(.disabled) {
      text-decoration: none;
    }

    .filter-button.selected {
      background-color: #62d0e3;
      box-shadow: none;
      top: 0px;
      transition: all ease 0.2s;
    }
  }

  .finished {
    width: 100%;
    text-align: center;
    border-top: 1px solid #eaecef;

    a.find-button {
      margin: 2rem;
      display: inline-block;
      min-width: 33%;
      color: #fff;
      background-color: #4eb7c9;
      padding: 0.5rem 1.3rem;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      text-decoration: none;
    }

    a.find-button:hover {
      background-color: #62d0e3;
    }

    a.find-button.disabled {
      opacity: .5;
      cursor: not-allowed;
    }
  }

  a.toggle {
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 419px) {
    .programming-langs, .question-categories {
      flex-direction: column;
      align-items: center;
    }

    .programming-lang-column, .question-category-column {
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>