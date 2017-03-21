/**
 * Created by Administrator on 2016/11/2.
 */
angular.module("ezstuff",[])
.controller("ezCtrl",["$scope",function($scope){
    $scope.name="Mr.Whoami";
}])
.directive("ezDialog",function(){
    return{
        restrict:'E',
        replace:true,
        template:"<div class='ez-dialog'><div class='header'>alert<div class='content' ng-transclude></div></div></div>",
        transclude:true
    }
});