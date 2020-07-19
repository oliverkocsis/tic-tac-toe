"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _cell = require("./cell");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grid = /*#__PURE__*/function () {
  function Grid(width, height, count) {
    _classCallCheck(this, Grid);

    this.width = width;
    this.height = height;
    this.count = count;
    this.cells = new Array(this.width * this.height).map(function () {
      return new _cell.Cell();
    });
  }

  _createClass(Grid, [{
    key: "markX",
    value: function markX(row, column) {
      this._mark(row, column, X);
    }
  }, {
    key: "markO",
    value: function markO(row, column) {
      this._mark(row, column, O);
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
    key: "isX",
    value: function isX(row, column) {
      this._isMark(row, column, X);
    }
  }, {
    key: "isO",
    value: function isO(row, column) {
      this._isMark(row, column, O);
    }
  }, {
    key: "_isMark",
    value: function _isMark(row, column, mark) {
      var index = this._calculateIndex(row, column);

      var cell = this.cells[index];
      return mark === cell;
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
  }, {
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
    key: "isAnyInRow",
    value: function isAnyInRow(count) {
      for (var row = 0; row < this.height; row++) {
        var index = this._calculateIndex(row, 0);

        var expected = this.cells[index];
        var continuousCount = 1;

        for (var column = 1; column < this.width; column++) {
          var _index = this._calculateIndex(row, column);

          var current = this.cells[_index];

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
  }, {
    key: "isAnyInColumn",
    value: function isAnyInColumn(count) {
      for (var column = 0; column < this.height; column++) {
        var index = this._calculateIndex(0, column);

        var expected = this.cells[index];
        var continuousCount = 1;

        for (var row = 1; row < this.width; row++) {
          var _index2 = this._calculateIndex(row, column);

          var current = this.cells[_index2];

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
  }, {
    key: "isAnyInDiagonalForwardSlash",
    value: function isAnyInDiagonalForwardSlash(count) {
      for (var column = 0; column < this.height; column++) {
        var index = this._calculateIndex(0, column);

        var expected = this.cells[index];
        var continuousCount = 1;

        for (var row = 1; row < this.width; row++) {
          var _index3 = this._calculateIndex(row, column);

          var current = this.cells[_index3];

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
  }]);

  return Grid;
}();

exports.Grid = Grid;