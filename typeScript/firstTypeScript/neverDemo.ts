/**
 * Created by Administrator on 2017/2/5.
 */

/**
 *Never 类型表示的是那些用不存在的值的类型。
 * never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值
 */


function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error("Something failed");
}

function infiniteLoop():never{
    while(true){

    }
}