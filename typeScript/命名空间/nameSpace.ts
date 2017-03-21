/**
 * Created by Administrator on 2017/2/10.
 */
//所有的验证器都放在一个文件里

namespace validation {

    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s:string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s:string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }

    let strings = ["Hello", "98052", "101"];

    let validators:{ [s:string]:validation.StringValidator; } = {};
    validators["ZIP code"] = new validation.ZipCodeValidator();

    validators["Letters only"] = new validation.LettersOnlyValidator();

    strings.forEach(s=> {
        for (let name in validators) {
            console.log("" + s + " " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
        }
    });
}