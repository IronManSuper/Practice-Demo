"use strict";

/**
 * Created by Administrator on 2017/2/7.
 */
/**
 * 泛型
 */
var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//创建泛型的两种方式
function identity(arg) {
    return arg;
}
//第一种是，传入所有的参数，包含类型参数
var output = identity("myString");
//第二种方法更普遍，利用了类型推论--即编译器会根据传入的参数自动帮助我们确定T的类型
var output1 = identity("myString");
var myIdentity = identity;
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应就可以了
function identity1(arg) {
    return arg;
}
var myIdentity1 = identity1;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数
function identity2(arg) {
    return arg;
}
var myIdentity2 = identity2;
function identity3(arg) {
    return arg;
}
var myIdentity3 = identity;
function identity4(arg) {
    return arg;
}
var myIdentity4 = identity4;
//泛型类
//泛型类看上去与泛型接口差不多。泛型类使用(<>)括起泛型类型，跟在类名后面。
var GenerricNumber = function () {
    function GenerricNumber() {}
    return GenerricNumber;
}();
var myGenericNumer = new GenerricNumber();
myGenericNumer.zeroValue = "";
myGenericNumer.add = function (x, y) {
    return x + y;
};
//其他类型去限制泛型
var stringNumberic = new GenerricNumber();
stringNumberic.zeroValue = "德玛西亚";
stringNumberic.add = function (x, y) {
    return x + y;
};
alert(stringNumberic.add(stringNumberic.zeroValue, "test"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity(3);
loggingIdentity({ length: 10, value: 3 });
//在泛型约束中使用类型参数
//你可以声明一个类型参数，且它被另一个类型参数所约束。
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var result1 = copyFields(x, { b: 10, d: 20 });
console.log(result1);
//let result2=copyFields(x,{Q:90});//error: property 'Q' isn't declared in 'x'.
//console.log(result2);
//在泛型里使用类类型
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
function create(c) {
    return new c();
}
var Beekeeper = function () {
    function Beekeeper() {}
    return Beekeeper;
}();
var Zookeeper = function () {
    function Zookeeper() {}
    return Zookeeper;
}();
var Animal = function () {
    function Animal() {}
    return Animal;
}();
var Bee = function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
}(Animal);
var Lion = function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
}(Animal);
function findKeeper(a) {
    return a.prototype.keeper;
}
var result3 = findKeeper(Lion).nametag;
console.log(result3);
//# sourceMappingURL=Demo1.js.map

//# sourceMappingURL=Demo1-compiled.js.map