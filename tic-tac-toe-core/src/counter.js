export class Counter {
  constructor(array, numberOfRows, numberOfColumns, countToWin) {

  }

  whoDidWinHorizontally() {
    for (let row = 0; row < this.numberOfRows; row++) {
      const index = this._calculateIndexFor(row, 0);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let column = 1; column < this.numberOfColumns - countToWin + continuousCount; column++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.cells[index];
        if (expected === current) {
          continuousCount++;
        } else {
          expected = current;
          continuousCount = 1;
        }
        if (continuousCount === this.countToWin) {
          return expected;
        }
      }
    }
  }

  whoDidWinVertically() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      const index = this._calculateIndexFor(0, column);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let row = 1; row < this.numberOfRows; row++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.cells[index];
        if (expected === current) {
          continuousCount++;
        } else {
          expected = current;
          continuousCount = 1;
        }
        if (continuousCount === this.countToWin) {
          return expected;
        }
      }
    }
  }

  whoDidWinDiagonalForward() {
    for (let column = 0; column < this.height; column++) {
      const index = this._calculateIndexFor(0, column);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let row = 1; row < this.width; row++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.cells[index];
        if (expected === current) {
          continuousCount++;
        } else {
          expected = current;
          continuousCount = 1;
        }
        if (continuousCount === count) {
          return expected;
        }
      }
    }
  }

  whoDidWinDiagonalBackward(count) {
    for (let column = 0; column < this.height; column++) {
      const index = this._calculateIndexFor(0, column);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let row = 1; row < this.width; row++) {
        const index = this._calculateIndexFor(row, column);
        const current = this.cells[index];
        if (expected === current) {
          continuousCount++;
        } else {
          expected = current;
          continuousCount = 1;
        }
        if (continuousCount === count) {
          return expected;
        }
      }
    }
  }
}