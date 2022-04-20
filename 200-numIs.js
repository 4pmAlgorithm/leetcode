// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

//2 04/13/2022 5:37pm - 
//1 04/11/2022 2:30pm - 


//Breath First Search
//BFS

function numIslands(grid) {
    if (grid.length === 0 || grid === null) return 0;

    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) { //i=row
        for (let j = 0; j < grid[i].length; j++) { //j=column
            if (grid[i][j] === "1") {
                islandCount++;
                findIsland(i, j, grid) //helper func
            }
        }
    }

    function findIsland(row, col, grid) {
        if (row < 0 || 
            row >= grid.length || 
            col < 0 || 
            col >= grid[row].length || 
            grid[row][col] == "0") {
            return;
        }
        grid[row][col] = "0"
        findIsland(row - 1, col, grid);  //up
        findIsland(row + 1, col, grid);  //down
        findIsland(row, col + 1, grid);  //right 
        findIsland(row, col - 1, grid)   //left
    }
    return islandCount;
}


// function numIslands (grid){
//     let num = 0;
//     let obj = {}

//     for(let i=0; i < grid.length;i++){

//         for(let j=0; j < grid[i].length; j++){
//              obj.row = i;
//              obj.column = j;
//              obj.value = grid[i][j]
//              obj.right = grid[i][j+1];
//              obj.down = grid[i+1][j];

//             if( i > 0 && j > 0){
//              obj.up = grid[i-1][j]
//              obj.left = grid[i][j-1];
//             }
//         }
       
//     }
//     console.log(obj)
//     return num
// }


grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
numIslands(grid)