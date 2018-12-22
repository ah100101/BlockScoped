<Question>

  <template slot='question'>

  ## What is *Specificity* and how is it determined?

  </template>

  <template slot='categories'>
  
  <Category slug='css'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

  *Specificity* is how a browser decides which CSS property values are the relevant and are applied to an element.

  *Specificity* is determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element.

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

  </template>

</Question>