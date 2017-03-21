/**
 * Created by Administrator on 2017/3/8.
 */
var app=angular.module('myApp',[]);

app.controller('DemoCtrl',['$scope',function($scope){
    $scope.a=[1,2,3,4,5,6]
}]);

app.directive('myDirective',function(){
    console.log('进来了');
    return {
        restrict:'E',
        scope:{
            obj:'=obj'
        },
        template:"<div ng-repeat='val in obj'>{{val}}</div>",
        replace:true
      /*  link:function(scope,elemnt,attr){
            console.log(scope.obj);
            console.log(attr.obj);

        }*/
    }
});