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

    ]
}
}