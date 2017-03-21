/**
 * Created by Administrator on 2017/2/6.
 */

/**
 *重载
 * javaScript本身是一个动态语言。
 * javascript里函数根据传入不同的参数返回不同类型的数据是很常见的。
 */

let suits=["hearts","spades","clubs","diamonds"];
function pickCard(x):any{
    if(typeof x==="object"){
        let pickedCard=Math.floor(Math.random()*x.length);
        return pickedCard;
    }else if(typeof  x==="number"){
        let pickedSuit=Math.floor(x/13);
        return {
            suit:suits[pickedSuit],
            card:x%13
        }
    }
}
let myDeck=[
    {suit:"diamonds",card:2},
    {suit:"spades",card:10},
    {suit:"hearts",card:4}
    ];

let pickedCard1=myDeck[pickCard(myDeck)];

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


/*******************************/
let suits3=["hearts","spades","clubs","diamonds"];

function pickCard3(x:{suit:string;card:string;}[]):number;
function pickCard3(x:number):{suit:number;card:number;};
function pickCard3(x):any{
    if(typeof x==="object"){
        let pickedCard=Math.floor(Math.random()*x.length);
        return pickedCard;
    }else if(typeof x==="number"){
        let pickedSuit=Math.floor(x/13);
        return { suit: suits3[pickedSuit], card: x % 13 };
    }
}

let myDeck3=[
    {suit:"diamonds",card:2},
    {suit:"spades",card:10},
    {suit:"hearts",card:4}
];

let pickedCard3=myDeck3[pickCard3(myDeck3)];
console.log("card:"+pickedCard3.card+" of "+pickedCard3.suit);

let pickedCard4=pickCard3(15);
console.log("card:"+pickedCard4.card+" of "+pickedCard4.suit);