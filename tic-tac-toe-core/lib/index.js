"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.MARK_EMPTY = exports.MARK_O = exports.MARK_X = exports.TicTacToe = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe() {
    _classCallCheck(this, TicTacToe);

    this.reset();
  }

  _createClass(TicTacToe, [{
    key: "next",
    value: function next(x, y) {
      var space = this.grid[x][y];

      if (' ' === space) {
        this.grid[x][y] = this.player; // horizontal winner

        for (var h = 0; h < this.grid.length; h++) {
          var _first = this.grid[h][0];

          if (' ' !== _first && this.grid[h][1] === _first && this.grid[h][2] === _first) {
            return _first;
          }
        } // vertical winner


        for (var v = 0; v < this.grid.length; v++) {
          var _first2 = this.grid[0][v];

          if (' ' !== _first2 && this.grid[1][v] === _first2 && this.grid[2][v] === _first2) {
            return _first2;
          }
        } // diagonal winner


        var first;
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
  }, {
    key: "view",
    value: function view() {
      return this.grid;
    }
  }, {
    key: "current",
    value: function current() {
      return this.player;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.grid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
      this.player = 'x';
    }
  }]);

  return TicTacToe;
}();

exports.TicTacToe = TicTacToe;
var MARK_X = "X";
exports.MARK_X = MARK_X;
var MARK_O = "O";
exports.MARK_O = MARK_O;
var MARK_EMPTY = " ";
exports.MARK_EMPTY = MARK_EMPTY;

var Grid = /*#__PURE__*/function () {
  function Grid(width, height) {
    _classCallCheck(this, Grid);

    this.width = width;
    this.height = height;
    this.cells = new Array(this.width * this.height).fill(MARK_EMPTY);
  }

  _createClass(Grid, [{
    key: "viewOneDimensional",
    value: function viewOneDimensional() {
      return this.cells.splice(0);
    }
  }, {
    key: "viewTwoDimensional",
    value: function viewTwoDimensional() {
      var grid = [];

      for (var i = 0; i < this.height; i++) {
        var startIndex = i * this.width;
        var endIndex = (i + 1) * this.width;
        grid.push(this.cells.slice(startIndex, endIndex));
      }

      return grid;
    }
  }, {
    key: "markX",
    value: function markX(row, column) {
      this._mark(row, column, MARK_X);
    }
  }, {
    key: "markO",
    value: function markO(row, column) {
      this._mark(row, column, MARK_O);
    }
  }, {
    key: "_mark",
    value: function _mark(row, column, mark) {
      var index = this._calculateIndex(row, column);

      var cell = this.cells[index];

      if (MARK_EMPTY !== cell) {
        throw new Error("The cell (".concat(row, ", ").concat(column, ") is not empty: ").concat(cell));
      }

      this.cells[index] = mark;
    }
  }, {
    key: "_calculateIndex",
    value: function _calculateIndex(row, column) {
      if (row < 0 || row >= this.height) {
        throw new Error("The row number must be between 0 and the height of the grid: ".concat(this.height));
      }

      if (column < 0 || column >= this.width) {
        throw new Error("The column number must be between 0 and the width of the grid: ".concat(this.width));
      }

      return row * this.width + column;
    }
  }]);

  return Grid;
}();

exports.Grid = Grid;