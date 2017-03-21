"use strict";

/**
 * Created by Administrator on 2017/2/5.
 */
/**
 *TypScript的核心原则之一是对值所具有的Shape进行类型检查。它有时被称作“鸭式辩型法”或“结构性子类型化”
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */
function printLabel(labelledObj) {
  console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
  console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 object 2" };
printLabel2(myObj2);
//# sourceMappingURL=Demo1.js.map

//# sourceMappingURL=Demo1-compiled.js.map