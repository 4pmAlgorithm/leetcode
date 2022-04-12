// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

//1 04/11/2022 2:30pm - 


//Breath First Search
//BFS


function numIslands (grid){
    let num = 0;
    let obj = {}

    for(let i=0; i < grid.length;i++){

        for(let j=0; j < grid[i].length; j++){
             obj.row = i;
             obj.column = j;
             obj.value = grid[i][j]
             obj.right = grid[i][j+1];
             obj.down = grid[i+1][j];

            if( i > 0 && j > 0){
             obj.up = grid[i-1][j]
             obj.left = grid[i][j-1];
            }
        }
       
    }
    console.log(obj)
    return num
}


grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
numIslands(grid)