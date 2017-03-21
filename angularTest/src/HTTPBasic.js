/**
 * Created by Administrator on 2016/10/24.
 */
var myMoodule=angular.module('myModule',[]);
myMoodule.controller('LoadDataCtrl',['$scope','$http',function($scope,$http){
    $http({
        method:'GET',
        url:'data.json'
    }).success(function(data,status,headers,config){
        console.log(data);
        console.log('状态',status);
        console.log('headers',headers);
        console.log('config:',config);
        $scope.users=data;
    }).error(function(data,status,headers,config){
        console.log(data);
        console.log('状态',status);
        console.log('headers',headers);
        console.log('config:',config);
    })
}]);