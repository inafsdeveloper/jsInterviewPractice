class DungeonSolver {
  constructor(dungeon) {
    this.dungeon = dungeon;
    this.rows = dungeon.length;
    this.cols = dungeon[0].length;
    this.visited = new Set();
    this.start = this.findCell("S");
    this.end = this.findCell("E");
    this.path = [];
    this.solvedGrid = [];
    this.initPath();
  }

  initPath() {
    for (let r = 0; r < this.rows; r++) {
      let row = [];
      let grid = [];
      for (let c = 0; c < this.cols; c++) {
        grid[c] = this.dungeon[r][c];
        if (this.dungeon[r][c] === "#") {
          row[c] = 1;
        } else {
          row[c] = 0;
        }
      }
      this.path.push(row);
      this.solvedGrid.push(grid);
    }
  }

  getNeighbours(x, y) {
    let neighbors = [
      { x: x - 1, y: y },
      { x: x, y: y - 1 },
      { x: x, y: y + 1 },
      { x: x + 1, y: y },
    ];
    return neighbors;
  }

  isValid(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.cols;
  }
  isPassable(x, y) {
    return (
      this.isValid(x, y) &&
      (this.dungeon[x][y] === "." || this.dungeon[x][y] === "E")
    );
  }

  findCell(ch) {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.dungeon[r][c] === ch) {
          return { x: r, y: c };
        }
      }
    }

    return null;
  }

  printSolvedDungeon() {
    let stack = [];

    let r = this.end.x;
    let c = this.end.y;
    stack.push({ x: r, y: c });
    while (this.path[r][c] > 1) {
      for (const neighbor of this.getNeighbours(r, c)) {
        var nX = neighbor.x;
        var nY = neighbor.y;

        if (
          this.isValid(nX, nY) &&
          (this.dungeon[nX][nY] === "." || this.dungeon[nX][nY] === "S") &&
          this.path[nX][nY] === this.path[r][c] - 1
        ) {
          r = nX;
          c = nY;
          stack.push({ x: r, y: c });
        }
      }
    }

    while (stack.length > 0) {
      var current = stack.pop();
      //   console.log(current);
      r = current.x;
      c = current.y;
      if (this.solvedGrid[r][c] === ".") {
        this.solvedGrid[r][c] = "*";
      }
    }

    for (let r = 0; r < this.rows; r++) {
      console.log(this.solvedGrid[r].join(""));
    }
  }

  solve() {
    if (this.start === null || this.end === null) {
      return false;
    }

    const queue = [];

    queue.push({ x: this.start.x, y: this.start.y, distance: 1 });
    this.visited.add(this.start.x + "-" + this.start.y);
    this.path[this.start.x][this.start.y] = 1;

    while (queue.length > 0) {
      const current = queue.shift();
      if (current.x === this.end.x && current.y == this.end.y) {
        this.printSolvedDungeon();
        console.log(current.distance);
        return true;
      }

      for (const neighbor of this.getNeighbours(current.x, current.y)) {
        var nX = neighbor.x;
        var nY = neighbor.y;
        if (this.isPassable(nX, nY) && !this.visited.has(nX + "-" + nY)) {
          this.path[nX][nY] = current.distance + 1;
          this.visited.add(nX + "-" + nY);
          queue.push({ x: nX, y: nY, distance: current.distance + 1 });
        }
      }
    }

    return false;
  }
}

const dungeonMap = [
  "###...##..",
  "....#....#",
  "#..###.#.#",
  "S#.#.#.#..",
  "...#...E#.",
];

// const dungeonMap = ["S.E", "##.", "###"];

const dungeonSolver = new DungeonSolver(dungeonMap);
const result = dungeonSolver.solve();
console.log(result);
