/**
 * Created by Administrator on 2017/2/5.
 */

/**
 *类型断言
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
 * 它没有运行时的影响，只是在编译阶段起作用
 */


let someValue:any="this is a string";

let  strLength:number=(<string>someValue).length;

console.log(strLength);