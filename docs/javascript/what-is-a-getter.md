<Question>

  <template slot='question'>

  ## What is a `getter`? Provide an example.

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

A `getter` binds an object property to a function that will be called when that property is looked up.

Example:

```js

var person = {
  firstName: 'John',
  lastName: 'Smith',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(person.fullName); // 'John Smith'

```

  </template>

  <template slot='reference'>

  [Mozilla: get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

  </template>

</Question>