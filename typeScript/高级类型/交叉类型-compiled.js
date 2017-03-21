"use strict";

/**
 * Created by Administrator on 2017/2/8.
 */
/**
 *交叉类型
 * 交叉类型是将多个类型合并为一个类型。
 * 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特效。
 * 例如，Person & Serializable & Loggable同时是Person和Serializable和Loggable。
 * 就是说这个类型的对象同时拥有了三种类型的成员。
 */
var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 我们大多是混入或其它不合适典型面向对象模型的地方看到交叉类型的使用。
 */
//交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}();
var ConsoleLogger = function () {
    function ConsoleLogger() {}
    ConsoleLogger.prototype.log = function () {};
    return ConsoleLogger;
}();
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
//联合类型
/**
 *联合类型与交叉类型很有关联，但是使用上却完全不同。
 * 偶尔你会遇到这种情况，一个代码库希望传入number或string类型的参数。
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number,got '" + padding + "'.");
}
padLeft("Hello world", 4);
//console.log(padLeft("hello world",{a:2,b:3}));
function padLeft1(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "boolean") {
        return padding + value;
    }
    throw new Error("Expected string or number,got '" + padding + "'.");
}
var indentedString = padLeft1("Hello world", true);
console.log(indentedString);
function getSmallPet() {
    //return let a:Bird;
}
var pet = getSmallPet();
pet.layEggs();
pet.swim();
//类型保护与区分类型
/**
 * 联合类型非常适合这样的情形，可以接收的值有不同的类型。
 * 当我们想明确地知道是否拿到Fish时会怎么做？
 * javascript里常用来区分2个可能值的方法是检查它们是否存在。
 * 像之前提到的，我们只能访问联合类型的所有类型中共有的成员
 */
/*let pet1=getSmallPet();
if(pet1.swim){
    pet1.swim();
}
else if(pet1.fly){
    pet1.fly();
}*/
//为了让这段代码工作，我们要使用类型断言
var pet2 = getSmallPet();
if (pet2.swim()) {
    pet2.swim();
} else {
    pet2.fly();
}
/**
 *用户自定义的类型保护
 *可以注意到我们使用了多次类型断言。
 * 如果我们只要检查过一次类型，就能够在后面的每个分支里清除pet的类型的话就好了
 *
 * TypeScript里的类型保护机制让它成了现实。
 * 类型保护就是一些表达式,它们会运行时检查以确保在某个作用域里的类型。
 * 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个类型断言
 */
function isFish(one) {
    return one.swim() !== undefined;
}
//在这个例子里，one is Fish 就是类型断言。一个断言是 parameterName is type这种形式，
//parameterName必须是来自于当前函数签名里的一个参数名。
//每当使用一些变量调用isFish时，TypeScript会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的
//‘swim’和‘fly’调用都没有问题了
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
//typeof类型保护
//现在我们回过头来看看怎么使用联合类型书写padLeft代码。
//我们可以像下面这样利用类型断言来写：
function isNumber(x) {
    return typeof x === "number";
}
function isString(y) {
    return typeof y === "string";
}
function padLeft2(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error("Expected string or number,got '" + padding + "'");
}
var SpaceRepeatingPadder = function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}();
var StringPadder = function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}();
function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder(" ");
}
var result1 = getRandomPadder();
if (result1 instanceof SpaceRepeatingPadder) {
    result1; //类型细化为‘SpaceRepeatingPadder’
}
if (result1 instanceof StringPadder) {
    result1;
}
function getName(n) {
    if (typeof n === "string") {
        return n;
    } else {
        return n();
    }
}
var people;
var s = people.Pname;
var s = people.next.Pname;
var s = people.next.next.Pname;
var s = people.next.next.next.Pname;
var UIElement = function () {
    function UIElement() {}
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {} else if (easing === "ease-out") {} else if (easing === "ease-in-out") {} else {}
    };
    return UIElement;
}();
//你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误
var button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); //error: "uneasy" is not allowed here
function createElement(tagName) {}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
    }
}
//完整性检查
//当没有涵盖所有可辨识联合的变化时，我们想让编译可以通知我们。比如，如果我们添加了Triangle到Shape，我们同时还需要更新area；
//多态的this类型
//多态的this类型表示的是某个包含类或接口的子类型。
// 这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承，
// 比如。 在计算器的例子里，在每个操作之后都返回 this类型：
var BasicCalculator = function () {
    function BasicCalculator(value) {
        if (value === void 0) {
            value = 0;
        }
        this.value = value;
    }
    BasicCalculator.prototype.currentVaule = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}();
var v = new BasicCalculator(2).multiply(5).add(1).currentVaule();
console.log(v);
//由于这个类使用了this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。
var ScientificCalculator = function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) {
            value = 0;
        }
        _super.call(this, value);
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator);
var v2 = new ScientificCalculator(2).multiply(5).sin().add(1).currentVaule();
//如果没有this类型，ScientificCalculator就不能够在继承BasicCalculator的同时还保持接口的连贯性。
// multiply将会返回BasicCalculator，它并没有sin方法。
// 然而，使用 this类型，multiply会返回this，在这里就是ScientificCalculator 
//# sourceMappingURL=交叉类型.js.map

//# sourceMappingURL=交叉类型-compiled.js.map