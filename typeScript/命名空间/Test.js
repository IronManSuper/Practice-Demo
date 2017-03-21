/**
 * Created by Administrator on 2017/2/10.
 */
///<reference path="Validation.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("" + s + " " + (validators[name_1].isAcceptable(s) ? " matches " : " does not match ") + name_1);
    }
});
//# sourceMappingURL=Test.js.map