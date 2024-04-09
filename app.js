/*!SECTION
Create a function that takes a grid of $ and - where each ($) represents a mine.
and each (-) represents a mine-free spot.

return an array where each ($) is replaced by a digit indicating the number of mines immediatly  mine adjacent to the spot

mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
])

output ->[
    ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "2", "2", "2", "0"],
    ["0", "1", "$", "1", "0"]
]
*/

const mineGrid = (arr) => {
    //NOTE - Create a helper function that accesses the element position (y,x) if the y index is valid or exists
    // i want to return arr[y][x]; otherwise return null (this will prevent accessing undefined elements and to avoid errors)
    const checkAccess = (y, x) => arr[y] ? arr[y][x] : null
    //NOTE - Create a helper function that calculates the number of adjacent mines around the cell at position (y,x)
const getMine = (y, x) => {
    //NOTE - an array is constructed with elements representing the content of adjacent cells,
    //we are going to use checkAccess for each of the eight possible adjacent positions. 
    return [
        checkAccess(y+1, x), //checks the cell directly below the current (y, x)
        checkAccess(y+1, x+1), //checks the cell diagonally below and to the right of the current cell
        checkAccess(y+1, x-1), //checks the cell diagonally below and to the left of the current cell
        checkAccess(y, x+1), //checks the cell directly to the right of the current cell
        checkAccess(y, x-1), //checks the cell directly to the left of the current cell 
        checkAccess(y-1, x), //check the cell directly above the current cell
        checkAccess(y-1,x+1), //checks the cell diagonally above and to the right of the current cell
        checkAccess(y-1,x-1) //checks the cell diagonally above and to the left of the current cell
        //NOTE - construct an array of values that represent the contents of the cells adjacent, after the contructing
        //of the array, we will use .filter method, to keep only those elements that are mines ("$")
    ]  .filter(adjCell => adjCell === "$").length.toString()
  }
  return arr.map((r,y) => r.map((c,x) === "-" ? getMine(x,y) : c ))
}