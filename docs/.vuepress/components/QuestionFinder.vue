<template lang='pug'>
.question-finder
  p
    strong Select a programming language
  .programming-langs
    .programming-lang-column
      div 
        a(class='filter-button custom') Javascript
    .programming-lang-column
      div 
        a(class='filter-button custom') C#
    .programming-lang-column
      div 
        a(class='filter-button custom') Elm
  p
    strong Filter by question categories
  
</template>

<script>

export default {
  data () {
    return { 
      
    }
  },
  props: [
    
  ],
  computed: {

  }
}
</script>

<style lang="scss">
.question-finder {
  
  .programming-langs {
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .programming-lang-column {
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
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #3badc0;
      cursor: pointer;
    }
    
    .filter-button:hover {
      background-color: #60bece;
      text-decoration: none;
    }
  }

  @media (max-width: 419px) {
    .programming-langs {
      flex-direction: column;
      align-items: center;
    }

    .programming-lang-column {
      width: 100%;
      max-width: 100%;
      padding: .25rem;
    }
  }
}
</style>