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


function sumMatrix(matrix:number[][]){
    let sum=0;
    for(let i=0;i<matrix.length;i++){
        var currentRow=matrix[i];
        for(let i=0;i<currentRow.length;i++){
            sum+=currentRow[i];
        }
    }

    return sum;
}

for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    },100*i);
}


/**
 * 对象展开还有其它一些意想不到的限制。首先它只包含自身的可枚举的属性。
 * 首先，当你展开一个对象实例时你会丢失其方法
 */

let first=[1,2];
let second=[3,4];
let bothPlus=[0,...first,...second,5];
console.log(bothPlus);

let custom1=[0,first,second,5];
console.log(custom1);

let defaults={food:"spicy",price:"$$",ambiance:"noisy"};
let search={...defaults,food:"rich"};
console.log(search);
let customObject={defaults,food:"rich"};
console.log(customObject);

let  customObject2={food:"rich",...defaults};
console.log(customObject2);