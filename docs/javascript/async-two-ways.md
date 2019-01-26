<Question>

  <template slot='question'>

  ## What are two ways to load an external script asynchronously on a web page?

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

  1. Load the script with the `async` script attribute

  ```html
  <script src="async-script.js" async></script>
  ```

  2. Dynamically add the script to the DOM via `document.createElement`

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

  </template>

</Question>