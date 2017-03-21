/**
 * Created by Administrator on 2017/2/8.
 */
/**
 *类型兼容性
 */
//函数参数双向协变
//当比较函数参数类型时，只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。
//这是不稳定的，因为调用者可能传入了一个具有更精确类型信息的函数，但是调用这个传入的函数的时候
//却使用了不是那么精确的类型信息。实际上，这极少会发生错误，并且能够实现很多JavaScript里的常见模式。
/**
 *高级主题
 * 子类与赋值
 * 目前为止，我们使用了"兼容性"，它在语言规范里没有定义
 * 在TypeScript里，有两种类型的兼容:1、子类型 2、赋值。
 * 它们的不同点在于，赋值扩展了子类型兼容，允许给any赋值或从any取值和允许数字赋值给枚举类型或枚举类型赋值给数字
 *
 * 语言里的不同地方分别使用了它们之中的机制。实例上，
 * 兼容性是由赋值兼容性来控制的甚至在implements和extends语句里
 */
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["KeyBoard"] = 1] = "KeyBoard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handle) {
}
listenEvent(EventType.Mouse, function (e) { return console.log(e.xx + ',' + e.yy); });
listenEvent(EventType.Mouse, function (e) { return console.log(e.xx + ',' + e.yy); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.xx + ',' + e.yy); }));
//listenEvent(EventType.Mouse,(e:number)=>console.log(e));
function invokeLater(arg, callback) {
    callback();
}
invokeLater([1, 2], function (x, y) { return console.log("进来了" + x + " " + y); });
invokeLater([1, 2], function (x, y) { return console.log(x + " " + y); });
//类 类型兼容性比较
//类有静态部分和实例部分的类型。
// 比较两个类类型的对象时，只有实例的成员会被比较。
//静态成员和构造函数不在比较的范围内
var Animal = (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var a;
var s;
a = s;
s = a;
var Q;
var P;
Q = P; //okay,P matches structure of x;
var W;
var E;
//W=E;//error,x and y are not compatible;
var identity = function (x) {
    return x;
};
var reverse = function (y) {
    return y;
};
identity = reverse; //okay because (x:any)=>any matches (y:any)=>
//# sourceMappingURL=Demo1.js.map