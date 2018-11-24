
<Question>

  <template slot='question'>
 
  ## A `<button>` that displays an icon instead of text should also...?

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

  "... still have button text provided". This should be done to keep the button accessible since only having an icon makes the button difficult for screen readers to parse. Providing button text keeps the button accessible and the text can be hidden through other means.

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Icon_buttons)

  </template>

</Question>