<Question>

  <template slot='question'>

  ## How might you target an anchor element that is being pressed by a user?

  </template>

  <template slot='categories'>
  
  <Category slug='css'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='easy' />

  </template>

  <template slot='answer'>

  The `:active` pseudo-class can target an element that is being *activated* or pressed by a user.

  ```css

  a:active {
    color: blue;
  }
  
  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)

  </template>

</Question>