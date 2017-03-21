/**
 * Created by Administrator on 2016/10/29.
 */
angular.module('ezstuff',[])
.directive('ezClock',['$filter',function($filter){
    return{
        restrict:'E',
        replace:true,
        template:'<div class="clock"></div>',
        link:function(scope,element,attrs){
            setInterval(function(){
                var d=$filter('date')(new Date(),'yyyy-MM-dd');
                element.text(d.toString());
            },1000);
        }
    }
}]);