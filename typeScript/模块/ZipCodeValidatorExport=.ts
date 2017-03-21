/**
 * Created by Administrator on 2017/2/9.
 */

/**
 *export=和import=require();
 * Commonjs和AMD都有一个exports对象的概念，它包含了一个模块的所有导出内容
 *
 * 它们也支持把exports替换为一个自定义对象，默认导出就好比这样一个功能；
 * 然而，它们却并不相互兼容。
 * TypeScript模块支持“export=”语法以支持传统的Commonjs和AMD的工作流程模型
 * "export="语法定义一个模块的导出对象。它可以是类，接口，命名空间，函数或枚举
 * 若要导入一个使用了export =的模块时，必须使用TypeScript提供的特定语法import let = require("module")
 */


let numberRegexp=/^[0-9]+$/;

class ZipCodeValidator{
    isAcceptable(s:string){
        return s.length ===5 && numberRegexp.test(s);
    }
}

export =ZipCodeValidator;