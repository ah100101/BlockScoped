const countTextOptions = [
  `No questions answered 😭`,
  ` question answered 😁`,
  ` questions answered 🎉`,
  ` questions answered 🎉`,
  ` questions answered 🎉`,
  ` questions answered 🎉`,
  ` questions answered 🎊`,
  ` questions answered 🎊`,
  ` questions answered 🎊`,
  ` questions answered 🎊`,
  ` questions answered 🎊`,
  ` questions answered 🏆`,
  ` questions answered 🏆`,
  ` questions answered 🏆`,
  ` questions answered 🏆`,
  ` questions answered 🏆`,
  ` questions answered 😣`,
  ` questions answered 😣`,
  ` questions answered 😣`,
  ` questions answered 😣`,
  ` questions answered 😣`,
  ` questions answered 🔥`,
  ` questions answered 🔥`,
  ` questions answered 🔥`,
  ` questions answered 🔥`,
  ` questions answered 🔥`,
  ` questions answered 🍰`,
  ` questions answered 🍰`,
  ` questions answered 🍰`,
  ` questions answered 🍰`,
  ` questions answered 🍰`,
]

const defaultText = `questions answered 💯`

const getCountText = (count) => {
  if (!count) {
    return countTextOptions[0]
  }

  if (count > countTextOptions.length - 1) {
    return `${count} ${defaultText}` 
  }

  return `${count} ${countTextOptions[count]}`
}

export default {
  getCountText
}