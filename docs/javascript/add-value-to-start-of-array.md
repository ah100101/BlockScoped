<Question>

  <template slot='question'>

  ## Given an array of integers, how do you add a value to the beginning of the array?

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

  ```javascript
var array1 = [1,2,3,4,5]
array1.unshift(0)

console.log(array1) // [0,1,2,3,4,5]
```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

  </template>

</Question>
