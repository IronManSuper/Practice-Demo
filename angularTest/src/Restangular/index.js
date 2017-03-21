/**
 * Created by Administrator on 2017/2/24.
 */

var app=angular.module('myApp',['restangular']);

app.factory('UserService',['Restangular','$location',function(Restangular,$location){
    console.log($location.url());
    var allFile=Restangular.all('/src/Restangular/file');

    var listFile=allFile.getList();
    console.log(listFile);

    var oneFile=Restangular.one('file','123.json');

    return {
        getFile_1:allFile,
        getFile_2:listFile,
        getOneFile:oneFile
    }
}]);

app.controller('restangularCtrl',['$scope','UserService','$location',function($scope,UserService,$location){
    console.log($location);
    UserService.getFile_2.get().then(function(d){
        console.log(d);
    },function(d){
        console.log(d);
    })

}]);