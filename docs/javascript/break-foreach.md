<Question>

  <template slot='question'>

  ## How do you *break* from an `Array.prototype.forEach()`?

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

  ```javascript
var array1 = [1,2,3,4,5]

array.forEach(function() {
  throw new Error('Exit')
})
```

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

  </template>

  <template slot='reference'>

  [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

  </template>

</Question>