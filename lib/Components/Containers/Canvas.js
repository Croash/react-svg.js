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

var Canvas = function (_Component) {
  (0, _inherits3.default)(Canvas, _Component);

  function Canvas(props) {
    (0, _classCallCheck3.default)(this, Canvas);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    var _props$divName = props.divName,
        divName = _props$divName === undefined ? 'drawing' : _props$divName;

    _this.state = {
      loaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref) {
            _this2.ref = _ref;
          } },
        this.state.loaded ? this.renderChildren() : null
      );
    }
  }, {
    key: 'exposeInstance',
    value: function exposeInstance() {
      if ('events' in this.props) {
        var events = this.props.events || {};
        console.log(events);
        if ((0, _isFun2.default)(events.created)) {
          events.created(this.canvas);
          delete events.created;
        }
        return events;
      }
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          _props$divName2 = _props.divName,
          divName = _props$divName2 === undefined ? 'drawing' : _props$divName2,
          _props$size = _props.size,
          size = _props$size === undefined ? { width: 500, height: 300 } : _props$size;

      this.canvas = (0, _svg2.default)(this.ref).size(size.width, size.height);
      this.setState({ loaded: true });
      var events = this.exposeInstance(this.props);
      // console.log(events)
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var childrenWithProps = _react.Children.map(this.props.children, function (child) {
        return child != null ? _react2.default.cloneElement(child, (0, _extends3.default)({}, _lodash2.default.omit(_this3.props, ['children', 'events']), {
          __canvas__: _this3.canvas,
          __parent__: _this3.canvas,
          __parent__type__: 'canvas'
        })) : null;
      });
      return childrenWithProps;
    }
  }]);
  return Canvas;
}(_react.Component);

exports.default = Canvas;
module.exports = exports['default'];