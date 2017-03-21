'use strict';

var _templateObject = _taggedTemplateLiteral(['Hi\n', '!'], ['Hi\\n', '!']),
    _templateObject2 = _taggedTemplateLiteral(['Hello ', ' world ', ''], ['Hello ', ' world ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by Administrator on 2017/2/15.
 */
console.log(String.raw(_templateObject, 2 + 3));

console.log(String.raw({ raw: 'test' }, 0, 1, 2));

var a = 5,
    b = 10;
tag(_templateObject2, a + b, a * b);

//# sourceMappingURL=StringRaw-compiled.js.map