/**
 * Created by Administrator on 2017/2/7.
 */
/**
 *TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型
 */
//最佳通用类型
var x = [0, 1, null];
/**
 *为了推断x的类型，我们必须考虑所有元素的类型。
 *这里有两种选择： number和null。
 *计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。
 */
var a = { n: 1 };
var b = a;
a.x = { n: 2 };
console.log(a.x, b.x);
//# sourceMappingURL=typeDemo1.js.map