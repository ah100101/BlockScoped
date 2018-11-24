## What's a problem that may come from skipping a heading in your content?

For example:

```html

<h1>level 1</h1>
<h2>Level 2</h2>
<h4>Level 4</h4>

```

> Screen readers can jump from heading to heading which may create an issue for accessibility.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Navigation

<Question>

  <template slot='question'>

  ## 

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



  </template>

  <template slot='reference'>

  [Mozilla](url)

  </template>

</Question>