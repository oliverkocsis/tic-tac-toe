import { Cell } from './cell';

export class Grid {

  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
    this.cells = new Array(this.width * this.height).map(() => new Cell());
  }

  markX(row, column) {
    this._mark(row, column, X);
  }

  markO(row, column) {
    this._mark(row, column, O);
  }

  _mark(row, column, mark) {
    const index = this._calculateIndex(row, column);
    const cell = this.cells[index];
    if (MARK_EMPTY !== cell) {
      throw new Error(`The cell (${row}, ${column}) is not empty: ${cell}`);
    }
    this.cells[index] = mark;
  }

  isX(row, column) {
    this._isMark(row, column, X)
  }

  isO(row, column) {
    this._isMark(row, column, O)
  }

  _isMark(row, column, mark) {
    const index = this._calculateIndex(row, column);
    const cell = this.cells[index];
    return mark === cell;
  }

  _calculateIndex(row, column) {
    if (row < 0 || row >= this.height) {
      throw new Error(`The row number must be between 0 and the height of the grid: ${this.height}`);
    }
    if (column < 0 || column >= this.width) {
      throw new Error(`The column number must be between 0 and the width of the grid: ${this.width}`);
    }
    return row * this.width + column;
  }

  viewOneDimensional() {
    return this.cells.splice(0);
  }

  viewTwoDimensional() {
    const grid = [];
    for (let i = 0; i < this.height; i++) {
      const startIndex = i * this.width;
      const endIndex = (i + 1) * this.width;
      grid.push(this.cells.slice(startIndex, endIndex));
    }
    return grid;
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

