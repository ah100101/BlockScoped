<Question>

  <template slot='question'>

  ## What is an `at-rule`? Provide an example.

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

  An `at-rule` is a CSS rule that tells CSS how to behave. For example:

  `@media` tells the CSS to apply a specific style sheet based on the result of a media query.

  ```css

  @media screen and (min-width: 900px) {
    .card {
      padding: 1rem;
    }
  }

  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: @media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

  </template>

</Question>