// You can create a json from a question md file by running the following in the dev tools console:
const createJson = () => {
  JSON.stringify(
    Array.from(document.querySelectorAll('h2:not(.answer)')).map((h, i) => {
      return {
        slug: h.id,
        title: h.outerText.replace('# ', ''),
        url: h.baseURI.replace('http://localhost:8080', '') + '#' + h.id,
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
    })
  )
}

import javascript from './questionData/javascript.json'
import csharp from './questionData/csharp.json'
import css from './questionData/css.json'
import datastructures from './questionData/datastructures.json'
import html from './questionData/html.json'

const questions = {
  javascript,
  csharp,
  css,
  datastructures,
  html
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getQuestionList = topicKey => {
  if (!topicKey || !questions[topicKey]) {
    console.error('Invalid topicKey')
    return
  }

  return questions[topicKey]
}

const getRandomQuestion = questionRequest => {
  if (!questionRequest || !questionRequest.topics || questionRequest.topics.length <= 0) {
    console.error('Invalid Parameters provided.')
  }
  return new Promise((resolve, reject) => {
    let validTopics = questionRequest.topics.filter(t => !!questions[t])

    if (!validTopics && validTopics.length <= 0) {
      reject('Invalid language provided for question')
    }

    let filteredQuestions = validTopics.reduce((acc, topic) => {
      return acc.concat(JSON.parse(JSON.stringify(questions[topic])))
    }, [])

    if (questionRequest.difficulty && questionRequest.difficulty.length > 0) {
      filteredQuestions = filteredQuestions.filter(
        q1 =>
          questionRequest.difficulty.filter(q2 => q2 === q1.difficulty).length > 0
      )
    }

    if (filteredQuestions.length === 0) {
      reject('No question found after difficulty filter applied')
    }

    if (questionRequest.categories && questionRequest.categories.length > 0) {
      filteredQuestions = filteredQuestions.filter(
        q1 =>
          questionRequest.categories.filter(
            c1 => q1.categories.filter(c2 => c1 === c2).length > 0
          ).length > 0
      )
    }

    if (filteredQuestions.length === 0) {
      reject('No question found after category filter applied')
    }

    const randomIndex = getRandomInt(0, filteredQuestions.length - 1)
    const question = filteredQuestions[randomIndex]

    if (question) {
      resolve(question)
    }

    reject('No question found.')
  })
}

export default {
  getRandomQuestion,
  getQuestionList
}
