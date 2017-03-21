/**
 * Created by Administrator on 2017/2/9.
 */
export default class ZipCodeValidator1{
    static numberRegexp=/^[0-9]+$/;

    isAcceptable(s:string){
        return s.length===5 && ZipCodeValidator1.numberRegexp.test(s);
    }
}