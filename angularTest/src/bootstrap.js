/**
 * Created by Administrator on 2016/11/1.
 */
angular.element(document).ready(function(){
    var e=document.querySelector("#bootstrap");
    angular.element(e).on('click',function(){
       angular.bootstrap(document,['ezstuff']);
    });
});

angular.module('ezstuff',[])
.directive('ezDuang',function(){
    return{
        restrict:'E',
        template:"<img src='http://ww4.sinaimg.cn/bmiddle/757eb2ffjw1eptcr4qobjg209205dthh.gif'>"
    }
});