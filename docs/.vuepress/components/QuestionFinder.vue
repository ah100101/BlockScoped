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
    strong Filter by question difficulty
  .question-categories
    .question-category-column
      div(v-for='rating in ratings.left')
        a(
          class='filter-button custom'
          v-html='rating.buttonText'
          ) 
    .question-category-column
      div(v-for='rating in ratings.center')
        a(
          class='filter-button custom'
          v-html='rating.buttonText'
          ) 
    .question-category-column
      div(v-for='rating in ratings.right')
        a(
          class='filter-button custom'
          v-html='rating.buttonText'
          ) 
  p
    strong Filter by question categories
  .question-categories
    .question-category-column
      div(v-for='category in categories.left')
        a(
          class='filter-button custom'
          v-html='category.buttonText'
          ) 
    .question-category-column
      div(v-for='category in categories.center')
        a(
          class='filter-button custom'
          v-html='category.buttonText'
          ) 
    .question-category-column
      div(v-for='category in categories.right')
        a(
          class='filter-button custom'
          v-html='category.buttonText'
          )
  
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
      selectedLanguage: '',
      languages: {},
      categories: {},
      ratings: {}
    }
  },
  mounted: function () {
    this.languages = divideArrayInto3(categories.languages)
    this.categories = divideArrayInto3(categories.categories)
    this.ratings = divideArrayInto3(categories.difficultyRatings)
  },
  props: [
    
  ],
  computed: {

  },
  methods: {
    setLanguage(lang) {
      this.selectedLanguage = lang
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
    
    .filter-button:hover:not(.disabled), .filter-button.selected {
      background-color: #62d0e3;
      box-shadow: none;
      text-decoration: none;
      top: 0px;
      transition: all ease 0.2s;
    }
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