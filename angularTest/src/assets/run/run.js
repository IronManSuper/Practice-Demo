/**
 * Created by Administrator on 2016/11/3.
 */
angular.module('myApp',[])
.run(function($rootScope,AuthService){
    $rootScope.$on('$routeChangeStart',function(evt,next,current){
        if(!AuthService.userLoggedIn()){
            if(next.templateUrl==='login.html'){

            }else{
                $location.path('/login');
            }
        }
    })
});