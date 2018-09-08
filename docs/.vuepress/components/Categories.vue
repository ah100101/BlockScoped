<template lang='pug'>
.categories
 p
  strong Categories
 slot
  
</template>

<script>
const areasText = {
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
    'areas'
  ],
  computed: {
    text: function () {
      console.debug(this.areas)
      if (!this.areas || this.areas.length === 0) {
        return '😕 None'
      }

      let mappedText = this.areas
        .filter(key => !!areasText[key])
        .map(key => {
          return areasText[key]
        })
      
      if (!mappedText || mappedText.length === 0) {
        return '😕 None'
      }

      return mappedText.join(' ')
    }
  }
}
</script>

<style lang="scss">
.categories {
  
}
</style>