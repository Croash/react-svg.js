'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var situationDefault = [
// 'delay',
'loop', 'during', 'after'];

var animeLoad = function animeLoad(situationDefault) {
  return function (ins, aniConfig) {
    var _aniConfig$config = aniConfig.config,
        config = _aniConfig$config === undefined ? { time: 5000, easing: '<', delay: 0, attr: {} } : _aniConfig$config,
        situation = aniConfig.situation;

    var newIns = ins.animate(config.time, config.easing, config.delay).attr(config.attr);
    situationDefault.map(function (sit) {
      if (situation[sit] != undefined) {
        if (sit == 'loop') {
          var _newIns;

          newIns = (_newIns = newIns).loop.apply(_newIns, (0, _toConsumableArray3.default)(situation[sit]));
        } else newIns = newIns[sit](situation[sit]);
      }
    });
  };
};

exports.default = animeLoad(situationDefault);
module.exports = exports['default'];