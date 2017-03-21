/**
 * Created by Administrator on 2017/2/9.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.numberRegexp = /^[0-9]+$/;
//导出语句很便利，因为我可能需要对导出的部分重命名，所以上面的例子可以这样改写：
var ZipCodeValidator1 = (function () {
    function ZipCodeValidator1() {
    }
    ZipCodeValidator1.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator1;
}());
exports.ZipCodeValidator1 = ZipCodeValidator1;
exports.mainValidator = ZipCodeValidator1;
__export(require("./ZipCodeValidator"));
//导入
//模块的导入操作与导出一样简单。可以使用以下import形式之一来导入其它模块中的导出内容
//# sourceMappingURL=module.js.map