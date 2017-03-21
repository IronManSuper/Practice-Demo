/**
 * Created by Administrator on 2017/2/6.
 */

/**
 *
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

let greeter=new Greeter("world");
document.body.innerHTML=greeter.greet();