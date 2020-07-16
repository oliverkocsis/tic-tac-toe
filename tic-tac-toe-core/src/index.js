export const MARK_X = "X";
export const MARK_O = "O";
export const MARK_EMPTY = " ";

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

export class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = new Array(this.width * this.height).fill(MARK_EMPTY);
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

    markX(row, column) {
        this._mark(row, column, MARK_X);
    }

    markO(row, column) {
        this._mark(row, column, MARK_O);
    }

    _mark(row, column, mark) {
        const index = this._calculateIndex(row, column);
        const cell = this.cells[index];
        if (MARK_EMPTY !== cell) {
            throw new Error(`The cell (${row}, ${column}) is not empty: ${cell}`);
        }
        this.cells[index] = mark;
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

