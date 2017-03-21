/**
 * Created by Administrator on 2017/2/6.
 */
/**
 * this和箭头函数
 */
var _this = this;
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
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
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: , this: Deck1 }, _a = (void 0).return,  = _a === void 0 ? function () {
    var pickedCard = Math.floor(Math.random() * 52);
    var pickedSuit = Math.floor(pickedCard / 13);
    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
} : _a;
;
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker1();
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
//# sourceMappingURL=thisDemo.js.map