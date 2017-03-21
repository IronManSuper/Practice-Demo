/**
 * Created by Administrator on 2016/10/29.
 */
var sb={
    name:"somebody",
    gender:'male',
    age:'28'
};
angular.module('ezstuff',[])
.directive("ezNamecard",function(){
    return {
        restrict:'E',
        template:'<div class="namecard"></div>',
        replace:true,
        link:function(scope,element,attrs){
            var sb=eval(attrs.data);
            element.append("<div>name:"+sb.name+"</div>")
                .append("<div>gender : " + sb.gender + "</div>")
                .append("<div>age : " + sb.age + "</div>");
        }
    }
});