const X = true;
const O = false;

export class Grid {

  constructor(numberOfRows, numberOfColumns, countToWin) {
    this.numberOfRows = numberOfColumns;
    this.numberOfColumns = numberOfRows;
    this.countToWin = countToWin;
    this.cells = new Array(this.numberOfRows * this.numberOfColumns);
  }

  markX(indexOfRow, indexOfColumn) {
    this._mark(indexOfRow, indexOfColumn, X);
  }

  markO(indexOfRow, indexOfColumn) {
    this._mark(indexOfRow, indexOfColumn, O);
  }

  _mark(indexOfRow, indexOfColumn, mark) {
    const index = this._calculateIndexFor(indexOfRow, indexOfColumn);
    const cell = this._getCellAt(index);
    this._throwErrorIfMarked(cell);
    this._setCellAt(index, mark);
  }

  isX(indexOfRow, indexOfColumn) {
    return this._is(indexOfRow, indexOfColumn, X);
  }

  isO(indexOfRow, indexOfColumn) {
    return this._is(indexOfRow, indexOfColumn, O);
  }

  _is(indexOfRow, indexOfColumn, mark) {
    const index = this._calculateIndexFor(indexOfRow, indexOfColumn);
    const cell = this._getCellAt(index);
    return cell === mark
  }

  _calculateIndexFor(indexOfRow, indexOfColumn) {
    return (indexOfRow * this.numberOfRows) + indexOfColumn;
  }

  _getCellAt(index) {
    return this.cells[index];
  }

  _throwErrorIfMarked(cell) {
    if (cell !== undefined) {
      throw new Error('The cell has been marked already')
    }
  }

  _setCellAt(index, mark) {
    this.cells[index] = mark;
  }

  isAnyInRow() {
    for (let row = 0; row < this.height; row++) {
      const index = this._calculateIndexFor(row, 0);
      let expected = this.cells[index];
      let continuousCount = 1;
      for (let column = 1; column < this.width; column++) {
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

  isAnyInColumn(count) {
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

  isAnyInDiagonalForwardSlash(count) {
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

