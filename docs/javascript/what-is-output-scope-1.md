<Question>

  <template slot='question'>

  ## What is the output of the following line?

  ```js
  var animal = 'dog';

  function getAnimal() {
    var animal = 'cat';
    return animal;
  }

  console.log(getAnimal()); // ?
  ```

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

  > cat

  </template>

</Question>