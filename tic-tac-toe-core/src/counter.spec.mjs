import { Counter } from './counter';

describe('Counter', () => {

  const numberOfRows = 3;
  const numberOfColumns = 3;
  const countToWin = 3;

  it('horizontally', () => {
    const array = [
      1, 1, 1,
      0, 0, 0,
      0, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinHorizontally()).toBe(1);
  });

  it('vertically', () => {
    const array = [
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinVertically()).toBe(1);
  });

  it('forward diagonally', () => {
    const array = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinDiagonalForward()).toBe(1);
  });

  it('backward diagonally', () => {
    const array = [
      0, 0, 1,
      0, 1, 0,
      1, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinDiagonalBackward()).toBe(1);
  });

});