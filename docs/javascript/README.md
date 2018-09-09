## 1. Name two programming paradigms important for JavaScript developers.

<Categories>

<Category name='javascript'/>
<Category name='nocomputer'/>
<Category name='nowhiteboard'/>

</Categories>

<Difficulty rating='easy' />

<Answer>

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.

</Answer>

## 2. List examples of falsey javascript values.

<Categories>

<Category name='javascript'/>
<Category name='nocomputer'/>
<Category name='nowhiteboard'/>

</Categories>

<Difficulty rating='easy' />

<Answer>

```javascript
if (false)
if (0)
if ('')
if (null)
if (undefined)
if (NaN)
```

Reference: [Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

</Answer>

## 3. Explain what a *closure* is in Javascript and provide an example.

<Categories>

<Category name='javascript'/>
<Category name='nocomputer'/>
<Category name='nowhiteboard'/>

</Categories>

<Difficulty rating='medium' />

<Answer>

A *closure* is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

Reference: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

</Answer>

## 4. What is the difference between `==` and `===` ?

<Categories>

<Category name='javascript'/>
<Category name='nocomputer'/>
<Category name='nowhiteboard'/>

</Categories>

<Difficulty rating='easy' />

<Answer>

`===` provides Strict Equality Comparison

Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.

`==` provides Abstract Equality Comparison

Loose equality compares two values for equality, after converting both values to a common type.

```javascript
var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

Reference: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

</Answer>