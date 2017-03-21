/**
 * Created by Administrator on 2017/2/27.
 */

var app=angular.module('myApp',['restangular']);
app.config(function(RestangularProvider){
   RestangularProvider.setResponseInterceptor(function(data,operation,what){
       if(operation=='getList'){
           var list=data[what];
           list.metadata=data.metadata;
           return list;
       }
       return data;
   });
});