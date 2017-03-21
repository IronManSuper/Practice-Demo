/**
 * Created by Administrator on 2017/2/23.
 */

var app=angular.module('app',[]);

app.factory('getFileFactory',function($http,$q,$cacheFactory){
    console.log($q);
    var myCache=$cacheFactory('myCache');
    function getFile(){
        var result;
        return $http.get('test.json',{cache:myCache}).then(function(d){
            return $q.when(d);
        },function (d) {
            return $q.reject(d);
        });
    }


    return {
        getFile:getFile
    };
});

app.factory('myInterceptor',function($q,$window){
    var interceptor={
        'request':function(config){
            console.log('进入了request');
            /*$window.location.href='www.baidu.com';*/
            return $q.when(config);
        },
        'response':function(response){
            console.log('进入了response');
            return $q.when(response);
        },
        'requestError':function(rejection){
            console.log('进入了requestError');
            return $q.reject(rejection);
        },
        'responseError':function(rejection){
            console.log('进入了responseError');
            return $q.reject(rejection);
        }
    };

    return interceptor;
});

app.config(function($httpProvider){
    $httpProvider.interceptors.push('myInterceptor');
});

app.controller('fileCtrl',['$scope','getFileFactory',function ($scope,getFileFactory) {
    console.log(getFileFactory);
    $scope.getDom=function(){
         getFileFactory.getFile().then(function(data){
             console.log(data.data)
         },function(data){
             console.log(data)
         });
    }
}]);