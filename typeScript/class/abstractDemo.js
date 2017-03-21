/**
 * Created by Administrator on 2017/2/6.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *抽象类
 * 抽象类作为其它派生类的基类。
 * 它们一般不会直接被实例化。
 * 不同的接口，抽象类可以包含成员的实现细节
 * abstract关键字是用于定义抽象类和在抽象类内部定义的抽象方法
 */
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal;
}());
/**
 *抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 * 抽象方法的语法与接口方法相似。
 * 两者都是定义在方法签名但不包含方法体。
 * 然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符
 */
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name:' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        _super.call(this, 'Accounting and Auditing'); //constructor in derived classes must call super()
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports');
    };
    return AccountingDepartment;
}(Department));
//let department:Department;
//department=new Department();//无法创建一个抽象了的一个实例
var department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports(); //代码错误，仅供学习参考
/**
 *高级技巧
 * 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。
 * 首先就是类的实例的类型
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
//这里，我们写了 let greeter:Greeter,意思是Greeter类的实例的类型是Greeter.
//这对于用过其他面向对象语言的程序员来讲是老习惯了。
var greeter;
console.log(greeter);
greeter = new Greeter('world');
console.log(greeter.greet());
var Greeter2 = (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello," + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = "Hello,there";
    return Greeter2;
}());
var greeter2;
greeter2 = new Greeter2();
console.log(greeter2.greet());
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there";
var greeter3 = new greeterMaker();
console.log(greeter3.greet());
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
//# sourceMappingURL=abstractDemo.js.map