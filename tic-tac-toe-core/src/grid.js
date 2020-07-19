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

  didXWin() {
    return false;
  }

  didOwin() {
    return false;
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

}
