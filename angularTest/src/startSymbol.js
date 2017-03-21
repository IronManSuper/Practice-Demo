/**
 * Created by Administrator on 2017/2/13.
 */
angular.module('emailParser',[])
.config(['$interpolateProvider',function($interpolateProvider){
    $interpolateProvider.startSymbol('$$');
    $interpolateProvider.endSymbol('$$');
}])
.factory('EmailParser',['$interpolate',function($interpolate){
    return{
        parse:function(text){
            var template=$interpolate(text);
            return template(context);
        }
    }
}]);