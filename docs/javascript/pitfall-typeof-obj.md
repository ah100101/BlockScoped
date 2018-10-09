<Question>

  <template slot='question'>

  ## What is a pitfall of the following:

```javascript
if (typeof obj1 === 'object')
```

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='hard' />  

  </template>

  <template slot='answer'>

  If obj1 is equal to `null` this will return `true`

  </template>

  <template slot='reference'>

  [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

  </template>

</Question>