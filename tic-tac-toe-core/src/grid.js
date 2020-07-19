import { Cell } from './cell';

export class Grid {

  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
    this.cells = new Array(this.width * this.height).map(() => new Cell());
  }

  markX(index) {
    const cell = this.cells[index];
    cell.markX();
  }

  markO(index) {
    const cell = this.cells[index];
    cell.markO();
  }

  calculateIndex(row, column) {
    return row * this.width + column;
  }

  view() {
    return this.cells.splice(0);
  }

  isAnyInRow(count) {
    for (let row = 0; row < this.height; row++) {
      const index = this._calculateIndex(row, 0);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let column = 1; column < this.width; column++) {
        const index = this._calculateIndex(row, column);
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

  isAnyInColumn(count) {
    for (let column = 0; column < this.height; column++) {
      const index = this._calculateIndex(0, column);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let row = 1; row < this.width; row++) {
        const index = this._calculateIndex(row, column);
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

  isAnyInDiagonalForwardSlash(count) {
    for (let column = 0; column < this.height; column++) {
      const index = this._calculateIndex(0, column);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let row = 1; row < this.width; row++) {
        const index = this._calculateIndex(row, column);
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

