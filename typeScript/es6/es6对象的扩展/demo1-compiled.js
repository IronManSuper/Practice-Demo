'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [gen, gen2].map(regeneratorRuntime.mark);

/**
 * Created by Administrator on 2017/2/21.
 */
var foo = 'bar';
var baz = { foo: foo };

function a(x, y) {
    return { x: x, y: y };
}

var o = {
    method: function method() {
        return "Hello";
    }
};

var birth = '2000/01/01';
var Person = {
    name: '张三',
    birth: birth,
    hello: function hello() {
        console.log('我是名字是', this.name);
    }
};

//commonjs模块输出变量，就非常适合使用简洁写法
var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {};
}

/*module.exports={
    getItem,setItem,clear
};*/

//属性的赋值器(setter)和取值器(getter),事实上也是采用这种写法

var cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了');
        }
        this._wheels = value;
    }
};

cart.wheels = 6;
console.log(cart.wheels);

function gen(x) {
    var result;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return x + 2;

                case 2:
                    result = _context.sent;
                    return _context.abrupt('return', result);

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var g = gen();
console.log(g.next(3));
console.log(g.next(4));

function gen2(x) {
    var result;
    return regeneratorRuntime.wrap(function gen2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return x + 2;

                case 3:
                    result = _context2.sent;
                    _context2.next = 9;
                    break;

                case 6:
                    _context2.prev = 6;
                    _context2.t0 = _context2['catch'](0);

                    console.log(_context2.t0);

                case 9:
                    return _context2.abrupt('return', y);

                case 10:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this, [[0, 6]]);
}
var g2 = gen2(2);
console.log(g.next());
//使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获。
//这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的
//g.throw('出错了')
//console.log(g.throw('出错了'));


var obj = {
    m: regeneratorRuntime.mark(function m() {
        return regeneratorRuntime.wrap(function m$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return 'hello world';

                    case 2:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, m, this);
    })
};
var obj1 = {};
obj1.foo = 123;
obj1['a' + 'bc'] = 123;

var prokey = 'key';
var obj3 = (_obj = {}, _defineProperty(_obj, prokey, true), _defineProperty(_obj, 'a' + 'bc', 123), _obj);

console.log(obj3[prokey]);
console.log(obj3['a' + 'bc']);

var lastWord = 'last world';

var e1 = _defineProperty({
    'first word': 'Hello'
}, lastWord, 'world');
console.log(e1['first word']);
console.log(e1[lastWord]);
console.log(e1['last world']);
console.log(e1);

function Pasta(grain, width, shape) {
    // Define properties.
    this.grain = grain;
    this.width = width;
    this.shape = shape;
    this.toString = function () {
        return this.grain + ", " + this.width + ", " + this.shape;
    };
}

// Create an object.
var spaghetti = new Pasta("wheat", 0.2, "circle");

// Get the own property names.
var arr = Object.getOwnPropertyNames(spaghetti);
document.write(arr);

var proto = {};

var object1 = { x: 10 };
Object.setPrototypeOf(object1, proto);

proto.y = 20;
proto.z = 40;
console.log(object1);
console.log(object1.x, object1.y, object1.z);

function Rectangle() {}

var rec = new Rectangle();
var a2 = Object.getPrototypeOf(rec) === Rectangle.prototype;
console.log(a2);

var keys = Object.keys,
    values = Object.values,
    entries = Object.entries;

var obj2 = { a: 1, b: 2, c: 3 };
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = keys(obj2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        console.log(key, 'key');
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = values(obj2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var val = _step2.value;

        console.log(val, 'key');
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = entries(obj2)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _key = _step3$value[0],
            value = _step3$value[1];

        console.log([_key, value]);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

//# sourceMappingURL=demo1-compiled.js.map