//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'http://192.168.0.103:5000/api/getSudokuGame'

console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// const getSudoku = async () => {
//   try {
//     const resp = await fetch(url)
//     return resp.json()
//   } catch (error) {
//     console.log(error)
//   }
// }
// getSudoku().then(data => console.log(data))
