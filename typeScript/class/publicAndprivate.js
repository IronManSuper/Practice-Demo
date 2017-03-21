/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * 公共，私有与受保护的修饰符
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//typeScript 成员都默认为public
//你也可以明确的将一个成员标记为public
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
/**
 * private
 *当成员被标记成private时，它就不能在声明它的类的外部访问
 */
//异常代码，仅供参考
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
/*new Animal2("Cat").name;*/
/**
 *TypeScript使用的是结构性类型系统
 *
 */
var Animal3 = (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
    }
    return Rhino;
}(Animal3));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal3("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
/*animal=employee;*/ //代码错误，仅供学习参考
/**
 *protected
 * protected 修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
 */
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        _super.call(this, name);
        this.department = department;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello,my name is " + this.name + " and I work in " + this.department;
    };
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); //代码错误，仅供学习参考
/**
 *我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问
 *因为Employee是由Person派生而来的。
 */
var Person2 = (function () {
    function Person2(theName) {
        this.name = theName;
    }
    return Person2;
}());
var Employee4 = (function (_super) {
    __extends(Employee4, _super);
    function Employee4(name, department) {
        _super.call(this, name);
        this.department = department;
    }
    Employee4.prototype.getElevatorPitch = function () {
        return "Hello,my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee4;
}(Person));
var howard2 = new Employee4("Howard", "Sales");
var john = new Person("John");
console.log(howard2.getElevatorPitch);
//# sourceMappingURL=publicAndprivate.js.map