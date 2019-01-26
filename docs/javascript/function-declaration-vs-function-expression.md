<Question>

  <template slot='question'>

  ## What is the difference between a `function declaration` and a `function expression`?

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='easy' />

  </template>

  <template slot='answer'>

  A `function declaration` defines a function at parse time and is hoisted, whereas a `function expression` defines a function at run time.

  1. `function declartion`

  ```js

  greeting();
  function greeting () {
    console.log('hello there');
  }

  ```
  Output:

  > hello there

  2. `function expression`

  ```js

  greeting();
  var greeting = function () {
    console.log('hello there');
  }

  ```
  Output:

  > Uncaught TypeError: greeting is not a function

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

  [Mozilla Developer Network: function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)

  </template>

</Question>