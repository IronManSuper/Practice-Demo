 /**
 * Created by Administrator on 2017/2/10.
 */

 import {Calculator} from "./Calculator";

 class ProgammerCalculator extends Calculator{
     static digits=["0","1","2","3","4","5","6","7","8","9","C","D","E","F"];
     constructor(public base:number){
         super();
         if(base <= 0 || base > ProgammerCalculator.digits.length){
             throw new Error("base has to be within o to 16 inclusive");
         }
     }

     protected processDigit(digit:string,currentValue:number){
         if(ProgammerCalculator.digits.indexOf(digit)>=0){
             return currentValue*this.base+ProgammerCalculator.digits.indexOf(digit);
         }
     }
 }


 export {ProgammerCalculator as Calculator };

 export {test} from "./Calculator";
