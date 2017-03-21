/**
 * Created by Administrator on 2017/2/9.
 */

//下面的例子说明了导入导出语句里使用的名字是怎么转换为相应的模块加载器代码的

import m=require("mod");

export let t=m.something+1;

