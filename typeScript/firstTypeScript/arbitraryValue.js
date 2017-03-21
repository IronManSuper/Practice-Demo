/**
 * Created by Administrator on 2017/2/5.
 */
/**
 *任意值
 * any类型
 * 有时候，我们会想要为那些在编程阶段还不清除类型的变量指定一个类型
 * 我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查
 *
 */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var list = [1, true, "free"];
list[1] = 100;
console.log(list);
