const getTotalIsles = function (grid) {


  // write your code here
function generateRandomGrid(rows, cols, landProbability = 0.5) {
  const grid = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      
      row.push(Math.random() < landProbability ? 'L' : 'W');
    }
    grid.push(row);
  }

  const midRow = Math.floor(rows / 2);
  const midCol = Math.floor(cols / 2);
  if (grid[midRow][midCol] === 'W') {
    grid[midRow][midCol] = 'L';
  }
  if (grid[midRow + 1] && grid[midRow + 1][midCol] === 'W') {
    grid[midRow + 1][midCol] = 'L';
  }
  if (grid[midRow][midCol + 1] === 'W') {
    grid[midRow][midCol + 1] = 'L';
  }

  return grid;
}


const randomGrid = generateRandomGrid(5, 5);
console.log(randomGrid);

console.log("Number of Islands:", numIslands(randomGrid));


};

module.exports = getTotalIsles;
