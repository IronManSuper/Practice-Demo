/**
 * Created by Administrator on 2017/2/21.
 */
var foo='bar';
var baz={foo};


function a(x,y){
    return {x,y};
}

var o={
    method(){
        return "Hello";
    }
};


var birth='2000/01/01';
var Person={
    name:'张三',
    birth,
    hello(){
        console.log('我是名字是',this.name);
    }
};


//commonjs模块输出变量，就非常适合使用简洁写法
var ms={};
function getItem(key){
    return key in ms?ms[key]:null;
}

function setItem(key,value){
    ms[key]=value;
}

function clear(){
    ms={};
}

/*module.exports={
    getItem,setItem,clear
};*/

//属性的赋值器(setter)和取值器(getter),事实上也是采用这种写法

var cart={
    _wheels:4,
    get wheels(){
        return this._wheels;
    },
    set wheels(value){
        if(value<this._wheels){
            throw new Error('数值太小了');
        }
        this._wheels=value;
    }
};

cart.wheels=6;
console.log(cart.wheels);

function* gen(x){
  var result=yield x+2;
    return result;
}

var g=gen();
console.log(g.next(3));
console.log(g.next(4));


function* gen2(x){
    try{
        var result=yield x+2;
    }catch(e){
        console.log(e);
    }
    return y;
}
var g2=gen2(2);
console.log(g.next());
//使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获。
//这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的
//g.throw('出错了')
//console.log(g.throw('出错了'));


var obj={
    * m(){
        yield 'hello world';
    }
};
let obj1={};
obj1.foo=123;
obj1['a'+'bc']=123;


let prokey='key';
let obj3={
    [prokey]:true,
    ['a'+'bc']:123
};

console.log(obj3[prokey]);
console.log(obj3['a'+'bc']);

var lastWord='last world';

var e1={
    'first word':'Hello',
    [lastWord]:'world'
};
console.log(e1['first word']);
console.log(e1[lastWord]);
console.log(e1['last world']);
console.log(e1);

function Pasta(grain, width, shape) {
    // Define properties.
    this.grain = grain;
    this.width = width;
    this.shape = shape;
    this.toString = function () {
        return (this.grain + ", " + this.width + ", " + this.shape);
    }
}

// Create an object.
var spaghetti = new Pasta("wheat", 0.2, "circle");

// Get the own property names.
var arr = Object.getOwnPropertyNames(spaghetti);
document.write (arr);

let proto={};

let object1={x:10};
Object.setPrototypeOf(object1,proto);

proto.y=20;
proto.z=40;
console.log(object1);
console.log(object1.x,object1.y,object1.z);

function Rectangle(){

}

var rec=new Rectangle();
let a2=Object.getPrototypeOf(rec)===Rectangle.prototype;
console.log(a2);

let {keys,values,entries}=Object;
let obj2={a:1,b:2,c:3};
 for(let key of keys(obj2)){
     console.log(key,'key');
 }

for(let val of values(obj2)){
    console.log(val,'key');
}

for(let [key,value] of entries(obj2)){
    console.log([key,value]);
}


