/**
 * Created by Administrator on 2017/2/5.
 */

/**
 *TypScript的核心原则之一是对值所具有的Shape进行类型检查。它有时被称作“鸭式辩型法”或“结构性子类型化”
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj={size:10,label:"size 10 Object"};

printLabel(myObj);


interface LabelledValue{
    label:string;
}

function printLabel2(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObj2={size:10,label:"Size 10 object 2"};
printLabel2(myObj2);