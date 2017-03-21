/**
 * Created by Administrator on 2017/2/5.
 */

/**
 * 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值。你可以在属性名前用readonly来指定只读属性；
 */

interface Point{
    readonly x:number;
    readonly y:number;
}

let p1:Point={x:10,y:20};

/*p1.x=5;*/


let a:number[]=[1,2,3,4];
let ro:ReadonlyArray<number>=a;
/*ro[0]=12;
ro.push(5);
ro.length=100;*/
a=ro as number[];
console.log(a);

