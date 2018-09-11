# {🔭} BlockScoped

## Random coding questions by topic and difficulty

### 😇 Contributing new questions (and answers)

Each topic of questions has its own markdown directory and readme (listing) within the `docs` directory. Each individual question has its own .md file within the associated topic directory.

Any new question should have a new .md file created in the topic directory and should use the following template (markdown text can be utilized within all the named slots).

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

  [Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

  </template>

</Question>

```

Note: Categories and Difficulty content is the only exception to using markdown within slots. Categories and Difficulty should leverage existing vue components for rendering the filter correctly.

Current Categories and Difficulties:

```javascript

const topics = [
  {
    key: 'javascript',
    text: '⚛️ Javascript',
    buttonText: 'Javascript'
  },
  {
    key: 'csharp',
    text: '⚛️ C#',
    buttonText: 'C#'
  },
  {
    key: 'elm',
    text: '⚛️ Elm',
    buttonText: 'Elm'
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

*new categories, languages, and difficulties can be added at `docs/.vuepress/categories`*

### 💯 Question Requirements

Questions must satisfy the following criteria to be merged:

- [ ] Question described accurately within question slot
- [ ] At least one category, the language or topic, must be provided within the categories slot with the Category component
- [ ] One and only one difficulty is provided within the difficulty slot via Difficulty component
- [ ] Answer provided within the answer slot
- [ ] Linkable references are provided, and are provided within the reference slot
- [ ] Topic .json file updated within `docs/.vuepress/questionData/`

#### Note about updating questions.js

After questions are added, they must be added to `docs/.vuepress/questionsData/[corresponding .json file]` in order for the question finder to see them. This can be done manually via the format:

```javascript
  {
    "slug": "name-two-programming-paradigms-important-for-javascript-developers",
    "title": "Name two programming paradigms important for JavaScript developers.",
    "url": "/javascript/name-two-programming-paradigms-important-for-javascript-developers",
    "categories": ["javascript", "nocomputer", "nowhiteboard"],
    "difficulty": "easy"
  },
```

Until there is an automated build step, there is workaround ~~hack~~ script that can be ran against the dom (via dev tools 😞) for generating an entire .md files json that can be copy/pasted into the associated .json file:

```javascript
JSON.stringify(
    Array.from(document.querySelectorAll('h2:not(.answer)')).map((h, i) => {
      return {
        slug: h.id,
        title: h.outerText.replace('# ', ''),
        url: h.baseURI.replace('http://localhost:8080', ''),
        categories: Array.from(
          Array.from(document.getElementsByClassName('categories'))[
            i
          ].querySelectorAll('span')
        ).map(s => s.dataset.key),
        difficulty: Array.from(
          Array.from(document.getElementsByClassName('difficulty'))[
            i
          ].querySelectorAll('.rating')
        ).map(r => r.dataset.key)[0]
      }
    })[0]
  )
```
