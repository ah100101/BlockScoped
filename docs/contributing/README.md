## Contributing 😇

BlockedScoped is 100% open sourced on [Github](https://github.com/ah100101/BlockScoped). New questions and revisions to existing questions can be done via pull request.

###  Contributing new questions (and answers)

Each topic of questions has its own markdown directory and readme (listing) within the `docs` directory of the project. Each individual question has its own Markdown (`.md`) file within the associated topic directory.

Any new question should have a new `.md` file created in the topic directory and should use the following template (Markdown text can be utilized within all the named slots).

::: tip The More You Know 🌈
BlockScoped is built on [VuePress](https://vuepress.vuejs.org/) which leverages Markdown for easy writing and Vue for its components and layout.
:::

```html

<Question>

  <template slot='question'>

  ## Question text here

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

  Answer text here

  </template>

  <template slot='reference'>

  [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

  </template>

</Question>

```

::: warning Note

Categories and difficulties are the only exceptions to using markdown within slots. A category or difficulty should leverage their associated Vue component for being rendered (example above)

:::

#### Specifying Categories and Difficulties

Category and difficulty components reference an existing list of objects (matched by `key`) for how they should be rendered.

Current categories and difficulties:

```javascript

const topics = [
  {
    key: 'javascript',
    text: '⚛️ Javascript',
    buttonText: 'Javascript'
  },
  {
    key: 'html',
    text: '🔨 HTML',
    buttonText: 'HTML'
  },
  {
    key: 'css',
    text: '📃 CSS',
    buttonText: 'CSS'
  }
]

const categories = [
  { 
    key: 'computer',
    text: '💻 Computer required',
    buttonText: 'Computer'
  },
  { 
    key: 'nocomputer',
    text: '⛔️ No computer needed',
    buttonText: 'No Computer'
  },
  { 
    key: 'whiteboard',
    text: '✏️ You may want a whiteboard',
    buttonText: 'Whiteboard'
  },
  { 
    key: 'nowhiteboard',
    text: '⛔️ No whiteboarding',
    buttonText: 'No Whiteboard'
  },
  {
    key: 'performance',
    text: '🚀 Performance',
    buttonText: 'Performance'
  }
]

const difficulties = [
  { 
    key: 'easy',
    text: '😅 Easy',
    buttonText: '😅 Easy'
  },
  { 
    key: 'medium',
    text: '🤔 Medium',
    buttonText: '🤔 Medium'
  },
  { 
    key: 'hard',
    text: '😨 Hard',
    buttonText: '😨 Hard'
  },
  { 
    key: 'unknown',
    text: '😵 Not so sure about this one',
    buttonText: '😵 Unknown'
  },
  { 
    key: 'impossible',
    text: '☠️ Impossible',
    buttonText: '☠️ Impossible'
  }
]
```
::: warning Note
New categories and difficulties can be added at `docs/.vuepress/categories`

New topics should be requested via Github [issue](https://github.com/ah100101/BlockScoped/issues/new?title=New+Topic+Request:[topic%20name]&labels=enhancement&assignee=ah100101) as there is a more complicated set up of steps required for adding a topic.
:::

### Adding new question metadata

Every topic has an associated `.json` file that contains metadata on every question. Every new question must have its `.json` file updated in order for it to be included in the question finder. 

These files are located in `docs/.vuepress/questionsData`

The format for one question should follow:

```javascript
  {
    // the formatted URL friendly name of the question
    "slug": "name-two-programming-paradigms-important-for-javascript-developers", 
    // the title displayed on the question
    "title": "Name two programming paradigms important for JavaScript developers.", 
    // the full url to the question
    "url": "/javascript/name-two-programming-paradigms-important-for-javascript-developers",
    // the categories associated with the question
    "categories": ["javascript", "nocomputer", "nowhiteboard"],
    // the difficulty of the question
    "difficulty": "easy"
  }
```

### 💯 Question Requirement Checklist

Questions must satisfy the following criteria to be merged:

:heavy_check_mark: Question described accurately within question slot  
:heavy_check_mark: The topic must be provided within the categories slot with the Category component  
:heavy_check_mark: One and only one difficulty is provided within the difficulty slot via Difficulty component  
:heavy_check_mark: Answer provided within the answer slot  
:heavy_check_mark: Linkable references are provided within the reference slot  
:heavy_check_mark: Topic `.json` file updated in `docs/.vuepress/questionData/`
