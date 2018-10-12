<Question>

  <template slot='question'>

  ## What will load faster on a web page: 1 external 100 kilobyte file or 4 external 25 kilobyte files?

  </template>

  <template slot='categories'>
  
  <Category slug='javascript'/>
  <Category slug='performance'/>
  <Category slug='nocomputer'/>
  <Category slug='nowhiteboard'/>  

  </template>

  <template slot='difficulty'>

  <Difficulty rating='medium' />  

  </template>

  <template slot='answer'>

  1 external 100 kilobyte file will load faster over an identical network connection. It's faster to make 1 round trip and retrieve a larger file than 4 round trips to load 4 smaller files.

  </template>

</Question>