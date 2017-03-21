/**
 * Created by Administrator on 2017/2/9.
 */

/**
 *模块
 * 内部模块现在称作命名空间
 * 外部模块现在则简称为模块
 */


//模块在其自身的作用域里执行，而不是在全局作用域里；
//这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，
//除非你明确地使用export形式之一导出它们。
//相反，如果我们想使用其它模块导出变量，函数，类，接口等的时候，
//你必须要导入它们，可以使用import形式之一。

//export 导出模块，import导入模块

//模块是自声明的；两个模块之间的关系是通过在文件级别上使用import和exports建立的。
//模块使用模块加载器去导入其它的模块。在运行时，模块加载器的作用是在执行此模块代码前去查找执行这个模块的所有依赖。


//任何声明(比如变量，函数，类，类型别名或接口)都能够通过添加export关键字导出

export interface stringValidator{
    isAcceptable(s:String):boolean;
}

export const numberRegexp=/^[0-9]+$/;



//导出语句很便利，因为我可能需要对导出的部分重命名，所以上面的例子可以这样改写：
class ZipCodeValidator1 implements stringValidator{
    isAcceptable(s:string){
        return s.length===5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator1};
export {ZipCodeValidator1 as mainValidator};

export * from "./stringValidator";

export * from "./ZipCodeValidator";

//导入
//模块的导入操作与导出一样简单。可以使用以下import形式之一来导入其它模块中的导出内容


