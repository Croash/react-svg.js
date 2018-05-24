'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _svg = require('svg.js');

var _svg2 = _interopRequireDefault(_svg);

var _isFun = require('../utils/isFun');

var _isFun2 = _interopRequireDefault(_isFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function (_Component) {
  (0, _inherits3.default)(Group, _Component);

  function Group(props) {
    (0, _classCallCheck3.default)(this, Group);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

    var canvas = props.canvas,
        __parent__ = props.__parent__;


    if (__parent__ != undefined) {
      _this.Initialize();
    } else console.log('some thing wrong with this');
    return _this;
  }

  (0, _createClass3.default)(Group, [{
    key: 'Initialize',
    value: function Initialize() {
      var __parent__ = this.props.__parent__;

      this.parent = __parent__;
      this.group = this.parent['group']();
      this.instanceName = 'group';
      var events = this.exposeInstance(this.props);
      this.bindEvents(events);
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
    key: 'render',
    value: function render() {
      return this.renderChildren();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var childrenWithProps = _react.Children.map(this.props.children, function (child) {
        return child != null ? _react2.default.cloneElement(child, (0, _extends3.default)({}, _lodash2.default.omit(_this2.props, ['children', 'events']), {
          __group__: _this2.group,
          __parent__: _this2.group,
          __parent__type__: 'group'
        })) : null;
      });
      return childrenWithProps;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
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
  }]);
  return Group;
}(_react.Component);

exports.default = Group;
module.exports = exports['default'];