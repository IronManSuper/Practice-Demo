/**
 * Created by Administrator on 2017/2/16.
 */
const REGEX=/a/g;

REGEX.lastIndex=2;

const match=REGEX.exec('xaya');
console.log(match);

let a=match.index;

console.log(a);



//sticky属性
//与Y修饰符相匹配，ES6的正则对象多了sticky属性，表示是否设置了Y修饰符


//flags属性
//ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符。

//ES5的source返回正则表达式的正文
/abc/ig.source;

//ES6的flags属性
//返回正则表达式的修饰符
/abc/ig.flags;

console.log(12<11);


console.log(Number.MAX_SAFE_INTEGER===Math.pow(2,53)-1);

console.log(Number.MAX_SAFE_INTEGER===9007199254740991);

console.log(Number.MIN_SAFE_INTEGER===-Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER===-9007199254740991);


Number.isSafeInteger(1.2); // false
Number.isSafeInteger(9007199254740990); // true


var y=Math.pow(Math.abs(8),1/3);
console.log(y);


console.log(Math.clz32(0),'1');
console.log(Math.clz32(1),'2');
console.log(Math.clz32(1<<1),'3');


let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

console.log(Array.from(arrayLike));



let a1=[1,2,3,4,5].copyWithin(0,3,4);
console.log(a1);

let a2=[1,2,3,4,5].copyWithin(0,-2,-1);
console.log(a2);

let a3=[1, 2, 3].includes(2);
console.log(a3);

let a4=[,'a','b',,].copyWithin(2,0); // [,"a",,"a"]
console.log(a4);

let a5=[...[,'a'].entries()];
console.log(a5);