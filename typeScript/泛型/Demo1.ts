/**
 * Created by Administrator on 2017/2/7.
 */
/**
 * 泛型
 */

//创建泛型的两种方式
function identity<T>(arg:T):T{
    return arg;
}

//第一种是，传入所有的参数，包含类型参数
let output=identity<string>("myString");

//第二种方法更普遍，利用了类型推论--即编译器会根据传入的参数自动帮助我们确定T的类型
let output1=identity("myString");

let myIdentity: <T>(arg: T) => T = identity;


//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应就可以了
function identity1<T>(arg:T):T{
    return arg;
}

let myIdentity1:<U>(arg:U)=>U=identity1;

//我们还可以使用带有调用签名的对象字面量来定义泛型函数
function identity2<T>(arg:T):T{
    return arg;
}

let myIdentity2:{<T>(arg:T):T}=identity2;

//泛型接口
interface GenericIdentityFn{
    <T>(arg:T):T;
}

function identity3<T>(arg:T):T{
    return arg;
}
let myIdentity3:GenericIdentityFn=identity;


interface GenericIdentityFn1<T>{
    (arg:T):T;
}
function identity4<T>(arg:T):T{
    return arg;
}
let myIdentity4:GenericIdentityFn1<number>=identity4;

//泛型类
//泛型类看上去与泛型接口差不多。泛型类使用(<>)括起泛型类型，跟在类名后面。
class GenerricNumber<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T;
}

let myGenericNumer=new GenerricNumber<number>();
myGenericNumer.zeroValue="";
myGenericNumer.add=function(x,y){
    return x+y;
};

//其他类型去限制泛型
let stringNumberic=new  GenerricNumber<string>();
stringNumberic.zeroValue="德玛西亚";
stringNumberic.add=function(x,y){
  return x+y;
};
alert(stringNumberic.add(stringNumberic.zeroValue,"test"));

interface  LengthWise{
    length:number;
}

function loggingIdentity<T extends LengthWise>(arg:T):T{
    console.log(arg.length);
    return arg;
}

//loggingIdentity(3);
loggingIdentity({length:10,value:3});


//在泛型约束中使用类型参数
//你可以声明一个类型参数，且它被另一个类型参数所约束。

function copyFields<T extends U,U>(target:T,source:U):T{
    for(let id in source){
        target[id]=source[id];
    }
    return target;
}

let x={a:1,b:2,c:3,d:4};
let result1=copyFields(x,{b:10,d:20});
console.log(result1);
//let result2=copyFields(x,{Q:90});//error: property 'Q' isn't declared in 'x'.
//console.log(result2);

//在泛型里使用类类型
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
function create<T>(c:{new():T;}):T{
    return new c();
}

class Beekeeper{
    hasMask:boolean;
}
class Zookeeper{
    nametag:string;
}
class Animal{
    numLegs:number;
}
class Bee extends Animal{
    keeper:Beekeeper;
}
class Lion extends Animal{
    keeper:Zookeeper;
}

function findKeeper<A extends Animal,K>(a:{new():A;prototype:{keeper:K}}):K{
    return a.prototype.keeper;
}

let result3=findKeeper(Lion).nametag;
console.log(result3);