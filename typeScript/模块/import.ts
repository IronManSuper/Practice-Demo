/**
 * Created by Administrator on 2017/2/9.
 */

//导入一个模块中的某个导出内容
import {ZipCodeValidator} from "./ZipCodeValidator";

let myValidator= new ZipCodeValidator();

//可以对导入内容重命名
import {ZipCodeValidator as ZCV} from "./ZipCodeValidator";

let myValidator1=new ZCV();

console.log(myValidator1.isAcceptable("Hello World"));


//将整个模块导入到一个变量，并通过它访问模块的导出部分
import * as validator from "./ZipCodeValidator";
let myValidator2=new validator.ZipCodeValidator();

//具有副作用的导入模块
//尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用。
//这些模块可能没有任何的导出或用户根本就不关注它的导出，使用下面的方法导入这类模块
import "./stringValidator";


//默认导出
//每个模块都可以有一个default导出。默认导出使用default关键字标记
//并且一个模块只能够有一个default导出。需要使用一种特殊的导入形式来导入default导出

//default导出十分便利。比如，像jquery这样的类库可能有一个默认导出jquery或￥，
//并且我们基本上也会使用同意的名字jquery或$导出jquery

/*//jquery.d.ts
declare let $:Jquery;
export  defaults $;

//app.ts
import $ from "Jquery";

$("button.continue").html("Next step...");*/


