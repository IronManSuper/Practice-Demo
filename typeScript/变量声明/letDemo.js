/**
 * Created by Administrator on 2017/2/5.
 */
/**
 * let
 * 它使用的是词法作用域或块作用域
 */
/*

function f(input:boolean){
    let a=100;
    if(input){
        let b=a+1;
        return b;
    }
    return b;
}*/
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var _loop_1 = function(i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
/**
 * 对象展开还有其它一些意想不到的限制。首先它只包含自身的可枚举的属性。
 * 首先，当你展开一个对象实例时你会丢失其方法
 */
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
console.log(bothPlus);
var custom1 = [0, first, second, 5];
console.log(custom1);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = { defaults: defaults, food: "rich" };
console.log(search);
var customObject = { defaults: defaults, food: "rich" };
console.log(customObject);
var customObject2 = { food: "rich", defaults: defaults };
console.log(customObject2);
//# sourceMappingURL=letDemo.js.map