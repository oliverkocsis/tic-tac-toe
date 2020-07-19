import { Grid } from './grid';

describe("Grid", () => {

  const numberOfColumns = 10;
  const numberOfRows = 15;
  const countToWin = 5;
  let grid = new Grid(numberOfRows, numberOfColumns, countToWin);

  beforeEach(() => {
    grid = new Grid(numberOfRows, numberOfColumns, countToWin);
  });

  it("can calculate index from row and column", () => {
    const markRow = Math.floor(numberOfRows / 2);
    const markColumn = Math.floor(numberOfColumns / 3);
    expect(grid._calculateIndexFor(0, 0)).toBe(0);
    expect(grid._calculateIndexFor(markRow, markColumn)).toBe(markRow * numberOfColumns + markColumn);
    expect(grid._calculateIndexFor(numberOfRows - 1, numberOfColumns - 1)).toBe(numberOfColumns * numberOfRows - 1);
  });

  it("can mark X", () => {
    const markRow = Math.floor(Math.random() * numberOfRows);
    const markColumn = Math.floor(Math.random() * numberOfColumns);
    grid.markX(markRow, markColumn);
    const index = grid._calculateIndexFor(markRow, markColumn);
    for (let row = 0; row < numberOfColumns * numberOfRows; row++) {
      for (let column = 0; column < numberOfColumns; column++) {
        if (row === markRow && column == markColumn) {
          expect(grid.isX(markRow, markColumn)).toBeTrue();
        } else {
          expect(grid.isX(markRow, markColumn)).toBeTrue();
        }
        expect(grid.isO(markRow, markColumn)).toBeFalse();
      }
    }
  });

  it("can mark O", () => {
    const markRow = Math.floor(Math.random() * numberOfRows);
    const markColumn = Math.floor(Math.random() * numberOfColumns);
    grid.markO(markRow, markColumn);
    const index = grid._calculateIndexFor(markRow, markColumn);
    for (let row = 0; row < numberOfColumns * numberOfRows; row++) {
      for (let column = 0; column < numberOfColumns; column++) {
        if (row === markRow && column == markColumn) {
          expect(grid.isO(markRow, markColumn)).toBeTrue();
        } else {
          expect(grid.isO(markRow, markColumn)).toBeTrue();
        }
        expect(grid.isX(markRow, markColumn)).toBeFalse();
      }
    }
  });

});