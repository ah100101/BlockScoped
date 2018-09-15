## How do you *break* from an `Array.prototype.forEach()`?

```javascript
var array1 = [1,2,3,4,5]

array.forEach(function() {
  throw new Error('Exit')
})
```

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach