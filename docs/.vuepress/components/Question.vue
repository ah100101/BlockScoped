<template lang='pug'>
.question
  slot(name='question')
  categories
    slot(name='categories')
  slot(name='difficulty')
  answer
    slot(name='answer')
    h4 Reference:
    slot(name='reference')
</template>  

<script>
import categories from './Categories.vue'
import answer from './Answer.vue'

export default {
  data () {
    return { 

    }
  },
  components: {
    categories,
    answer
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
.question {

}
</style>