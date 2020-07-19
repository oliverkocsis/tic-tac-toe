import { Cell } from './cell';

describe('Cell', () => {

  let cell = new Cell();

  beforeEach(() => {
    cell = new Cell();
  });

  it('is empty by default', () => {
    expect(cell.isEmpty()).toBeTrue();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeFalse();
  });

  it('can be marked as X', () => {
    cell.markX();
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeTrue();
    expect(cell.isO()).toBeFalse();
  });

  it('can be marked as O', () => {
    cell.markO();
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeTrue();
  });

  it('can not be changed after marked (X)', () => {
    cell.markX();
    expect(() => cell.markX()).toThrowError(/The cell has been marked already/);
    expect(() => cell.markO()).toThrowError(/The cell has been marked already/);
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeTrue();
    expect(cell.isO()).toBeFalse();
  });

  it('can not be changed after marked (O)', () => {
    cell.markO();
    expect(() => cell.markX()).toThrowError(/The cell has been marked already/);
    expect(() => cell.markO()).toThrowError(/The cell has been marked already/);
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeTrue();
  });


});