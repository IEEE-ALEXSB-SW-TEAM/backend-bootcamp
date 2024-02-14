# Workshop 2:
You have witnessed the suduko api we just used.
Now that you have access to this api, 3 of your
friends want to try out sudoku and asked if you
could help. 
Api gateway 
https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty}}}
Make sure you are connected to the internet
- Use promises, async, await, fetch to get 3 
sudoku objects, while pushing them to an array 
- ⁠Create a function that gets an index and 
outputs only the sudoku game without the solution
- ⁠Create a function that gets an index and 
outputs the sudoku solution
