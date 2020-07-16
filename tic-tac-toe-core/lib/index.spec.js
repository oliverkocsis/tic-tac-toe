"use strict";

var _index = require("./index");

describe("Grid", function () {
  var width = 3;
  var height = 3;
  var grid = new _index.Grid(width, height);
  beforeEach(function () {
    grid = new _index.Grid(width, height);
  });
  it("can view in one dimension", function () {
    expect(grid.viewOneDimensional()).toEqual([_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]);
  });
  it("can view in two dimensions", function () {
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
  });
  it("can mark X", function () {
    grid.markX(0, 0);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_X, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
    grid.markX(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_X, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_X, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
    grid.markX(2, 2);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_X, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_X, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_X]]);
  });
  it("can mark O", function () {
    grid.markO(0, 2);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_O], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
    grid.markO(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_O], [_index.MARK_EMPTY, _index.MARK_O, _index.MARK_EMPTY], [_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
    grid.markO(2, 0);
    expect(grid.viewTwoDimensional()).toEqual([[_index.MARK_EMPTY, _index.MARK_EMPTY, _index.MARK_O], [_index.MARK_EMPTY, _index.MARK_O, _index.MARK_EMPTY], [_index.MARK_O, _index.MARK_EMPTY, _index.MARK_EMPTY]]);
  });
  it("can mark empty spaces only", function () {
    grid.markX(1, 2);
    expect(function () {
      return grid.markX(1, 2);
    }).toThrowError("The cell (1, 2) is not empty: ".concat(_index.MARK_X));
  });
  it("can mark within width and height only", function () {
    expect(function () {
      return grid.markX(height, 0);
    }).toThrowError("The row number must be between 0 and the height of the grid: ".concat(height));
    expect(function () {
      return grid.markX(-1, 0);
    }).toThrowError("The row number must be between 0 and the height of the grid: ".concat(height));
    expect(function () {
      return grid.markX(0, width);
    }).toThrowError("The column number must be between 0 and the width of the grid: ".concat(width));
    expect(function () {
      return grid.markX(0, -1);
    }).toThrowError("The column number must be between 0 and the width of the grid: ".concat(width));
  });
});
describe("Tic-tac-toe", function () {
  var game;
  beforeEach(function () {
    this.game = new _index.TicTacToe();
  });
  it("is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid", function () {
    expect(this.game.view()).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    this.game.next(0, 0);
    expect(this.game.view()).toEqual([['x', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
    this.game.next(1, 1);
    expect(this.game.view()).toEqual([['x', ' ', ' '], [' ', 'o', ' '], [' ', ' ', ' ']]);
    this.game.next(2, 2);
    expect(this.game.view()).toEqual([['x', ' ', ' '], [' ', 'o', ' '], [' ', ' ', 'x']]);
    expect(function () {
      this.game.next(0, 0);
    }.bind(this)).toThrowError(/player must mark spaces/);
    expect(function () {
      this.game.next(0, 0);
    }.bind(this)).toThrowError(/player must mark spaces/);
  });
  describe("In order to win the game, a player must place three of their marks in", function () {
    it("horizontal,", function () {
      var winner;
      winner = this.game.next(0, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 0); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 1); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 1); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 2); // x

      expect(winner).toEqual('x');
      expect(this.game.view()).toEqual([['x', 'x', 'x'], ['o', 'o', ' '], [' ', ' ', ' ']]);
    });
    it("vertical,", function () {
      var winner;
      winner = this.game.next(0, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 2); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 2); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 0); // x

      expect(winner).toEqual('x');
      expect(this.game.view()).toEqual([['x', ' ', 'o'], ['x', ' ', 'o'], ['x', ' ', ' ']]);
    });
    it("diagonal (\\),", function () {
      var winner;
      winner = this.game.next(0, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 0); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 1); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 2); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 2); // x

      expect(winner).toEqual('x');
      expect(this.game.view()).toEqual([['x', ' ', ' '], ['o', 'x', 'o'], [' ', ' ', 'x']]);
    });
    it("or diagonal (/) row.", function () {
      var winner;
      winner = this.game.next(0, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 1); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 0); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 1); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 2); // o

      expect(winner).toEqual('o');
      expect(this.game.view()).toEqual([['x', 'x', 'o'], ['x', 'o', ' '], ['o', ' ', ' ']]);
    });
  });
  describe("should not win", function () {
    it("example one,", function () {
      var winner;
      winner = this.game.next(0, 0); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(0, 1); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 1); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(1, 2); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 1); // x

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 2); // o

      expect(winner).toBeUndefined();
      winner = this.game.next(2, 0); // x

      expect(winner).toBeUndefined();
      expect(this.game.view()).toEqual([['x', 'o', ' '], [' ', 'x', 'o'], ['x', 'x', 'o']]);
    });
  });
});