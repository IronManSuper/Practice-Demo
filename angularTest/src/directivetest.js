/**
 * Created by Administrator on 2016/10/21.
 */
var myModule=angular.module('myModule',[]);
myModule.controller('myCtrl',['$scope',function(){
    $scope.loadData=function(){
        console.log("加载数据中...");
    }
}]);

myModule.directive('loader',function(){
    return{
        restrict:'AE',
        link:function(scope,element,attr){
            console.log(scope.loadData());
            element.bind("mouseenter",function(){
                scope.$apply("loadData()");
            })
        }
    }
});
