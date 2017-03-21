/**
 * Created by Administrator on 2016/11/1.
 */
angular.element(document).ready(function(){
   angular.injector(["ng"]).invoke(function($http){
       var e=document.querySelector("#logger");
       angular.element(e).text($http.toString());
   })
});