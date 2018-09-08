<template lang='pug'>
  span(v-html='text')
</template>

<script>
const categoryText = {
  javascript: '⚛️ Javascript',
  csharp: '⚛️ C#',
  computer: '💻 Computer required',
  nocomputer: '⛔️💻 No computer needed',
  whiteboard: '✏️ You may want a whiteboard',
  nowhiteboard: '⛔️✏️ No whiteboarding'
}

export default {
  data () {
    return { 

    }
  },
  props: [
    'name'
  ],
  computed: {
    text: function () {
      if (this.name && categoryText[this.name]) {
        return categoryText[this.name]
      }
    }
  }
}
</script>
