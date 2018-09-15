## What are some way to empty an array for all references

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
