/**
 * Created by Administrator on 2017/2/9.
 */

import {StringValidator} from "./Validation";

const lettersRegexp=/^[A-Za-z]+$/;

export class LettersOnlyValidator implements StringValidator{
    isAcceptable(s:string){
        return lettersRegexp.test(s);
    }
}
