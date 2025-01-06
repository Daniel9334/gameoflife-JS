// Configuration 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); //Create context 2D
const resolution = 8; //Size in pixels
const width = canvas.width / resolution;
const height = canvas.height / resolution;

// Board 2D
let grid = createEmptyGrid();

// Function to create an empty grid
function createEmptyGrid() {
  return new Array(width).fill(null).map(() => new Array(height).fill(0));
}

// Function that creates a new grid
function updateGrid() {
  const nextGrid = createEmptyGrid();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const neighbors = countNeighbors(grid, x, y);
      // Application of the Game of Life rules
      if (grid[x][y] === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGrid[x][y] = 0;
      } else if (grid[x][y] === 0 && neighbors === 3) {
        nextGrid[x][y] = 1;
      } else {
        nextGrid[x][y] = grid[x][y];
      }
    }
  }
  grid = nextGrid; 
}

// Function that counts live neighbors
function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const row = (x + i + width) % width;
      const col = (y + j + height) % height;
      //Sum of current neighbor values
      sum += grid[row][col];
    }
  }
  //The current element is not counted as its own neighbor
  sum -= grid[x][y]; 
  return sum;
}

// Function that draws a grid on the canvas using the "ctx" context
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (grid[x][y] === 1) {
        ctx.fillStyle = "#000"; // Living cel
      } else {
        ctx.fillStyle = "#fff"; // Dead cell
      }
      //Drawing cells in a rectangle
      ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
    }
  }
}

let animationId;

function startGame() {
  updateGrid();
  drawGrid();
  animationId = requestAnimationFrame(startGame);
}

function stopGame() {
  cancelAnimationFrame(animationId);
}

function clearGame() {
  grid = createEmptyGrid();
  drawGrid();
}

// Function that randomly fills the grid
function randomize() {
  grid = new Array(width)
    .fill(null)
    .map(() =>
      new Array(height).fill(null).map(() => Math.floor(Math.random() * 2))
    );
  drawGrid();
}

drawGrid();
