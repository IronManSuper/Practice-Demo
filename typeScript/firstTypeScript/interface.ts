/**
 * Created by Administrator on 2017/2/5.
 */

/**
 *TypeScript 接口创建
 */

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person){
    return "Hello,"+person.firstName+" "+person.lastName;
}

var user={firstName:'Jane',lastName:'User'};

document.body.innerHTML=greeter(user);