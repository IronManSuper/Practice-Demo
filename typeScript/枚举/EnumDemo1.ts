/**
 * Created by Administrator on 2017/2/7.
 */
/**
 *枚举
 * 使用枚举我们可以定义一些有名字的数字常量。
 */
//一个枚举类型可以包含零个或多个枚举成员。
// 枚举成员具有一个数字值，它可以叫做常数或者计算得出值当满足如下条件
//1、不具有初始化函数并且之前的枚举成员是常数。
//在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。 但第一个枚举元素是个例外。 如果它没有初始化方法，那么它的初始值为 0

//2、枚举成员使用常数枚举表达式初始化。常数枚举表达式是TypeScript表达式的子集，它可以在编译求值。
//当一个表达式满足下面条件之一时，它就是一个常数枚举表达式
//数字字面量
//引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的） 如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。
//带括号的常数枚举表达式
//+, -, ~ 一元运算符应用于常数枚举表达式
//+, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象 若常数枚举表达式求值后为 NaN或Infinity，则会在编译阶段报错。


const enum Direction{
    Up=1,
    Down,
    Left,
    Right
}

/*enum FileAccess{
    None,
    Read=1<<1,
    Write=1<<2,
    ReadWrite=Read|Write
    //computed member
    G="123".length
}*/

enum Enum{
    A
}
let a=Enum.A;
console.log(a);

let nameOfA=Enum[Enum.A];
console.log(nameOfA);

const enum Enum1{
    A=1,
    B=A*2
}

let directions=[Direction.Up,Direction.Down,Direction.Left,Direction.Right];


//外部枚举
declare enum Enum2{
    A=1,
    B,
    C=2
}

let ac=Enum2.B;
console.log(ac);