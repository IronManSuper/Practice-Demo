/**
 * Created by Administrator on 2017/2/6.
 */

/**
 *抽象类
 * 抽象类作为其它派生类的基类。
 * 它们一般不会直接被实例化。
 * 不同的接口，抽象类可以包含成员的实现细节
 * abstract关键字是用于定义抽象类和在抽象类内部定义的抽象方法
 */

abstract class Animal{
    abstract makeSound():void;
    move():void{
        console.log('roaming the earch...');
    }
}


/**
 *抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 * 抽象方法的语法与接口方法相似。
 * 两者都是定义在方法签名但不包含方法体。
 * 然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符
 */


abstract class Department{
    constructor(public name:string){

    }

    printName():void{
        console.log('Department name:'+this.name);
    }

    abstract printMeeting():void;//必须要在派生类中实现
}

class AccountingDepartment extends Department{
    constructor(){
        super('Accounting and Auditing');//constructor in derived classes must call super()
    }
    printMeeting():void{
        console.log('The Accounting Department meets each Monday at 10am.')
    }

    generateReports():void{
        console.log('Generating accounting reports');
    }
}

//let department:Department;
//department=new Department();//无法创建一个抽象了的一个实例
let department=new AccountingDepartment();

department.printName();
department.printMeeting();
department.generateReports();//代码错误，仅供学习参考


/**
 *高级技巧
 * 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。
 * 首先就是类的实例的类型
 */


class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }

    greet(){
        return "Hello,"+this.greeting;
    }
}
//这里，我们写了 let greeter:Greeter,意思是Greeter类的实例的类型是Greeter.
//这对于用过其他面向对象语言的程序员来讲是老习惯了。

let greeter:Greeter;
console.log(greeter);
greeter=new Greeter('world');
console.log(greeter.greet());


class Greeter2{
    static standardGreeting="Hello,there";
    greeting:string;
    greet(){
        if(this.greeting){
            return "Hello,"+this.greeting;
        }else{
            return Greeter2.standardGreeting;
        }
    }
}

let greeter2:Greeter2;
greeter2=new Greeter2();
console.log(greeter2.greet());

let greeterMaker:typeof Greeter2=Greeter2;
greeterMaker.standardGreeting="Hey there";

let greeter3:Greeter2=new greeterMaker();
console.log(greeter3.greet());

class Point{
    x:number;
    y:number;
}
interface Point3d extends Point{
    z:number;
}

let point3d:Point3d={x:1,y:2,z:3};
console.log(point3d);


