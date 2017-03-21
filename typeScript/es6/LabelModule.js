/**
 * Created by Administrator on 2017/2/15.
 */

var a = 5;
var b = 10;

tag`Hello啊啊啊啊啊啊啊啊   安定区翁群翁群安东卫asdq为${a + b} world ${a * b} ${b / a}`;

function tag(stringArr, ...value1) {
    console.log(stringArr);
    console.log(value1);
}


var total = 30;
var msg = passthru`The Total is ${total} (${total * 1.05} with tax)`;

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

var msg1 = passthru2`The Total is ${total} (${total * 1.05} with tax)`;
function passthru2(literals, ...values) {
    console.log(literals, '1');
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
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
    console.log(templateData);
    var s = templateData[0];
    console.log(arguments);
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        /*console.log(arg,'l');*/
        /*eval(arg);*/
        s += arg.replace(/&/g, "&amp;")
            .replace(/&/g, "&lt;")
            .replace(/&/g, "&gt;");

        s += templateData[i];
    }
    return s;
}

console.log(message);
document.body.innerHTML = message;

let myBooks=[{title:'javascript',author:'zj'},{title:'angularJs',author:'hz'},{title:'vuejs',author:'wh'}]

var libraryHtml = hashTemplate`
    <ul>
       #for book in ${myBooks}
            <li><i>#{book.title}</i>by #{book.author}</li>
       #end
    </ul>
`;

function hashTemplate(){

}

console.log(libraryHtml,'libraryHtml');






