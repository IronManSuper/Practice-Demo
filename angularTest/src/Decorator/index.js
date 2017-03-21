/**
 * Created by Administrator on 2017/2/23.
 */

var app=angular.module('app',[]);

app.provider('formJson',function(){
    function a1(){
        console.log('提供者');
    }

    this.$get=function(){
        return{
            a:12,
            b:5,
            c:a1
        }
    }
});

app.service('dataText',function(){
    this.showName='JSON';
    this.showAge=18;
});

app.factory('sumFactory',function(){
    return function (num1,num2) {
        return num1+num2;
    }
});

app.controller('ctrl-1',['$scope','sumFactory',function($scope,sumFactory){
    alert(sumFactory(12,5));
}]);

app.controller('ctrl-2',['$scope','formJson',function($scope,formJson){
    console.log(formJson.c());
}]);



app.controller('ctrl-3',['$scope','dataText',function($scope,dataText){
        console.log('name:'+dataText.showName+';Age:'+dataText.showAge);
}]);
app.constant('wuMai',1000);
app.controller('ctrl-4',['$scope','wuMai',function($scope,wuMai){

    console.log('北京的PM2.5：'+wuMai);
}]);

app.value('jiaoZi','Delicious');

app.decorator('jiaoZi',function($delegate){
    console.log('进来了');
    var c=$delegate.jiaoZi='Delicious!!!';
    console.log(c);
    return c;
});

app.controller('ctrl-5',['$scope','jiaoZi',function($scope,jiaoZi){
    console.log('冬至的饺子：'+jiaoZi);
}]);
