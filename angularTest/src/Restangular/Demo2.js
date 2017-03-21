/**
 * Created by Administrator on 2017/2/27.
 */
var app=angular.module('myApp',['restangular']);
app.config(function(RestangularProvider){
    RestangularProvider.addElementTransformer('authors',false,function(element){
        element.fetchedAt=new Date();
        return element;
    });

    RestangularProvider.extendModel('author',function(element){
        element.getFullName=function(){
            return element.name+' '+element.lastName;
        }
        return element;
    })
});


