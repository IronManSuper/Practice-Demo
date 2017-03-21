/**
 * Created by Administrator on 2017/2/9.
 */
import {StringValidator} from "./Validation";

const numberRegexp=/^[0-9]]+$/;

export class ZipCodeValidator implements StringValidator{
    isAcceptable(s:string){
        return s.length===5 &&numberRegexp.test(s);
    }
}