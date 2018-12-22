<Question>

  <template slot='question'>

  ## What does the `::placeholder` keyword refer to?

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

  `::placeholder` is a *pseudoelement* for the placeholder text of a form.

  ```html

  <input placeholder="Username">

  ```

  ```css

  input::placeholder {
    color: blue;
  }

  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)

  </template>

</Question>