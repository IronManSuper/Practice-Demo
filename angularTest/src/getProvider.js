/**
 * Created by Administrator on 2016/11/2.
 */
function doCalc(){
    var injector=angular.injector(["ezstuff"]),
        mycalculator=injector.get("ezCalculator"),
        ret=mycalculator.add(3,4);
    document.querySelector("#result").textContent=ret;
}
angular.module("ezstuff",[])
.provider('ezCalculator',function(){
    this.$get=function(){
        return{
            add:function(a,b){return a+b},
            subtract:function(a,b){return a-b},
            multiply:function(a,b){return a*b},
            divide:function(a,b){return a/b}
        }
    };
});