/**
 * Created by Administrator on 2016/10/29.
 */
angular.module('ezstuff',[])
.directive('ezNamecard',function(){
     return {
         restrict:'E',
         replace:true,
         template:'<div class="namecard"></div>',
         link:function(scope,element,attrs){
             element.append("<div>name:<span class='name'></span></div>")
                 .append("<div>gender:<span field='gender'></span></div>")
                 .append("<div>age:<span field='age'></span></div>");
             scope.$watch(attrs.data,function(newValue,oldValue){
                 var fields=element.find("span");
                 fields[0].textContent=newValue.name;
                 fields[1].textContent=newValue.gender;
                 fields[2].textContent=newValue.age;
             },true);

             setInterval(function(){
                 scope.$apply("sb.age=sb.age+1");
             },1000)
         }
     }
});