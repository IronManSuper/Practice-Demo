/**
 * Created by Administrator on 2017/2/13.
 */
angular.module('myApp',[])
.controller('MyController',function($scope,$interpolate){
    $scope.$watch('emailBody',function(body){
        console.log(body);
        if(body){
            var template=$interpolate(body);
            var a=document.querySelector('input');
            /*angular.element(a);*/
            console.log(template);
            console.log(angular.element(a)[0].value);
            $scope.previewText=template({to:angular.element(a)[0].value});
            console.log($scope.previewText);
        }
    });
});