<Question>

  <template slot='question'>
 
  ## Why shouldn't you use `<br />` tags for creating paragraphs?

  </template>

  <template slot='categories'>
  
  <Category slug='html'/>

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

  Accessibilty. Screen readers may not announce the content that is between consecutive `<br />` tags. 

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: br](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br#Accessibility_concerns)

  </template>

</Question>