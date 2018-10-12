<Question>

  <template slot='question'>

  ## Why might you want to load .js scripts at the bottom of the `<body>`?

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='performance'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>

  </template>

  <template slot='difficulty'>

  <Difficulty rating='easy' />  

  </template>

  <template slot='answer'>

  When a script is loaded at the bottom of the `<body>` it allows the rest of the HTML content to render to the user before stopping to load and execute the script.

  </template>

</Question>