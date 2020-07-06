const TicTacToe = require('../index.js').TicTacToe;

describe("Tic-tac-toe", function () {

  let game;

  beforeEach(function () {
    this.game = new TicTacToe();
  });

  it("is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid", function () {
    expect(this.game.view()).toEqual([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
    this.game.next(0, 0);
    expect(this.game.view()).toEqual([
      ['x', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
    this.game.next(1, 1);
    expect(this.game.view()).toEqual([
      ['x', ' ', ' '],
      [' ', 'o', ' '],
      [' ', ' ', ' '],
    ]);
    this.game.next(2, 2);
    expect(this.game.view()).toEqual([
      ['x', ' ', ' '],
      [' ', 'o', ' '],
      [' ', ' ', 'x'],
    ]);

    expect(function () { this.game.next(0, 0); }.bind(this)).toThrowError(/player must mark spaces/);
    expect(function () { this.game.next(0, 0); }.bind(this)).toThrowError(/player must mark spaces/);

  });

  describe("In order to win the game, a player must place three of their marks in", function () {

    it("horizontal,", function () {
      let winner;
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

      expect(this.game.view()).toEqual([
        ['x', 'x', 'x'],
        ['o', 'o', ' '],
        [' ', ' ', ' '],
      ]);
    });

    it("vertical,", function () {
      let winner;
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

      expect(this.game.view()).toEqual([
        ['x', ' ', 'o'],
        ['x', ' ', 'o'],
        ['x', ' ', ' '],
      ]);
    });

    it("or diagonal row.", function () {
      let winner;
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

      expect(this.game.view()).toEqual([
        ['x', ' ', ' '],
        ['o', 'x', 'o'],
        [' ', ' ', 'x'],
      ]);
    });

  });

  describe("should not win", function () {

    it("example one,", function () {
      let winner;
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

      expect(this.game.view()).toEqual([
        ['x', 'o', ' '],
        [' ', 'x', 'o'],
        ['x', 'x', 'o'],
      ]);
    });

  });

});