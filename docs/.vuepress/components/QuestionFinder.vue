<template lang='pug'>
.question-finder
  p
    strong Select a programming language
  .programming-langs
    .programming-lang-column
      div(v-for='lang in languages.left')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": selectedLanguage === lang.key }'
          v-on:click='setLanguage(lang.key)'
          v-html='lang.buttonText'
          ) 
    .programming-lang-column
      div(v-for='lang in languages.center')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": selectedLanguage === lang.key }'
          v-on:click='setLanguage(lang.key)'
          v-html='lang.buttonText'
          ) 
    .programming-lang-column
      div(v-for='lang in languages.right')
        a(
          class='filter-button custom'
          v-bind:class='{ "selected": selectedLanguage === lang.key }'
          v-on:click='setLanguage(lang.key)'
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
      ) Get Question
  
</template>

<script>
import categories from '../categories.js'

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
      languages: {},
      categories: {},
      ratings: {},
      selectedLanguage: '',
      selectedDifficulties: [],
      selectedCategories: [],
      ratingsExpanded: false,
      categoriesExpanded: false
    }
  },
  mounted: function () {
    this.languages = divideArrayInto3(categories.languages)
    this.categories = divideArrayInto3(categories.categories)
    this.ratings = divideArrayInto3(categories.difficultyRatings)

    if (categories.languages.filter(l => l.key === this.$route.query.language).length > 0) {
      this.selectedLanguage = this.$route.query.language
      this.ratingsExpanded = true
    }

    if (this.$route.query.difficulty) {
      let ratingParams = this.$route.query.difficulty.split('|')
      console.log(ratingParams)
    }

    console.log(this.$route.query.language)
    console.log(this.$route.query.categories)
    console.log(this.$route.query.difficulty)
  },
  props: [
    
  ],
  computed: {
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
      return !!this.selectedLanguage
    }
  },
  methods: {
    setLanguage(lang) {
      this.selectedLanguage = lang
      this.ratingsExpanded = true
      this.updateParameters()
    },
    toggleDifficulty(rating) {
      if (this.difficultySet(rating)) {
        this.selectedDifficulties = this.selectedDifficulties.filter(r => r !== rating)
      } else {
        this.selectedDifficulties.push(rating)
        this.categoriesExpanded = true
      }

      this.updateParameters()
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

      this.updateParameters()
    },
    categorySet(category) {
      return this.selectedCategories.filter(r => r === category).length > 0
    },
    findQuestion() {
      if (this.selectionValid) {
        // TODO: get question and go there
      }
    },
    updateParameters() {
      let params = {
        language: this.selectedLanguage
      }

      if (this.selectedCategories && this.selectedCategories.length > 0) {
        params.categories = this.selectedCategories.join('|')
      }

      if (this.selectedDifficulties && this.selectedDifficulties.length > 0) {
        params.difficulty = this.selectedDifficulties.join('|')
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
.content {
  min-height: 100vh;
}
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