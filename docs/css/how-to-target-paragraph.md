<Question>

  <template slot='question'>

  ## Given the HTML below, how might you target only the paragraph with 'Luke Skywalker'?

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

  ```html

  <div>
    <p>Luke Skywalker</p>
    <p>Darth Vadar</p>
  </div>
  <div>
    <div>Yoda</div>
    <p>Obi-wan</p>
  </div>

  ```

  ```css

  p:first-child {
    color: blue;
  }

  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)

  </template>

</Question>