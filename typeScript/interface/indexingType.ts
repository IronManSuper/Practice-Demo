/**
 * Created by Administrator on 2017/2/5.
 */

/**
 * 可索引的类型
 *可索引类型具有一个索引签名，它描述了对象索引的类型，还有响应的索引返回值类型
 */


interface StringArray{
    [index:number]:string;
}

let myArray:StringArray;
myArray=["Bob","Fred"];
console.log(myArray);
let myStr:string=myArray[0];
document.body.innerHTML=myStr;

class Animal{
    name:string;
}

class Dog extends Animal{
    breed:string;
}

interface NotOkay{
    [x:number]:Animal;
    [x:string]:Dog;
}

interface ClockConstructor{
    new (hour:number,minute:number):ClockInterface;
}

interface ClockInterface{
    tick();
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
  return new ctor(hour,minute);
}

class DigitalClock implements ClockInterface{
    constructor(h:number,m:number){}

  tick(){
      console.log("beep  tock");
  }
}

class AnalogClock implements ClockInterface{
    constructor(h:number,m:number){}
    tick(){
        console.log("tick tock");
    }
}

let digital=createClock(DigitalClock,12,17);
let analog=createClock(AnalogClock,7,32);

console.log(digital);
console.log(analog);

