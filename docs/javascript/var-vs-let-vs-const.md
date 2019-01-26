<Question>

  <template slot='question'>

## Explain the differences between `var`, `let`, and `const`

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

**var**

The scope of a variable declared with `var` is its current execution context, which is either the enclosing *function or, for variables declared outside any function, global*.

**let**

`let` allows you to declare variables that are *limited in scope to the block, statement, or expression* on which it is used.

**const**

Constants are *block-scoped*, much like variables defined using the `let` statement. The value of a constant *cannot change through re-assignment*, and it can't be redeclared.

The `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.

  </template>

  <template slot='reference'>

  `Var`: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

  `Let`: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

  `Const`: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

  </template>

</Question>