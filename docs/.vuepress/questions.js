const javascript = [
  {
    title: '1. Name two programming paradigms important for JavaScript developers.',
    slug: '_1-name-two-programming-paradigms-important-for-javascript-developers',
    url: '/javascript/#_1-name-two-programming-paradigms-important-for-javascript-developers',
    difficulty: 'easy',
    categories: ['nocomputer', 'nowhiteboard'],
  }
]

const questions = {
  javascript
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomQuestion = (questionRequest) => {
  if (!questionRequest || !questionRequest.language) {
    console.error('Invalid Parameters provided.')
  }
  return new Promise((resolve, reject) => {
    if (!questions[questionRequest.language]) {
      reject('Invalid language provided for question')
    }

    let filteredQuestions = JSON.parse(JSON.stringify(questions[questionRequest.language]))

    if (questionRequest.difficulty && questionRequest.difficulty.length > 0) {
      filteredQuestions = filteredQuestions.filter(q1 => questionRequest.difficulty.filter(q2 => q2 === q1.difficulty).length > 0)
    }

    if (filteredQuestions.length === 0) {
      reject('No question found after difficulty filter applied')
    }

    if (questionRequest.categories && questionRequest.categories.length > 0) {
      filteredQuestions = filteredQuestions
        .filter(q1 => questionRequest.categories
          .filter(c1 => q1.categories
            .filter(c2 => c1 === c2)
          .length > 0)
        .length > 0)
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
  getRandomQuestion
}