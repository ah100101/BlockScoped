<Question>

  <template slot='question'>

  ## What is the difference between `==` and `===` ?

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

  `===` provides Strict Equality Comparison

  Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.

  `==` provides Abstract Equality Comparison

  Loose equality compares two values for equality, after converting both values to a common type.

  ```javascript
  var num = 0;
  var obj = new String('0');
  var str = '0';

  console.log(num === num); // true
  console.log(obj === obj); // true
  console.log(str === str); // true

  console.log(num === obj); // false
  console.log(num === str); // false
  console.log(obj === str); // false
  console.log(null === undefined); // false
  console.log(obj === null); // false
  console.log(obj === undefined); // false
  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

  </template>

</Question>