'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello\u554A\u554A\u554A\u554A\u554A\u554A\u554A\u554A   \u5B89\u5B9A\u533A\u7FC1\u7FA4\u7FC1\u7FA4\u5B89\u4E1C\u536Basdq\u4E3A', ' world ', ' ', ''], ['Hello\u554A\u554A\u554A\u554A\u554A\u554A\u554A\u554A   \u5B89\u5B9A\u533A\u7FC1\u7FA4\u7FC1\u7FA4\u5B89\u4E1C\u536Basdq\u4E3A', ' world ', ' ', '']),
    _templateObject2 = _taggedTemplateLiteral(['The Total is ', ' (', ' with tax)'], ['The Total is ', ' (', ' with tax)']),
    _templateObject3 = _taggedTemplateLiteral(['<p>', ' has sent you a message.</p>'], ['<p>', ' has sent you a message.</p>']),
    _templateObject4 = _taggedTemplateLiteral(['\n    <ul>\n       #for book in ', '\n            <li><i>#{book.title}</i>by #{book.author}</li>\n       #end\n    </ul>\n'], ['\n    <ul>\n       #for book in ', '\n            <li><i>#{book.title}</i>by #{book.author}</li>\n       #end\n    </ul>\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by Administrator on 2017/2/15.
 */

var a = 5;
var b = 10;

tag(_templateObject, a + b, a * b, b / a);

function tag(stringArr) {
    console.log(stringArr);

    for (var _len = arguments.length, value1 = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        value1[_key - 1] = arguments[_key];
    }

    console.log(value1);
}

var total = 30;
var msg = passthru(_templateObject2, total, total * 1.05);

function passthru(literals) {
    console.log(literals);
    var result = '';
    var i = 0;
    while (i < literals.length) {
        result += literals[i++];
        console.log(arguments);
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}

console.log(msg);

var msg1 = passthru2(_templateObject2, total, total * 1.05);
function passthru2(literals) {
    console.log(literals, '1');

    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
    }

    console.log(values);
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }

    output += literals[index];
    return output;
}

console.log(msg1);

//'标签模板'的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容
var sender = '<script type="text/javascript">alert("abc")</script>'; // 恶意代码
var message = SaferHTML(_templateObject3, sender);

function SaferHTML(templateData) {
    console.log(templateData);
    var s = templateData[0];
    console.log(arguments);
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        /*console.log(arg,'l');*/
        /*eval(arg);*/
        s += arg.replace(/&/g, "&amp;").replace(/&/g, "&lt;").replace(/&/g, "&gt;");

        s += templateData[i];
    }
    return s;
}

console.log(message);
document.body.innerHTML = message;

var myBooks = [{ title: 'javascript', author: 'zj' }, { title: 'angularJs', author: 'hz' }, { title: 'vuejs', author: 'wh' }];

var libraryHtml = hashTemplate(_templateObject4, myBooks);

function hashTemplate() {}

console.log(libraryHtml, 'libraryHtml');

//# sourceMappingURL=LabelModule-compiled.js.map