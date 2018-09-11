<template lang='pug'>
.question-list
  .question-item(v-for='question in questionList')
    h2(
      v-html='question.title'
    )
    p(class="action")
      a(
        v-bind:href="question.url" 
        class="nav-link"
        ) Go to question →
    br
</template>  

<script>
import questions from '../questions.js'

export default {
  data () {
    return { 

    }
  },
  props: [
    'topic'
  ],
  components: {

  },
  computed: {
    questionList: function () {
      if (!this.topic) {
        console.error('Invalid topic')
      }
      return questions.getQuestionList(this.topic)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.question-list {

}
</style>