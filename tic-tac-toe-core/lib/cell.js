"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _ = undefined;
var X = true;
var O = false;

var Cell = /*#__PURE__*/function () {
  function Cell() {
    _classCallCheck(this, Cell);

    this.value = undefined;
  }

  _createClass(Cell, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.value === _;
    }
  }, {
    key: "markX",
    value: function markX() {
      this._throwErrorIfNotEmpty();

      this.value = X;
    }
  }, {
    key: "isX",
    value: function isX() {
      return this.value === X;
    }
  }, {
    key: "markO",
    value: function markO() {
      this._throwErrorIfNotEmpty();

      this.value = O;
    }
  }, {
    key: "isO",
    value: function isO() {
      return this.value === O;
    }
  }, {
    key: "_throwErrorIfNotEmpty",
    value: function _throwErrorIfNotEmpty() {
      if (this.value !== undefined) {
        throw new Error("The cell has been marked already");
      }
    }
  }]);

  return Cell;
}();

exports.Cell = Cell;