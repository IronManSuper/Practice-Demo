/**
 * Created by Administrator on 2017/2/22.
 */
var s1=Symbol('foo');

var s2=Symbol('bar');

console.log(s1);

console.log(s2);

const obj={
    toString(){
        return 'abc';
    }
};

const sym=Symbol(obj);
console.log(sym);


var mySymbol=Symbol();

var a={};
a[mySymbol]='Hello';
console.log(a);
var a2={
    [mySymbol]:'Hello'
};

console.log(a2);

var a3={};
Object.defineProperty(a,mySymbol,{value:'Hello'});

console.log(a3);