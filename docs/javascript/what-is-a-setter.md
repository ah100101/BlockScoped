<Question>

  <template slot='question'>

  ## What is a `setter`? Provide an example.

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

A `setter` binds an object property to a function to be called when there is an attempt to set that property.

Example:

```js

var timeSheet = {
  history: [],
  set currentTask(task) {
    this.history.push(task)
  }
}

timeSheet.currentTask = { 
  Description: 'Added Javascript Question to Blockscoped',
  HoursSpent: .5
}

timeSheet.currentTask = {
  Description: 'Created Pull Request for New Question',
  HoursSpent: .25
}

console.log(timeSheet.history)

/*

Output:

(2) [{…}, {…}]
0: {Description: "Added Javascript Question to Blockscoped", HoursSpent: 0.5}
1: {Description: "Created Pull Request for New Question", HoursSpent: 0.25}

*/

```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

  </template>

</Question>