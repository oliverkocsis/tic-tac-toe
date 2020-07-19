import { Grid } from './grid';

describe("Grid", () => {

  const width = 10;
  const height = 15;
  const length = width * height;
  const count = 5;
  let grid = new Grid(width, height, count);

  beforeEach(() => {
    grid = new Grid(width, height, count);
  });

  it("can view in one dimension", () => {
    const view = grid.view();
    expect(view.length).toBe(width * height);
  });

  it("can calculate index from row and column", () => {
    const markRow = Math.floor(height / 2);
    const markColumn = Math.floor(width / 3);
    expect(grid.calculateIndex(0, 0)).toBe(0);
    expect(grid.calculateIndex(markRow, markColumn)).toBe(markRow * width + markColumn);
    expect(grid.calculateIndex(height - 1, width - 1)).toBe(width * height - 1);
  });

  it("can mark X", () => {
    const markRow = Math.floor(Math.random() * height);
    const markColumn = Math.floor(Math.random() * width);
    grid.markX(markRow, markColumn);
    const index = grid.calculateIndex(markRow, markColumn);
    for (let i = 0; i < width * height; i++) {
      if (i === index) {
        expect(grid.isX()).toBeTrue();
      } else {
        expect(grid.isX()).toBeFalse();
      }
    }
  });

  it("can mark O", () => {
    const markRow = Math.floor(Math.random() * height);
    const markColumn = Math.floor(Math.random() * width);
    grid.markO(markRow, markColumn);
    const index = grid.calculateIndex(markRow, markColumn);
    for (let i = 0; i < width * height; i++) {
      if (i === index) {
        expect(grid.isO()).toBeTrue();
      } else {
        expect(grid.isO()).toBeFalse();
      }
    }
  });

});