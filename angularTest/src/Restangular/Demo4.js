/**
 * Created by Administrator on 2017/2/27.
 */
var app=angular.module('myApp',['restangular']);

app.config(function(RestangularProvider){
    RestangularProvider.setRequestInterceptor(function (elem,operation,what) {
        if(operation=='put'){
            elem._id=undefined;
            return elem;
        }

        return elem;
    });
});