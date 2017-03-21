"use strict";

/**
 * Created by Administrator on 2017/2/5.
 */
var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray);
var myStr = myArray[0];
document.body.innerHTML = myStr;
var Animal = function () {
    function Animal() {}
    return Animal;
}();
var Dog = function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Animal);
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = function () {
    function DigitalClock(h, m) {}
    DigitalClock.prototype.tick = function () {
        console.log("beep  tock");
    };
    return DigitalClock;
}();
var AnalogClock = function () {
    function AnalogClock(h, m) {}
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}();
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.log(digital);
console.log(analog);
//# sourceMappingURL=indexingType.js.map

//# sourceMappingURL=indexingType-compiled.js.map