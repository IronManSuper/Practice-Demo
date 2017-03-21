"use strict";

/**
 * Created by Administrator on 2017/2/10.
 */
//所有的验证器都放在一个文件里
var validation;
(function (validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = function () {
        function LettersOnlyValidator() {}
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }();
    validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = function () {
        function ZipCodeValidator() {}
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }();
    validation.ZipCodeValidator = ZipCodeValidator;
    var strings = ["Hello", "98052", "101"];
    var validators = {};
    validators["ZIP code"] = new validation.ZipCodeValidator();
    validators["Letters only"] = new validation.LettersOnlyValidator();
    strings.forEach(function (s) {
        for (var name_1 in validators) {
            console.log("" + s + " " + (validators[name_1].isAcceptable(s) ? " matches " : " does not match ") + name_1);
        }
    });
})(validation || (validation = {}));
//# sourceMappingURL=nameSpace.js.map

//# sourceMappingURL=nameSpace-compiled.js.map