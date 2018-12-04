<Question>

  <template slot='question'>

  ## What does setting `target="_blank"` on an `anchor` tag do when it is clicked?

  For example:

  ```html

  <a href="https://blockscoped.io" target="_blank"></a>

  ```

  </template>

  <template slot='categories'>
  
  <Category slug='html'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='easy' />  

  </template>

  <template slot='answer'>

  Clicking an `anchor` tag with `target` set to `_blank` will load the URL into a new browsing context when clicked. This can be either a tab or new window.

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

  </template>

</Question>