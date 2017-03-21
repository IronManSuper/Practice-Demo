/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * this和箭头函数
 */

let deck={
    suits:["hearts","spades","clubs","diamonds"],
    cards:Array(52),
    createCardPicker:function(){
        return function(){
            let pickedCard=Math.floor(Math.random()*52);
            let pickedSuit=Math.floor(pickedCard/13);
            return {suit:this.suits[pickedSuit],card:pickedCard%13};
        }
    }
};

let cardPicker=deck.createCardPicker();
//console.log(cardPicker);
let pickedCard=cardPicker();

//alert("card:"+pickedCard.card+" of "+pickedCard.suit);

interface Card {
    suit: string;
    card: number;
}
interface Deck1 {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck1): () => Card;
}
let deck1: Deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck1){
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
};

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);