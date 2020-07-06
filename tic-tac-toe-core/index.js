class TicTacToe {

    constructor() {
        this.reset();
    }


    next(x, y) {
        const space = this.grid[x][y];
        if (' ' === space) {
            this.grid[x][y] = this.player;

            // horizontal winner
            for (let h = 0; h < this.grid.length; h++) {
                let first = this.grid[h][0];
                if (' ' !== first && this.grid[h][1] === first && this.grid[h][2] === first) {
                    return first;
                }
            }

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

    view() {
        return this.grid;
    }

    current() {
        return this.player;
    }

    reset() {
        this.grid = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]
        this.player = 'x';
    }
}

module.exports.TicTacToe = TicTacToe