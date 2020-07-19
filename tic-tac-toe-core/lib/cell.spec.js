"use strict";

var _cell = require("./cell");

describe('Cell', function () {
  var cell = new _cell.Cell();
  beforeEach(function () {
    cell = new _cell.Cell();
  });
  it('is empty by default', function () {
    expect(cell.isEmpty()).toBeTrue();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeFalse();
  });
  it('can be marked as X', function () {
    cell.markX();
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeTrue();
    expect(cell.isO()).toBeFalse();
  });
  it('can be marked as O', function () {
    cell.markO();
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeTrue();
  });
  it('can not be changed after marked (X)', function () {
    cell.markX();
    expect(function () {
      return cell.markX();
    }).toThrowError(/The cell has been marked already/);
    expect(function () {
      return cell.markO();
    }).toThrowError(/The cell has been marked already/);
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeTrue();
    expect(cell.isO()).toBeFalse();
  });
  it('can not be changed after marked (O)', function () {
    cell.markO();
    expect(function () {
      return cell.markX();
    }).toThrowError(/The cell has been marked already/);
    expect(function () {
      return cell.markO();
    }).toThrowError(/The cell has been marked already/);
    expect(cell.isEmpty()).toBeFalse();
    expect(cell.isX()).toBeFalse();
    expect(cell.isO()).toBeTrue();
  });
});