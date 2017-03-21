/**
 * Created by Administrator on 2017/2/9.
 */
"use strict";

var ZipCodeValidator_1 = require("./ZipCodeValidator");
var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\"-" + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
});

//# sourceMappingURL=Test-compiled.js.map