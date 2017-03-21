/**
 * Created by Administrator on 2016/10/8.
 */
angular.module('myApp',['ngRoute'])
.controller('aController',['$scope','$route',function($scope,$route){
    $scope.hello='hello a';
}])
.controller('bController',['$scope',function($scope){
    $scope.hello='hello b'
}])
.controller('myCtrl',['$scope','$location',function($scope,$location){
    $scope.$on('$viewContentLoaded',function(){
        console.log('ng-view content loaded');
    });

    $scope.$on('$routeChangeStart',function (event,next,current) {
        console.log("route change start");
    });
}])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider.when('/a',{
        templateUrl:'a.html',
        controller:'aController'
    })
     .when('/b',{
       templateUrl:'b.html',
       controller:'bController',
         resolve:{
           delay:function($q,$timeout){
               var delay=$q.defer();
               $timeout(delay.resolve,3000);
               return delay.promise;
           }
         }
     })
     .otherwise({
         redirectTo:'/a'
     })
}]);