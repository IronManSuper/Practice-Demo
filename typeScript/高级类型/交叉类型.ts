/**
 * Created by Administrator on 2017/2/8.
 */
/**
 *交叉类型
 * 交叉类型是将多个类型合并为一个类型。
 * 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特效。
 * 例如，Person & Serializable & Loggable同时是Person和Serializable和Loggable。
 * 就是说这个类型的对象同时拥有了三种类型的成员。
 */

/**
 * 我们大多是混入或其它不合适典型面向对象模型的地方看到交叉类型的使用。
 */

//交叉类型

function extend<T,U>(first:T,second:U):T & U{
    let  result=<T & U>{};
    for(let id in first){
        (<any>result)[id]=(<any>first)[id];
    }

    for(let id in second){
        if(!result.hasOwnProperty(id)){
            (<any>result)[id]=(<any>second)[id];
        }
    }
    return result;
}

class Person{
    constructor(public name:string){

    }
}

interface Loggable{
    log():void;
}

class ConsoleLogger implements Loggable{
    log(){

    }
}

var jim=extend(new Person("Jim"),new ConsoleLogger());
var n=jim.name;
jim.log();

//联合类型
/**
 *联合类型与交叉类型很有关联，但是使用上却完全不同。
 * 偶尔你会遇到这种情况，一个代码库希望传入number或string类型的参数。
 */

function padLeft(value:string,padding:any){
    if(typeof padding==="number"){
        return Array(padding+1).join(" ")+value;
    }
    if(typeof padding==="string"){
        return padding+value;
    }

    throw new Error(`Expected string or number,got '${padding}'.`);
}

padLeft("Hello world",4);
//console.log(padLeft("hello world",{a:2,b:3}));

function padLeft1(value:string,padding:boolean|number){
    if(typeof padding==="number"){
        return Array(padding+1).join(" ")+value;
    }
    if(typeof padding==="boolean"){
        return padding+value;
    }

    throw new Error(`Expected string or number,got '${padding}'.`);
}

let indentedString = padLeft1("Hello world", true);
console.log(indentedString);

//联合类型表示一个值可以是几种类型之一。
//我们用竖线(|)分隔每个类型，所以number|string|boolean表示一个值可以是number，string或boolean

//如果一个值是联合类型，我们只能访问此联合的所有类型里共有的成员
interface Bird{
    fly();
    layEggs();
}

interface Fish{
    swim();
    layEggs();
}


function getSmallPet():Bird|Fish{
     //return let a:Bird;
}

let pet=getSmallPet();
pet.layEggs();
(<Fish>pet).swim();


//类型保护与区分类型
/**
 * 联合类型非常适合这样的情形，可以接收的值有不同的类型。
 * 当我们想明确地知道是否拿到Fish时会怎么做？
 * javascript里常用来区分2个可能值的方法是检查它们是否存在。
 * 像之前提到的，我们只能访问联合类型的所有类型中共有的成员
 */

/*let pet1=getSmallPet();
if(pet1.swim){
    pet1.swim();
}
else if(pet1.fly){
    pet1.fly();
}*/

//为了让这段代码工作，我们要使用类型断言
let pet2=getSmallPet();
if((<Fish>pet2).swim()){
    (<Fish>pet2).swim()
}else{
    (<Bird>pet2).fly();
}

/**
 *用户自定义的类型保护
 *可以注意到我们使用了多次类型断言。
 * 如果我们只要检查过一次类型，就能够在后面的每个分支里清除pet的类型的话就好了
 *
 * TypeScript里的类型保护机制让它成了现实。
 * 类型保护就是一些表达式,它们会运行时检查以确保在某个作用域里的类型。
 * 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个类型断言
 */

function isFish(one:Fish | Bird):one is Fish{
    return (<Fish>one).swim() !==undefined;
}

//在这个例子里，one is Fish 就是类型断言。一个断言是 parameterName is type这种形式，
//parameterName必须是来自于当前函数签名里的一个参数名。

//每当使用一些变量调用isFish时，TypeScript会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的

//‘swim’和‘fly’调用都没有问题了
if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}


//typeof类型保护
//现在我们回过头来看看怎么使用联合类型书写padLeft代码。
//我们可以像下面这样利用类型断言来写：
function isNumber(x:any):x is number{
    return typeof x==="number";
}

function isString(y:any):y is string {
    return typeof y==="string";
}

function padLeft2(value:string,padding:string|number){
    if(isNumber(padding)){
        return Array(padding+1).join(" ")+value;
    }
    if(isString(padding)){
        return padding+value;
    }
    throw new Error(`Expected string or number,got '${padding}'`);
}

//instanceof类型保护
//instanceof类型保护是通过构造函数来细化类型的一种方式。

interface Padder{
    getPaddingString():string;
}

class SpaceRepeatingPadder implements Padder{
    constructor(private numSpaces:number){}
    getPaddingString(){
        return Array(this.numSpaces+1).join(" ");
    }
}

class StringPadder implements Padder{
    constructor(private value:string){}
    getPaddingString(){
        return this.value;
    }
}

function getRandomPadder(){
    return Math.random()<0.5?new SpaceRepeatingPadder(4) : new StringPadder(" ");
}

let result1:Padder=getRandomPadder();

if(result1 instanceof SpaceRepeatingPadder){
    result1;//类型细化为‘SpaceRepeatingPadder’
}

if(result1 instanceof StringPadder){
    result1;
}

/**
 *instanceof的右侧要求是一个构造函数，TypeScript将细化为：
 * 1、此构造函数的prototype属性的类型，如果它的类型不为any的话。
 * 2、构造签名所返回的类型的联合
 */



//类型别名
//类型别名会给一个类型起个新名字。类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型

type Name=string;
type NameResolver=()=>string;
type NameOrResolver=Name|NameResolver;
function getName(n:NameOrResolver):Name{
    if(typeof n==="string"){
        return n;
    }else{
        return n();
    }
}

//同接口一样，类型别名也可以是泛型-我们可以添加类型参数并且在别名声明的右侧传入
type Container<T>={value:T};

//我们也可以使用类型别名在属性里引用自己
type Tree<T>={
    value:T;
    left:Tree<T>;
    right:Tree<T>;
}

//与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型
type LinkedList<T>=T & {next:LinkedList<T>};

interface Person{
    Pname:string;
}

var people:LinkedList<Person>;
var s=people.Pname;
var s=people.next.Pname;
var s=people.next.next.Pname;
var s=people.next.next.next.Pname;


type Alias={num:number};
interface Interfaced{
    num:number;
}

declare function aliased(arg:Alias):Alias;
declare function interfaced(arg:Interfaced):Interfaced;

//字符串字面量类型
//字符串字面量类型允许你指定字符串必须的固定值。在实际应用中，字符串字面量类型可以与联合类型，类型保护和类型别名很好的配合。
//通过结合使用这些特效，你可以实现类似枚举的字符串。


type Easing="ease-in"|"ease-out"|"ease-in-out";
class UIElement{
    animate(dx:number,dy:number,easing:Easing){
        if(easing==="ease-in"){

        }else if(easing==="ease-out"){

        }else if(easing==="ease-in-out"){

        }else{
            //  error! should not pass null or undefined.
        }
    }
}

//你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误
let button=new UIElement();
button.animate(0,0,"ease-in");
button.animate(0,0,"uneasy");//error: "uneasy" is not allowed here

//字符串字面量类型还可以用于区分函数重载
function createElement(tagName:"img"):HTMLImageElement;
function createElement(tagName:"input"):HTMLInputElement;
function createElement(tagName:"string"):Element{

}

//可辨识联合
//你可以合并字符串字面量类型，联合类型，类型保护和类型别名来创建一个叫做可辨识联合的高级模式，
//它也称作标签联合或代数数据类型。
//可辨识联合在函数式编程很有用处。
//一些语言会自动地为你辨识联合；
//而TypeScript则基于已有的javascript模式
//它具有4个要素
//1、具有普通的字符串字面量属性——可辨识的特征
//2、一个类型别名包含了那些类型的联合一联合
//3、此属性上的类型保护

interface Square{
    kind:"square";
    size:number;
}

interface Rectangle{
    kind:"rectangle";
    width:number;
    height:number;
}

interface Circle{
    kind:"circle";
    radius:number;
}

/**
 *首先我们声明了将要联合的接口。
 *  每个接口都有 kind属性但有不同的字符串字面量类型。
 *  kind属性称做可辨识的特征或标签。 其它的属性则特定于各个接口。
 *  注意，目前各个接口间是没有联系的。 下面我们把它们联合到一起：
 */

type Shape=Square | Rectangle | Circle;

function area(s:Shape){
    switch(s.kind){
        case "square":return s.size *s.size;
        case "rectangle":return s.height*s.width;
        case "circle":return Math.PI*s.radius **2;
    }
}

//完整性检查
//当没有涵盖所有可辨识联合的变化时，我们想让编译可以通知我们。比如，如果我们添加了Triangle到Shape，我们同时还需要更新area；



//多态的this类型
//多态的this类型表示的是某个包含类或接口的子类型。
// 这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承，
// 比如。 在计算器的例子里，在每个操作之后都返回 this类型：

class BasicCalculator{
    public constructor(protected value:number=0){}
    public currentVaule():number{
        return this.value;
    }

    public add(operand:number):this{
        this.value +=operand;
        return this;
    }

    public multiply(operand:number):this{
        this.value *=operand;
        return this;
    }
}

let v=new BasicCalculator(2).multiply(5).add(1).currentVaule();
console.log(v);

//由于这个类使用了this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。

class ScientificCalculator extends BasicCalculator{
    public constructor(value=0){
        super(value);
    }

    public sin(){
        this.value=Math.sin(this.value);
        return this;
    }
}

let v2=new ScientificCalculator(2).multiply(5).sin().add(1).currentVaule();
//如果没有this类型，ScientificCalculator就不能够在继承BasicCalculator的同时还保持接口的连贯性。
// multiply将会返回BasicCalculator，它并没有sin方法。
// 然而，使用 this类型，multiply会返回this，在这里就是ScientificCalculator