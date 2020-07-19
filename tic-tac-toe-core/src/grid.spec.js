import { Grid, Cell } from './grid';



xdescribe("Grid", () => {

  const width = 3;
  const height = 3;
  let grid = new Grid(width, height);

  beforeEach(function () {
    grid = new Grid(width, height);
  });

  it("can view in one dimension", () => {
    expect(grid.viewOneDimensional()).toEqual([MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY])
  });

  it("can view in two dimensions", () => {
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
    ]);
  });

  it("can mark X", () => {
    grid.markX(0, 0);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_X, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
    ]);
    grid.markX(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_X, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_X, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
    ]);
    grid.markX(2, 2);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_X, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_X, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_X],
    ]);
  });

  it("can mark O", () => {
    grid.markO(0, 2);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_EMPTY, MARK_EMPTY, MARK_O],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
    ]);
    grid.markO(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_EMPTY, MARK_EMPTY, MARK_O],
      [MARK_EMPTY, MARK_O, MARK_EMPTY],
      [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY],
    ]);
    grid.markO(2, 0);
    expect(grid.viewTwoDimensional()).toEqual([
      [MARK_EMPTY, MARK_EMPTY, MARK_O],
      [MARK_EMPTY, MARK_O, MARK_EMPTY],
      [MARK_O, MARK_EMPTY, MARK_EMPTY],
    ]);
  });

  it("can mark empty spaces only", () => {
    grid.markX(1, 2);
    expect(() => grid.markX(1, 2)).toThrowError(`The cell (1, 2) is not empty: ${MARK_X}`);
  });

  it("can mark within width and height only", () => {
    expect(() => grid.markX(height, 0)).toThrowError(`The row number must be between 0 and the height of the grid: ${height}`);
    expect(() => grid.markX(-1, 0)).toThrowError(`The row number must be between 0 and the height of the grid: ${height}`);
    expect(() => grid.markX(0, width)).toThrowError(`The column number must be between 0 and the width of the grid: ${width}`);
    expect(() => grid.markX(0, -1)).toThrowError(`The column number must be between 0 and the width of the grid: ${width}`);
  });

});