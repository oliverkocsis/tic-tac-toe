"use strict";

var _grid = require("./grid");

xdescribe("Grid", function () {
  var width = 3;
  var height = 3;
  var grid = new _grid.Grid(width, height);
  beforeEach(function () {
    grid = new _grid.Grid(width, height);
  });
  it("can view in one dimension", function () {
    expect(grid.viewOneDimensional()).toEqual([MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]);
  });
  it("can view in two dimensions", function () {
    expect(grid.viewTwoDimensional()).toEqual([[MARK_EMPTY, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]]);
  });
  it("can mark X", function () {
    grid.markX(0, 0);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_X, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]]);
    grid.markX(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_X, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_X, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]]);
    grid.markX(2, 2);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_X, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_X, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_X]]);
  });
  it("can mark O", function () {
    grid.markO(0, 2);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_EMPTY, MARK_EMPTY, MARK_O], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]]);
    grid.markO(1, 1);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_EMPTY, MARK_EMPTY, MARK_O], [MARK_EMPTY, MARK_O, MARK_EMPTY], [MARK_EMPTY, MARK_EMPTY, MARK_EMPTY]]);
    grid.markO(2, 0);
    expect(grid.viewTwoDimensional()).toEqual([[MARK_EMPTY, MARK_EMPTY, MARK_O], [MARK_EMPTY, MARK_O, MARK_EMPTY], [MARK_O, MARK_EMPTY, MARK_EMPTY]]);
  });
  it("can mark empty spaces only", function () {
    grid.markX(1, 2);
    expect(function () {
      return grid.markX(1, 2);
    }).toThrowError("The cell (1, 2) is not empty: ".concat(MARK_X));
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