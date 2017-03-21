/**
 * Created by Administrator on 2017/2/13.
 */
angular.module('myApp',['emailParser'])
.controller('myController',['$scope','emailParser',function(){
    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello $$to$$';
    $scope.$watch('emailBody',function(body){
        $scope.previewText = emailParser.parse(body, {
            to: $scope.to
        });
    })
}]);