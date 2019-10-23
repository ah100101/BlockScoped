<Question>

  <template slot='question'>

  ## Name 5 different types of for loops in Javascript, how they are different, and which one(s) may have the worst performance when iterating over an array?

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='performance' />
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='hard' />  

  </template>

  <template slot='answer'>

  1. `for` statement

```
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

  2. `do...while` statement

```
do
  statement
while (condition);
```

  3. `while` statement

```
while (condition)
  statement
```

  4. `for...in` statement

```
for (variable in object) {
  statements
}
```

  5. `for...of` statement

```
for (variable of object) {
  statement
}
```

`for...in` and `for...of` may have the worst performance.

It is better to use a traditional `for loop` with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object, such as adding custom properties or methods.

e.g.

```javascript
Array.prototype.forInProperty = 'not seen by standard for loop'

a = new Array();

a[0] = 'foo';
a[1] = 'bar';

for(x in a){
 console.log(x + ' = ' + a[x]);
}

// 0 = foo
// 1 = bar
// forInProperty = not seen by standard for loop

```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

  </template>

</Question>
