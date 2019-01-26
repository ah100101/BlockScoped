<Question>

  <template slot='question'>

  ## What is the output of the following?

  ```js
  var obj1 = {
    value: 1
  }

  obj1.__proto__.value = 2

  console.log(obj1.value) // ?
  ```

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

  > 1

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

  </template>

</Question>