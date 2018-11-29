<Question>

  <template slot='question'>

  ## Why would you set the `rel` attribute to `canonical` on a `<link>` tag?

  </template>

  <template slot='categories'>
  
  <Category slug='html'/> 

  </template>

  <template slot='difficulty'>

  <Difficulty rating='easy' />  

  </template>

  <template slot='answer'>

  Setting a link tag with the `rel` attribute set to `canonical` specifies that the tag's `href` value is the preferred document for search engines to help prevent duplicate content issues.

  For example, Jane Doe may have two contributor pages on a site. One page has her maiden name and another has her married name, Jane Smith. On `http://blockscoped.io/contributors/jane-doe` it may make sense to add the following link to the `<head>`.

  ```html

  <head>
    <link rel="canonical" href="http://blockscoped.io/contributors/jane-smith" />
  </head>

  ```

  </template>

  <template slot='reference'>

  [Mozilla Developer Network: Link Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)

  </template>

</Question>