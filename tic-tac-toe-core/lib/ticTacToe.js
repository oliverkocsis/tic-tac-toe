"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicTacToe = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe() {
    _classCallCheck(this, TicTacToe);

    this.reset();
  }

  _createClass(TicTacToe, [{
    key: "reset",
    value: function reset() {
      this.grid = new Grid(3, 3);
      this.player = MARK_X;
    }
  }, {
    key: "mark",
    value: function mark(row, column) {
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
          throw new Error("Current player is not set");
      }

      if (MARK_X === this.player) {}

      if (' ' === space) {
        this.grid[row][column] = this.player; // vertical winner

        for (var v = 0; v < this.grid.length; v++) {
          var _first = this.grid[0][v];

          if (' ' !== _first && this.grid[1][v] === _first && this.grid[2][v] === _first) {
            return _first;
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
    key: "viewOneDimensional",
    value: function viewOneDimensional() {
      return this.grid.viewOneDimensional();
    }
  }, {
    key: "viewTwoDimensional",
    value: function viewTwoDimensional() {
      return this.grid.viewTwoDimensional();
    }
  }, {
    key: "currentPlayer",
    value: function currentPlayer() {
      return this.player;
    }
  }]);

  return TicTacToe;
}();

exports.TicTacToe = TicTacToe;