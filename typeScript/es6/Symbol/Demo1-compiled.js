'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Administrator on 2017/2/22.
 */
var s1 = Symbol('foo');

var s2 = Symbol('bar');

console.log(s1);

console.log(s2);

var obj = {
    toString: function toString() {
        return 'abc';
    }
};

var sym = Symbol(obj);
console.log(sym);

var mySymbol = Symbol();

var a = {};
a[mySymbol] = 'Hello';
console.log(a);
var a2 = _defineProperty({}, mySymbol, 'Hello');

console.log(a2);

var a3 = {};
Object.defineProperty(a, mySymbol, { value: 'Hello' });

console.log(a3);

//# sourceMappingURL=Demo1-compiled.js.map