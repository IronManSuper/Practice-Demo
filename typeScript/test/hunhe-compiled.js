"use strict";

/**
 * Created by Administrator on 2017/2/13.
 */
var Disposable = function () {
    function Disposable() {}
    Disposable.prototype.dispose = function () {
        this.isDiposed = true;
    };
    return Disposable;
}();
var Activatable = function () {
    function Activatable() {}
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}();
var SmartObject = function () {
    function SmartObject() {
        var _this = this;
        this.isDisposed = false;
        this.isActive = false;
        setInterval(function () {
            return console.log(_this.isActive + ":" + _this.isDisposed);
        });
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}();
applyMixins(SmartObject, [Disposable, Activatable]);
var smartobj = new SmartObject();
setTimeout(function () {
    return smartobj.interact();
}, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtors) {
        console.log(baseCtors.prototype);
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
//# sourceMappingURL=hunhe.js.map

//# sourceMappingURL=hunhe-compiled.js.map