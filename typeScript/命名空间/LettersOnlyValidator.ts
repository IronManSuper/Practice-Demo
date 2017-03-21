/**
 * Created by Administrator on 2017/2/10.
 */
/// <reference path="Validation.ts" />
namespace Validation{
    const lettersRegexp=/^[A-Za-z]+$/;

    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s:string){
            return lettersRegexp.test(s);
        }
    }
}