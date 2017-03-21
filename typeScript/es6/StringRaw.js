/**
 * Created by Administrator on 2017/2/15.
 */
console.log(String.raw`Hi\n${2+3}!`);

console.log(String.raw({raw:'test'},0,1,2));

var a = 5, b = 10;
tag`Hello ${a + b} world ${a * b}`;
