//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async () => {
  return 'Anybody here?'
}

async function someFunc() {
  const result = await example()
  console.log(result)
  console.log('Guess not, lol')
}

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['I', 'have', 'an apple'] },
  { userId: 2, articles: ['I', 'have', 'a', 'pen'] },
  { userId: 3, articles: ['apple', 'pen'] },
]

const getData = async () => {
  try {
    const user = await getUser('john')
    const articles = await getArticles(user.id)
    console.log(articles)
  } catch (error) {
    console.log(error)
  }
}
getData()
// getUser('susan')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`No such user with name : ${name}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if (userArticles) {
      return resolve(userArticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  })
}
