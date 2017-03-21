/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * 公共，私有与受保护的修饰符
 */

//typeScript 成员都默认为public
//你也可以明确的将一个成员标记为public

class Animal{
    public name:string;

    public constructor(theName:string){
        this.name=theName;
    }

    public move(distanceInMeters:number){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


/**
 * private
 *当成员被标记成private时，它就不能在声明它的类的外部访问
 */

//异常代码，仅供参考
class Animal2{
    private name:string;
    constructor(theName:string){
        this.name=theName;
    }
}

/*new Animal2("Cat").name;*/

/**
 *TypeScript使用的是结构性类型系统
 *
 */

class Animal3{
    private name:string;
    constructor(theName:string){
        this.name=theName;
    }
}

class Rhino extends Animal3{
    constructor(){
        super("Rhino");
    }
}

class Employee{
    private name:string;
    constructor(theName:string){
        this.name=theName;
    }
}

let animal=new Animal3("Goat");
let rhino=new Rhino();
let employee=new Employee("Bob");

animal=rhino;
/*animal=employee;*///代码错误，仅供学习参考


/**
 *protected
 * protected 修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
 */

class Person{
    protected name:string;
    constructor(name:string){
        this.name=name;
    }
}

class Employee2 extends Person{
    private department:string;

    constructor(name:string,department:string){
        super(name);
        this.department=department;
    }

    public getElevatorPitch(){
        return `Hello,my name is ${this.name} and I work in ${this.department}`;
    }
}

let howard=new Employee2("Howard","Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);//代码错误，仅供学习参考

/**
 *我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问
 *因为Employee是由Person派生而来的。
 */

class Person2{
    protected name:string;
    protected constructor(theName:string){
        this.name=theName;
    }
}

class Employee4 extends Person{
    private department:string;
    constructor(name:string,department:string){
        super(name);
        this.department=department;
    }

    public getElevatorPitch(){
        return `Hello,my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2=new Employee4("Howard","Sales");
let john=new Person("John");
console.log(howard2.getElevatorPitch);


