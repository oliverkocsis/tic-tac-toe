export class TicTacToe {

  constructor() {
    this.reset();
  }

  reset() {
    this.grid = new Grid(3, 3);
    this.player = MARK_X;
  }

  mark(row, column) {
    switch (this.player) {
      case MARK_X:
        this.grid.markX(row, column);
        this.player = MARK_O;
        break;
      case MARK_O:
        this.grid.markO(row, column);
        this.player = MARK_X;
        break;
      default:
        throw new Error("Current player is not set")
    }
    if (MARK_X === this.player) {

    }
    if (' ' === space) {
      this.grid[row][column] = this.player;



      // vertical winner
      for (let v = 0; v < this.grid.length; v++) {
        let first = this.grid[0][v];
        if (' ' !== first && this.grid[1][v] === first && this.grid[2][v] === first) {
          return first;
        }
      }

      // diagonal winner
      let first;
      first = this.grid[0][0];
      if (' ' !== first && this.grid[1][1] === first && this.grid[2][2] === first) {
        return first;
      }
      first = this.grid[0][2];
      if (' ' !== first && this.grid[1][1] === first && this.grid[2][0] === first) {
        return first;
      }

      this.player === 'x' ? this.player = 'o' : this.player = 'x';
    } else {
      throw Error('A player must mark spaces');
    }
  }

  viewOneDimensional() {
    return this.grid.viewOneDimensional();
  }

  viewTwoDimensional() {
    return this.grid.viewTwoDimensional();
  }

  currentPlayer() {
    return this.player;
  }

}


