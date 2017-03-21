/**
 * Created by Administrator on 2017/2/9.
 */
"use strict";
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var strings = ["Hello", "98052", "101"];
strings.forEach(function (s) {
    console.log("\"" + s + "\"" + (StaticZipCodeValidator_1["default"](s) ? "matches" : "does not match"));
});
//# sourceMappingURL=import3.js.map