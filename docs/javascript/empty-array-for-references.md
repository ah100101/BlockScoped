<Question>

  <template slot='question'>

  ## What are some ways to empty an array that will also update any variables that reference it?

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

**Method 1**
```javascript
var array1 = [1,2,3,4,5]
var array2 = array1

array1.length = 0

console.log(array2) // []
```

**Method 2**
```javascript
var array1 = [1,2,3,4,5]
var array2 = array1

while(array1.length > 0) {
  array1.pop()  
}

console.log(array2) // []
```

**Method 3**
```javascript
var array1 = [1,2,3,4,5]
var array2 = array1

array1.splice(0, array1.length)

console.log(array2) // []
```

  </template>

  <template slot='reference'></template>

</Question>