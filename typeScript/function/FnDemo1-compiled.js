"use strict";

/**
 * Created by Administrator on 2017/2/6.
 */
/**
 *typeScript函数
 */
//和javascript一样，TypeScript函数可以创建有名字的函数和匿名函数。
function add(x, y) {
    return x + y;
}
var myAdd = function myAdd(x, y) {
    return x + y;
};
var z = 100;
function addToz(x, y) {
    return x + y + z;
}
//函数类型
//为函数定义类型
function add2(x, y) {
    return x + y;
}
var myAdd2 = function myAdd2(x, y) {
    return x + y;
};
//书写完整函数类型
/**
 *函数类型包含两部分：参数类型和返回值类型。
 */
var myAdd3 = function myAdd3(x, y) {
    return x + y;
};
var myAdd4 = function myAdd4(x, y) {
    return x + y;
};
//推断类型
//尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另外一边没有类型的话，TypeScript编译器会自动识别出类型
//这叫做“按上下文归类”，是类型推论的一种
var myAdd5 = function myAdd5(x, y) {
    return x + y;
};
var myAdd6 = function myAdd6(x, y) {
    return x + y;
};
//可选参数和默认参数
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams", "Sr.");
var result3 = buildName("Bob", "Adams");
/**
 * javascript里，每个参数都是可选的，可传可不传。
 * 没传参的时候，它的值就是undefined。
 * 在TypeScript里我们可以在参数的旁边使用"?"实现可选参数的功能。
 */
//可选参数必须跟在必须参数后面。
function buildName2(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
var rl1 = buildName2("Bob");
var rl2 = buildName2("Bob", "Adams", "Sr.");
var rl3 = buildName2("Bob", "Adams");
//为参数设置默认值
function buildName3(firstName, lastName) {
    if (lastName === void 0) {
        lastName = "Smith";
    }
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}
var rt1 = buildName3("Bob");
var rt2 = buildName3("Bob", undefined);
var rt3 = buildName3("Bob", "Adams", "Sr.");
var rt4 = buildName3("Bob", "Adams");
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(restOfName);
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//# sourceMappingURL=FnDemo1.js.map

//# sourceMappingURL=FnDemo1-compiled.js.map