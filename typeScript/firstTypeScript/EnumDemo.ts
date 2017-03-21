/**
 * Created by Administrator on 2017/2/5.
 */

/**
 * 枚举类型enum
 */

enum Color{Red,Green,Blue}

console.log(Color);

let c:Color=Color.Green;




enum Color2{Red=1,Green,Blue}
let c2:Color2=Color2.Green;

document.body.innerHTML=c+" "+c2;