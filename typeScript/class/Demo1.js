/**
 * Created by Administrator on 2017/2/6.
 */
/**
 *
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
document.body.innerHTML = greeter.greet();
//# sourceMappingURL=Demo1.js.map