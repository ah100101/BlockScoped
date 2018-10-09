<Question>

  <template slot='question'>

  ## What is the output of the following?

  ```javascript
var array1 = [1,2,3,4,5]

array1.forEach(function(i) {
  i = i + 1
})

console.log(array1) // ?
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

> `[1,2,3,4,5]`

  </template>

  <template slot='reference'>

  [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

  </template>

</Question>
