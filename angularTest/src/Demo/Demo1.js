/**
 * Created by Administrator on 2017/3/8.
 */
var app=angular.module('myApp',[]);

app.controller('DemoCtrl',['$scope',function($scope){
    $scope.a=[1,2,3,4,5,6,7];
}]);

app.directive('myDirective',function($compile){
    return {
        restrict:'E',
        scope:{
            obj:'=obj'
        },
        templateUrl:'./abc.html',
        controller:function(scope){
            this.test=function(){
                alert(this);
            }
        },
        replace:true,
        link:function(scope,ele,attr){
          /*  ele.bind('mouseover','li',function(){
                console.log(this);
                ele.css({'cursor':'pointer','backgroundColor':'red'})
            });*/
          /* element.bind('click',function(){
               console.log(this);
           });*/
         /*  if (!angular.isArray(scope.obj)){
               scope.obj=[];
           }*/
        }
    }
});