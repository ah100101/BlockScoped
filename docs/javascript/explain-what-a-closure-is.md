<Question>

  <template slot='question'>

  ## Explain what a *closure* is in Javascript and provide an example.

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

  A *closure* is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

  ```javascript
  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  var add5 = makeAdder(5);
  var add10 = makeAdder(10);

  console.log(add5(2));  // 7
  console.log(add10(2)); // 12
  ```

  </template>

  <template slot='reference'>

  [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

  </template>

</Question>