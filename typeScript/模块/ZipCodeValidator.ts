/**
 * Created by Administrator on 2017/2/9.
 */


interface stringValidator{
    isAcceptable(s:String):boolean;
}

const numberRegexp=/^[0-9]+$/;

export  class ZipCodeValidator implements stringValidator{
    isAcceptable(s:string){
        return s.length===5 && numberRegexp.test(s);
    }
}

/*
export * from "./ZipCodeValidator";*/
