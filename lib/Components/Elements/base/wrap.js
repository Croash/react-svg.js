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

var _svg = require('svg.js');

var _svg2 = _interopRequireDefault(_svg);

var _animateLoad = require('../../utils/animateLoad');

var _animateLoad2 = _interopRequireDefault(_animateLoad);

var _attrLoad = require('../../utils/attrLoad');

var _attrLoad2 = _interopRequireDefault(_attrLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrap = function (_Base) {
  (0, _inherits3.default)(wrap, _Base);

  function wrap() {
    (0, _classCallCheck3.default)(this, wrap);
    return (0, _possibleConstructorReturn3.default)(this, (wrap.__proto__ || Object.getPrototypeOf(wrap)).apply(this, arguments));
  }

  (0, _createClass3.default)(wrap, [{
    key: 'initName',
    value: function initName() {
      this.instanceName = 'rect';
      return this.instanceName;
    }
  }, {
    key: 'initAttr',
    value: function initAttr() {
      var defAttr = { width: 400, height: 200, fill: 'red' };
      var defAnim = {
        config: { time: 3000, easing: '<', delay: 100 },
        situation: { during: function during() {}, loop: [1, false], delay: 100, after: function after() {} }
      };
      var _props$initConfig = this.props.initConfig,
          _props$initConfig$ini = _props$initConfig.initAttr,
          initAttr = _props$initConfig$ini === undefined ? defAttr : _props$initConfig$ini,
          _props$initConfig$ini2 = _props$initConfig.initAnim,
          initAnim = _props$initConfig$ini2 === undefined ? defAnim : _props$initConfig$ini2;


      (0, _attrLoad2.default)(this[this.instanceName], initAttr);
      (0, _animateLoad2.default)(this[this.instanceName], initAnim);
    }
  }]);
  return wrap;
}(_base2.default);

exports.default = wrap;
module.exports = exports['default'];