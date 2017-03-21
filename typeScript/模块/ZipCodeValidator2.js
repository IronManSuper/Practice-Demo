"use strict";
/**
 * Created by Administrator on 2017/2/9.
 */
var ZipCodeValidator1 = (function () {
    function ZipCodeValidator1() {
    }
    ZipCodeValidator1.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator1.numberRegexp.test(s);
    };
    ZipCodeValidator1.numberRegexp = /^[0-9]+$/;
    return ZipCodeValidator1;
}());
exports.__esModule = true;
exports["default"] = ZipCodeValidator1;
//# sourceMappingURL=ZipCodeValidator2.js.map