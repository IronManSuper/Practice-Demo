/**
 * Created by Administrator on 2017/2/10.
 */

function* fibs(){
    let a=0;
    let b=1;
    while(true){
        yield a;
        [a,b]=[a,a+b];
        console.log(a);
    }
}

let [first,second,third,fourth,fifth,sixth]=fibs();

console.log(sixth);


function f(){
    console.log('aaaa');
}

let [x=f()]=[undefined];
console.log(x);

