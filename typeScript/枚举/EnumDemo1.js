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
/*enum FileAccess{
    None,
    Read=1<<1,
    Write=1<<2,
    ReadWrite=Read|Write
    //computed member
    G="123".length
}*/
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
console.log(a);
var nameOfA = Enum[Enum.A];
console.log(nameOfA);
var directions = [1 /* Up */, 2 /* Down */, 3 /* Left */, 4 /* Right */];
var ac = Enum2.B;
console.log(ac);
//# sourceMappingURL=EnumDemo1.js.map