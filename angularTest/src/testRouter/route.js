/**
 * Created by Administrator on 2016/11/3.
 */
angular.module('myApp',['ngRoute'])
.config(['$locationProvider,$routeProvider',function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/',{
        templateUrl:'./test1.html',
        controller:'test1Ctrl'
    })
}])
.run(['$location',function($location){
    $location.path('/')
}]);