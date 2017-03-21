/**
 * Created by Administrator on 2016/10/24.
 */
var myApp=angular.module('myApp',[]);/**/
myApp.factory('userListService',['$http',function($http){
    var doReuest=function(username){
        return $http({
            method:'GET',
            url:'data.json'
        });
    };
    return {
        userList:function(username,path){
            return doReuest(username,path);
        }
    }
}]);

myApp.controller('ServiceController',['$scope','$timeout','userListService',function($scope,$timeout,userListService){/*'userListService',   ,userListService*/
    var timeout;
     $scope.$watch('username',function(newUserName,oldUserName){
        console.log('newUserName',newUserName);
        console.log('oldUserName',oldUserName);
        if(newUserName){
            if(timeout){
                $timeout.cancel(timeout)
            }
            timeout=$timeout(function(){
                userListService.userList(newUserName)
                    .success(function(data,status){
                        $scope.users=data.person;
                    });
            })
        }
    });

}]);