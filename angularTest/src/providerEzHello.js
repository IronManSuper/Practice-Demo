/**
 * Created by Administrator on 2016/11/1.
 */
angular.module('ezstuff',[])
    .provider('ezHello',function () {
        //$get方法是一个类工厂，返回服务的实例
        this.$get=function(){
            return "Hello,world";
        }
    });

angular.element(document).ready(function(){
    angular.injector(["ng","ezstuff"]).invoke(function(ezHello){
        var e=document.querySelector("#logger");
        angular.element(e).text(ezHello)
    });
});