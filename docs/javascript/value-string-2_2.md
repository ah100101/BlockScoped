<Question>

  <template slot='question'>

  ## What is the output of the following?

```javascript
var s1 = '2 + 2'
console.log(eval(s1)) // ?
```

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

  > `4`

  Primitives passed to eval are treated as source code

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

  </template>

</Question>