/**
 * Created by Administrator on 2017/2/6.
 */

/**
 *类继承
 * 包含构造函数的派生类必须调用super()，它会执行基类的构造方法。
 */


class Animal{
    name:string;
    constructor(theName:string){
        this.name=theName;
    }

    move(distanceInMeters:number=0){//创建一个类方法，给其传递一个数值类型的参数，默认值为0；
        console.log(`${this.name} move ${distanceInMeters}m.`);
    }
}

class Snake extends Animal{
    constructor(name:string){
        super(name);//继承父类给父类传参
    }

    move(distanceInMeters=5){
        console.log("Slithering...");
        super.move(distanceInMeters);//继承父类给父类传参
    }
}


class Horse extends Animal{
    constructor(name:string){
        super(name);
    }

    move(distanceInMeters=45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}


let sam=new Snake("Sammy the Python");//实例化一个Snake 对象

let tom:Animal=new Horse("Tommy the Palomino");//实例化一个Horse对象

sam.move();
tom.move(34);
