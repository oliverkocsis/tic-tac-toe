const _ = undefined;
const X = true;
const O = false;

export class Cell {

  constructor() {
    this.value = undefined;
  }

  isEmpty() {
    return this.value === _;
  }

  markX() {
    this._throwErrorIfNotEmpty();
    this.value = X;
  }

  isX() {
    return this.value === X;
  }

  markO() {
    this._throwErrorIfNotEmpty();
    this.value = O;
  }

  isO() {
    return this.value === O;
  }

  _throwErrorIfNotEmpty() {
    if (this.value !== undefined) {
      throw new Error("The cell has been marked already");
    }
  }

}