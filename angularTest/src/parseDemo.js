/**
 * Created by Administrator on 2017/2/13.
 */

angular.module('myApp',[])
.controller('myController',['$scope','$parse',function($scope,$parse){
    var name="abc";
    $scope.$watch('expr',function(newVal,oldVal,scope){
        console.log(newVal,oldVal,scope);
        $scope.context = {
            add: function(a, b){
                console.log("a"+a,"b"+b);
                return a + b;
            },
            mul: function(a, b){
                return a * b
            }
        };
        $scope.expression = "mul(a, add(b, c))";
        $scope.data = {
            a: 3,
            b: 6,
            c: 9
        };
        var parseFun=$parse(newVal);
        var parseFun2=$parse($scope.expression);

        console.log(parseFun2($scope.context,$scope.data));
        $scope.parsedValue=parseFun(newVal);
    });
}]);