API = "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}"

var sudokuGames = []

const getSudoku = async () => {
    try {
      const resp = await fetch(API)
      return resp.json()
    } catch (error) {
      console.log(error)
    }
  }

// // Three Times
// getSudoku().then( (sudokuObject) => {
//     sudokuGames.push(sudokuObject)
//     getSudoku().then( (sudokuObject) => {
//         sudokuGames.push(sudokuObject)
//         getSudoku().then( (sudokuObject) => {
//             sudokuGames.push(sudokuObject)
//             console.log(sudokuGames)
//         })
//     })
// })

// n times
const getNSudokus = (n) => {
    if (n<=0){
        console.log(sudokuGames)
        return
    }
    getSudoku().then( (sudokuObject) => {
        sudokuGames.push(sudokuObject)
        getNSudokus(n-1)
    })
}

getNSudokus(3)
