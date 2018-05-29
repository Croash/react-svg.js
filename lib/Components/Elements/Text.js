'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _isFun = require('../utils/isFun');

var _isFun2 = _interopRequireDefault(_isFun);

var _svg = require('svg.js');

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rect = function (_Base) {
  (0, _inherits3.default)(Rect, _Base);

  function Rect() {
    (0, _classCallCheck3.default)(this, Rect);
    return (0, _possibleConstructorReturn3.default)(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));
  }

  (0, _createClass3.default)(Rect, [{
    key: 'initName',
    value: function initName() {
      this.instanceName = 'text';
      return this.instanceName;
    }
  }]);
  return Rect;
}(_base2.default);

exports.default = Rect;
module.exports = exports['default'];