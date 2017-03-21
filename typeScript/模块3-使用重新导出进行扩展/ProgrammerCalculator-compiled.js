/**
* Created by Administrator on 2017/2/10.
*/
"use strict";

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Calculator_1 = require("./Calculator");
var ProgammerCalculator = function (_super) {
    __extends(ProgammerCalculator, _super);
    function ProgammerCalculator(base) {
        _super.call(this);
        this.base = base;
        if (base <= 0 || base > ProgammerCalculator.digits.length) {
            throw new Error("base has to be within o to 16 inclusive");
        }
    }
    ProgammerCalculator.prototype.processDigit = function (digit, currentValue) {
        if (ProgammerCalculator.digits.indexOf(digit) >= 0) {
            return currentValue * this.base + ProgammerCalculator.digits.indexOf(digit);
        }
    };
    ProgammerCalculator.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "D", "E", "F"];
    return ProgammerCalculator;
}(Calculator_1.Calculator);
exports.Calculator = ProgammerCalculator;
var Calculator_2 = require("./Calculator");
exports.test = Calculator_2.test;
//# sourceMappingURL=ProgrammerCalculator.js.map

//# sourceMappingURL=ProgrammerCalculator-compiled.js.map