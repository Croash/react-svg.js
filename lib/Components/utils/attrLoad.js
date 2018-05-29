'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var situationDefault = [
// 'delay',
'x', 'cy', 'clear', 'move', 'path', 'radius', 'plot', 'fill', 'stroke', 'load', 'size', 'center', 'width', 'font'];

var attrLoad = function attrLoad(sitList) {
  return function (ins, attrConfig) {
    var situation = attrConfig;
    var newIns = ins;

    sitList.map(function (sit) {
      if (situation[sit] != undefined) {
        if (sit == 'size' || sit == 'move' || sit == 'center') {
          var _newIns;

          // if(Array.isArray(situation[sit])&&situation[sit].length==2) {
          newIns = (_newIns = newIns)[sit].apply(_newIns, (0, _toConsumableArray3.default)(situation[sit]));
          // }
          // else console.log(`${sit} should be a array with 2 parameters`)
        } else if (sit == 'path') newIns = newIns.d(situation[sit]);else if (sit == 'clear' || sit == 'move') {
          newIns[sit]();
          return newIns;
        } else newIns = newIns[sit](situation[sit]);
      }
    });

    return newIns;
  };
};

exports.default = attrLoad(situationDefault);
module.exports = exports['default'];