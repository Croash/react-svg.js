'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _Ellipse = require('./Ellipse');

var _Ellipse2 = _interopRequireDefault(_Ellipse);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Line = require('./Line');

var _Line2 = _interopRequireDefault(_Line);

var _Path = require('./Path');

var _Path2 = _interopRequireDefault(_Path);

var _Polygon = require('./Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Rect = require('./Rect');

var _Rect2 = _interopRequireDefault(_Rect);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Circle: _Circle2.default,
  Ellipse: _Ellipse2.default,
  Image: _Image2.default,
  Line: _Line2.default,
  Path: _Path2.default,
  Polygon: _Polygon2.default,
  Rect: _Rect2.default,
  Text: _Text2.default
};
module.exports = exports['default'];