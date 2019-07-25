'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testAmount = testAmount;
exports.testPIntReg = testPIntReg;
exports.testPNIntReg = testPNIntReg;

var _reg = require('./reg');

var REG = _interopRequireWildcard(_reg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function testAmount(str) {
    return REG.AmountReg.test(str);
}

function testPIntReg(str) {
    return REG.PIntReg.test(str);
}

function testPNIntReg(str) {
    return REG.PNIntReg.test(str);
}