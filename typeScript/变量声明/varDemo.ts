/**
 * Created by Administrator on 2017/2/5.
 */

function f(){
    var message="Hello,world";

    return message;
}

function f2(){
    var a=10;
    return function g(){
        var b=a+1;
        return b;
    }
}

var g=f2();
console.log(g());

function f3(shouldInitialize:boolean){
    if(shouldInitialize){
        var x=10;
    }

    return x;
}

console.log(f3(true));
console.log(f3(false));

function sumMatrix(matrix:number[][]){
    var sum=0;
    for(var i=0;i<matrix.length;i++){
        var currentRow=matrix[i];
        for(var i=0;i<currentRow.length;i++){
            sum+=currentRow[i];
        }
    }

    return sum;
}
