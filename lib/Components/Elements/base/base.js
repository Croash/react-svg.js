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

var _isFun = require('../../utils/isFun');

var _isFun2 = _interopRequireDefault(_isFun);

var _svg = require('svg.js');

var _svg2 = _interopRequireDefault(_svg);

var _animateLoad = require('../../utils/animateLoad');

var _animateLoad2 = _interopRequireDefault(_animateLoad);

var _attrLoad = require('../../utils/attrLoad');

var _attrLoad2 = _interopRequireDefault(_attrLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_Component) {
  (0, _inherits3.default)(Base, _Component);

  function Base(props) {
    (0, _classCallCheck3.default)(this, Base);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    var __parent__ = props.__parent__,
        __instance__ = props.__instance__;

    if (typeof window !== 'undefined') {
      if (__parent__ != undefined) {
        _this.parent = __parent__;
        _this.initialInstance();
      } else console.error('__parent__ undefined');
    }
    return _this;
  }

  (0, _createClass3.default)(Base, [{
    key: 'initialInstance',
    value: function initialInstance() {
      var _this2 = this;

      var _props = this.props,
          __parent__ = _props.__parent__,
          __parent__type__ = _props.__parent__type__,
          canvas = _props.__canvas__;

      this.instanceName = this.initName();

      if (this.props.__instance__ != undefined) this[this.instanceName] = this.props.__instance__;
      if (this[this.instanceName]) {
        return new Promise(function (resolve) {
          resolve(_this2[_this2.instanceName]);
        });
      } else {
        return new Promise(function (resolve) {
          _this2[_this2.instanceName] = _this2.parent[_this2.instanceName]();
          _this2.initAttr();
          var events = _this2.exposeInstance(_this2.props);
          events && _this2.bindEvents(events);
          resolve(_this2[_this2.instanceName]);
        });
      }
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      return _react2.default.createElement(
        'div',
        null,
        error,
        ' : ',
        info
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
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
  }, {
    key: 'bindEvents',
    value: function bindEvents(events, mapInstance) {
      var list = Object.keys(events);
      var instance = this[this.instanceName];
      list.length && list.forEach(function (evName) {
        instance.on(evName, function (param) {
          events[evName](param, instance);
        });
      });
    }
  }, {
    key: 'exposeInstance',
    value: function exposeInstance() {
      if ('events' in this.props) {
        var events = this.props.events || {};
        if ((0, _isFun2.default)(events.created)) {
          console.log(this.instanceName + ' created');
          events.created(this[this.instanceName], this.instanceName);
          delete events.created;
        }
        return events;
      }
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);
  return Base;
}(_react.Component);

exports.default = Base;
module.exports = exports['default'];