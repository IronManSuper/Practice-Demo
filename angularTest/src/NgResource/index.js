/**
 * Created by Administrator on 2017/2/24.
 */
var app=angular.module('app',['ngResource']);

app.factory('UserService',['$resource',function($resource){
    return $resource('./file/:id.json',{
        id:'id'
    },{
        updata:{
            method:'get'
        }
    });
}]);


app.controller('firstCtrl',['$scope','UserService',function($scope,UserService){
     $scope.GetFile_123=function(){
         UserService.updata({id:123,name:'xyj'},function(data){
             console.log(JSON.stringify(data));
         });
     };

     $scope.GetFile_456=function(){
         UserService.get({id:456},function(data){

             console.log(JSON.stringify(data));
         });
     }
}]);