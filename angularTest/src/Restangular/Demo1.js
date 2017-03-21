/**
 * Created by Administrator on 2017/2/27.
 */
var app=angular.module('myApp',['restangular']);
app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('/api/vi');
});