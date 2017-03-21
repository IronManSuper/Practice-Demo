/**
 * Created by Administrator on 2017/2/28.
 */
/*var foo='bar';
var baz={[foo]:'abc'};

console.log(baz[foo]);
console.log(baz['bar']);

const KeyA={a:1};
const KeyB={b:2};

const myObject={
    [KeyA]:'valueA',
    [KeyB]:'valueB'
};*/

//[KeyA]和[KeyB]得到的都是[object,object],所以[KeyB]会把[KeyA]覆盖掉，
//而myObject最后只有一个[object object]属性
//console.log(myObject[KeyA]);


const person={
    sayName(){
        console.log('Hello!');
    }
};

console.log(person.sayName().name);