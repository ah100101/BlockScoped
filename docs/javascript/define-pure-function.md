<Question>

  <template slot='question'>

  ## What are the properties of a pure function?

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

For a function to be a pure function:

1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).

2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

  </template>

  <template slot='reference'>

  [Wikipedia](https://en.wikipedia.org/wiki/Pure_function)

  </template>

</Question>