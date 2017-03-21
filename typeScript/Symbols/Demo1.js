/**
 * Created by Administrator on 2017/2/9.
 */
/**
 *自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样
 * symbol类型的值是通过Symbol构造函数创建的。
 */
var sym1 = Symbol();
var sym2 = Symbol("key");
var sym3 = Symbol("key");
console.log(sym2 === sym3);
//像字符串一样，symbols也可以被用做对象属性的键。
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a
);
var _a;
//# sourceMappingURL=Demo1.js.map