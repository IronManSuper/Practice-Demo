"use strict";

/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * this和箭头函数
 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function createCardPicker() {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
//console.log(cardPicker);
var pickedCard = cardPicker();
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: createCardPicker
};
//# sourceMappingURL=thisDemo.js.map

//# sourceMappingURL=thisDemo-compiled.js.map