/**
 * Created by Administrator on 2017/2/9.
 */
"use strict";

var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = function () {
    function ZipCodeValidator() {}
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}();
exports.ZipCodeValidator = ZipCodeValidator;
/*
export * from "./ZipCodeValidator";*/
//# sourceMappingURL=ZipCodeValidator.js.map

//# sourceMappingURL=ZipCodeValidator-compiled.js.map