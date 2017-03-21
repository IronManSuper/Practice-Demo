/**
 * Created by Administrator on 2017/2/9.
 */
"use strict";
var zip = require("./ZipCodeValidatorExport=");
var strings = ["Hello", "98052", "101"];
var Validate = new zip();
strings.forEach(function (s) {
    console.log("\"" + s + "\"-" + (Validate.isAcceptable(s) ? "matches" : "does not match"));
});
//# sourceMappingURL=import=require.js.map