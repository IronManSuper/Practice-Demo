/**
 * Created by Administrator on 2017/2/5.
 */
/**
 *函数类型
 * 接口能够描述javascript中对象拥有的各种各样的外形。除了描绘带有属性的普通对象外，接口也可以描述函数类型。
 */


interface SearchFunc{
    (source:string,subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch=function(source:string,subString:string){
    let result=source.search(subString);
    if(result==-1){
        return false;
    }else{
        return true;
    }
};

mySearch=function(src:string,sub:string):boolean{
    let result=src.search(sub);
    if(result==-1){
        return false;
    }else{
        return true;
    }
};