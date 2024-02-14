// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  console.log(random)
  if (random === value) {
    resolve(`${random} is correct`)
  } else {
    reject('wrong number')
  }
})

console.log(promise)

promise
.then((data) => console.log(data))
.catch((err) => console.log(err))
